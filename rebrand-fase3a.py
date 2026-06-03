#!/usr/bin/env python3
# Fase 3a: atualizacoes estruturais nas 12 paginas de destino.
# - tag de capa -> tag de paisagem
# - h3 "Perfil ideal" -> temperamento
# - remove "touristType": "Family" do JSON-LD
# Narrativas e paragrafos ficam intactos (Fase 3b futura).

import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))

# Por destino: (tag_antiga, tag_nova, perfil_antigo, perfil_novo)
DEST = {
    "italia": (
        "12-14 dias · Família com crianças e adolescentes",
        "12-14 dias · Cidades + interior + costa",
        "Crianças 6-14 + multi-geração",
        "Cultural + ritmo lento",
    ),
    "japao": (
        "12-14 dias · Filhos 10+",
        "12-14 dias · Cidades + tradição + natureza",
        "Filhos 10+",
        "Contemplativo + imersivo",
    ),
    "patagonia": (
        "8-10 dias · Filhos 10+ ativos",
        "8-10 dias · Montanha + natureza extrema",
        "Outdoorsy, filhos 10+",
        "Aventureiro + outdoorsy",
    ),
    "marrocos": (
        "10-12 dias · Filhos 8+",
        "10-12 dias · Medina + deserto + costa",
        "Filhos 8+",
        "Sensorial + explorador",
    ),
    "africa-do-sul": (
        "11-13 dias · Filhos 8+",
        "11-13 dias · Cidade + costa + savana",
        "Filhos 8+",
        "Naturalista + explorador",
    ),
    "costa-rica": (
        "9-10 dias · Filhos 4-14",
        "9-10 dias · Vulcão + floresta + Pacífico",
        "Crianças 4-14",
        "Naturalista + ativo",
    ),
    "grecia": (
        "9-11 dias · Todas as idades",
        "9-11 dias · Cidade + ilhas + Mediterrâneo",
        "Todas as idades",
        "Contemplativo + sensorial",
    ),
    "tailandia": (
        "12-14 dias · Todas as idades",
        "12-14 dias · Cidade + interior + ilhas",
        "Todas as idades",
        "Sensorial + cultural",
    ),
    "portugal": (
        "9-11 dias · Todas as idades",
        "9-11 dias · Cidade + interior + costa",
        "Multi-geração",
        "Contemplativo + cultural",
    ),
    "suica": (
        "8-10 dias · Família outdoorsy",
        "8-10 dias · Alpes + lagos + vilas",
        "Outdoorsy",
        "Outdoorsy + contemplativo",
    ),
    "eua-parques": (
        "12-14 dias · Famílias com filhos curiosos",
        "12-14 dias · Parques nacionais + geografia extrema",
        "Curiosos por natureza",
        "Naturalista + explorador",
    ),
    "brasil": (
        "7-10 dias · Filhos 6+ (variável por região)",
        "7-10 dias · Nordeste + Amazônia + interior",
        "Brasileiro premium curioso",
        "Naturalista + sensorial",
    ),
}

# Regex para remover o campo touristType (e a virgula que o segue)
TOURIST_TYPE_RX = re.compile(r'\s*"touristType":\s*"Family",?\n')

total = 0
for slug, (old_tag, new_tag, old_perfil, new_perfil) in DEST.items():
    path = os.path.join(ROOT, "destinos", f"{slug}.html")
    if not os.path.exists(path):
        print(f"  ! {slug}.html nao encontrado")
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    changes = 0
    # 1. Tag de capa
    old_span = f'<span class="dest-tag">{old_tag}</span>'
    new_span = f'<span class="dest-tag">{new_tag}</span>'
    if old_span in content:
        content = content.replace(old_span, new_span)
        changes += 1
    else:
        print(f"  ? {slug}: tag '{old_tag}' nao encontrada")

    # 2. H3 do "Perfil ideal" (uso eyebrow como ancora)
    old_perfil_block = f'<span class="eyebrow">Perfil ideal</span>\n        <h3>{old_perfil}</h3>'
    new_perfil_block = f'<span class="eyebrow">Perfil ideal</span>\n        <h3>{new_perfil}</h3>'
    if old_perfil_block in content:
        content = content.replace(old_perfil_block, new_perfil_block)
        changes += 1
    else:
        print(f"  ? {slug}: h3 perfil '{old_perfil}' nao encontrado")

    # 3. Remove touristType: Family
    new_content, n = TOURIST_TYPE_RX.subn('\n', content)
    if n > 0:
        content = new_content
        changes += 1

    if changes > 0:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [{changes}/3] {slug}.html")
        total += changes

print(f"\nTotal: {total} mudancas em 12 destinos.")
