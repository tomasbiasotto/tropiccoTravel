# ════════════════════════════════════════════════════════════════════════════
# baixar-imagens.ps1 — baixa fotos dos destinos via API do Pexels
# ════════════════════════════════════════════════════════════════════════════
# Uso:
#   .\tools\baixar-imagens.ps1 -ApiKey "SUA_CHAVE_PEXELS"
#   .\tools\baixar-imagens.ps1 -ApiKey "SUA_CHAVE" -Slug italia      (só um país)
#   .\tools\baixar-imagens.ps1 -ApiKey "SUA_CHAVE" -Force            (rebaixa tudo)
#
# Lê tools/imagens-queries.json e salva em assets/destinos/<slug>/cover.jpg
# e assets/destinos/<slug>/<regiao>.jpg
# ════════════════════════════════════════════════════════════════════════════
param(
  [Parameter(Mandatory = $true)][string]$ApiKey,
  [string]$Slug = "",
  [switch]$Force
)

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root    = Split-Path $PSScriptRoot -Parent
$mapPath = Join-Path $PSScriptRoot "imagens-queries.json"
$map     = [System.IO.File]::ReadAllText($mapPath, [System.Text.Encoding]::UTF8) | ConvertFrom-Json
$headers = @{ Authorization = $ApiKey }

function Get-PexelsImage([string]$query) {
  $u = "https://api.pexels.com/v1/search?query=" + [uri]::EscapeDataString($query) +
       "&orientation=landscape&per_page=1&size=large"
  $r = Invoke-RestMethod -Uri $u -Headers $headers -TimeoutSec 30
  if ($r.photos -and $r.photos.Count -ge 1) { return $r.photos[0].src.large2x }
  return $null
}

function Save-Image([string]$imgUrl, [string]$outPath) {
  $wc = New-Object System.Net.WebClient
  $wc.DownloadFile($imgUrl, $outPath)
}

$total = 0; $ok = 0; $skip = 0
foreach ($prop in $map.PSObject.Properties) {
  $s = $prop.Name
  if ($Slug -and $s -ne $Slug) { continue }
  $entry = $prop.Value
  $dir = Join-Path $root "assets\destinos\$s"
  New-Item -ItemType Directory -Force -Path $dir | Out-Null

  # ── capa do país ──
  $coverPath = Join-Path $dir "cover.jpg"
  $total++
  if ((Test-Path $coverPath) -and -not $Force) { $skip++; Write-Host "skip $s/cover.jpg" }
  else {
    try {
      $img = Get-PexelsImage $entry.cover
      if ($img) { Save-Image $img $coverPath; $ok++; Write-Host "OK   $s/cover.jpg" }
      else { Write-Host "--   $s/cover (sem resultado p/ '$($entry.cover)')" }
    } catch { Write-Host "ERRO $s/cover : $($_.Exception.Message)" }
    Start-Sleep -Milliseconds 350
  }

  # ── regiões ──
  foreach ($rp in $entry.regioes.PSObject.Properties) {
    $rslug = $rp.Name; $rq = $rp.Value
    $rPath = Join-Path $dir "$rslug.jpg"
    $total++
    if ((Test-Path $rPath) -and -not $Force) { $skip++; Write-Host "skip $s/$rslug.jpg"; continue }
    try {
      $img = Get-PexelsImage $rq
      if ($img) { Save-Image $img $rPath; $ok++; Write-Host "OK   $s/$rslug.jpg" }
      else { Write-Host "--   $s/$rslug (sem resultado p/ '$rq')" }
    } catch { Write-Host "ERRO $s/$rslug : $($_.Exception.Message)" }
    Start-Sleep -Milliseconds 350
  }
}

Write-Host ""
Write-Host "════════════════════════════════════════════"
Write-Host "Baixadas: $ok · Já existiam: $skip · Total: $total"
Write-Host "════════════════════════════════════════════"
