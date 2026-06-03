// ════════════════════════════════════════════════════════════════════════════
// Mapa interativo Tropicco — Leaflet + tiles brancos CARTO Positron
// Pinos revelados por zoom: país → cidade → ponto turístico
// Inspirado em theluxurytraveller.com/hotels-map/
// ════════════════════════════════════════════════════════════════════════════
(function () {

  const container = document.getElementById('mapaWrapper');
  if (!container || typeof L === 'undefined') return;

  // ── Faixas de zoom por nível ───────────────────────────────────────────────
  // país visível até zoom 5 · cidade entre 6–8 · ponto a partir de 9
  const TIERS = {
    pais:   { min: 0, max: 5  },
    cidade: { min: 6, max: 8  },
    ponto:  { min: 9, max: 20 },
  };
  const ZOOM_AO_FOCAR_PAIS   = 5;   // clicar num país dá um zoom suave (mantém o país em foco)
  const ZOOM_AO_FOCAR_CIDADE = 10;  // clicar numa cidade revela seus pontos

  // ── Limites do mundo — impede pan infinito ────────────────────────────────
  const WORLD_BOUNDS = [[-85, -180], [85, 180]];

  // ── Inicializa o mapa ──────────────────────────────────────────────────────
  const map = L.map('mapaWrapper', {
    center: [20, 0],
    zoom: 3,
    minZoom: 3,
    maxZoom: 14,
    zoomControl: false,
    maxBounds: WORLD_BOUNDS,
    maxBoundsViscosity: 1.0,   // borda firme, sem ultrapassar
  });

  // ── Tiles CARTO Positron SEM rótulos — só os nossos nomes aparecem ────────
  // (light_all traz nomes em inglês que conflitam com os nossos pinos)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a>',
    subdomains: 'abcd',
    noWrap: true,              // não repete o mapa horizontalmente
    bounds: WORLD_BOUNDS,
    maxZoom: 20,
  }).addTo(map);

  // ── Zoom no canto inferior direito ────────────────────────────────────────
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // ── Lookup dos destinos (para abrir o painel lateral) ──────────────────────
  const DESTINO_POR_SLUG = {};
  (window.DESTINOS || []).forEach(d => { DESTINO_POR_SLUG[d.slug] = d; });

  // ── Ícones por nível ───────────────────────────────────────────────────────
  function icone(tier, label) {
    return L.divIcon({
      className: '',
      html: `<div class="mapa-pin tier-${tier}">
               <span class="mapa-pin-pulse"></span>
               <span class="mapa-pin-core"></span>
               <span class="mapa-pin-label">${label}</span>
             </div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });
  }

  // ── Constrói os marcadores dos três níveis ────────────────────────────────
  const markersPorTier = { pais: [], cidade: [], ponto: [] };

  (window.MAPA_LUGARES || []).forEach(pais => {

    // — Nível PAÍS —
    const mPais = L.marker([pais.coords.lat, pais.coords.lng], {
      icon: icone('pais', pais.nome),
      title: pais.nome,
      riseOnHover: true,
      bubblingMouseEvents: false,   // impede o clique de fechar o painel
    });
    mPais.on('click', () => {
      const destino = DESTINO_POR_SLUG[pais.slug];
      if (destino && typeof window.abrirPainelDestino === 'function') {
        // abre o painel — que por sua vez chama globoFocarDestino (faz o zoom)
        window.abrirPainelDestino(destino, mPais.getElement());
      } else {
        map.flyTo([pais.coords.lat, pais.coords.lng], ZOOM_AO_FOCAR_PAIS, {
          duration: 1.1, easeLinearity: 0.4,
        });
      }
    });
    markersPorTier.pais.push(mPais);

    // — Nível CIDADE —
    (pais.cidades || []).forEach(cidade => {
      const mCidade = L.marker([cidade.coords.lat, cidade.coords.lng], {
        icon: icone('cidade', cidade.nome),
        title: cidade.nome,
        riseOnHover: true,
        bubblingMouseEvents: false,
      });
      mCidade.on('click', () => {
        map.flyTo([cidade.coords.lat, cidade.coords.lng], ZOOM_AO_FOCAR_CIDADE, {
          duration: 1.0, easeLinearity: 0.4,
        });
      });
      markersPorTier.cidade.push(mCidade);

      // — Nível PONTO —
      (cidade.pontos || []).forEach(ponto => {
        const mPonto = L.marker([ponto.coords.lat, ponto.coords.lng], {
          icon: icone('ponto', ponto.nome),
          title: ponto.nome,
          riseOnHover: true,
          bubblingMouseEvents: false,
        });
        markersPorTier.ponto.push(mPonto);
      });
    });
  });

  // ── Rótulos de fundo: nome de TODOS os países do mundo ─────────────────────
  // Texto cinza discreto. Aparece por faixa de zoom conforme a área do país
  // (grandes primeiro, pequenos só com mais zoom) para não poluir.
  function normaliza(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  }
  const nomesDestino = new Set((window.MAPA_LUGARES || []).map(p => normaliza(p.nome)));

  const rotulosPais = [];
  (window.PAISES_MUNDO || []).forEach(p => {
    if (nomesDestino.has(normaliza(p.nome))) return; // não duplica os destinos Tropicco
    const minZ = p.area >= 2000000 ? 3 : p.area >= 600000 ? 3 : p.area >= 150000 ? 4 : 5;
    const m = L.marker([p.lat, p.lng], {
      icon: L.divIcon({
        className: '',
        html: `<span class="mapa-rotulo-pais">${p.nome}</span>`,
        iconSize: [0, 0],
      }),
      interactive: false,
      keyboard: false,
    });
    m._minZ = minZ;
    rotulosPais.push(m);
  });

  function atualizarRotulos() {
    const z = map.getZoom();
    rotulosPais.forEach(m => {
      const mostrar = z <= 5 && z >= m._minZ;   // só nas faixas de país (2–5)
      const presente = map.hasLayer(m);
      if (mostrar && !presente) m.addTo(map);
      else if (!mostrar && presente) map.removeLayer(m);
    });
  }

  // ── Mostra/esconde níveis conforme o zoom ──────────────────────────────────
  let tierAtivo = null;
  function tierParaZoom(z) {
    if (z <= TIERS.pais.max)   return 'pais';
    if (z <= TIERS.cidade.max) return 'cidade';
    return 'ponto';
  }
  function atualizarTiers() {
    const novo = tierParaZoom(map.getZoom());
    if (novo === tierAtivo) return;
    tierAtivo = novo;
    Object.keys(markersPorTier).forEach(tier => {
      const mostrar = tier === novo;
      markersPorTier[tier].forEach(m => {
        const presente = map.hasLayer(m);
        if (mostrar && !presente) m.addTo(map);
        else if (!mostrar && presente) map.removeLayer(m);
      });
    });
  }
  map.on('zoomend', atualizarTiers);
  map.on('zoomend', atualizarRotulos);
  atualizarTiers();   // estado inicial
  atualizarRotulos();

  // ── Fecha o painel lateral ao clicar no mapa ──────────────────────────────
  map.on('click', () => {
    const panel = document.getElementById('infoPanel');
    if (panel) {
      panel.classList.remove('visible');
      panel.setAttribute('aria-hidden', 'true');
    }
  });

  // ── API pública (compatibilidade com script.js) ───────────────────────────
  window.globoFocarDestino = function (destino) {
    map.flyTo([destino.coords.lat, destino.coords.lng], ZOOM_AO_FOCAR_PAIS, {
      duration: 1.1, easeLinearity: 0.4,
    });
  };
  window.globoRetomarRotacao = function () {};
  window.globoResetarVista = function () {
    map.flyTo([25, 5], 3, { duration: 1.4, easeLinearity: 0.4 });
  };

})();
