// ════════════════════════════════════════════════════════════════════════════
// Mapa interativo Tropicco — Leaflet + tiles brancos CARTO Positron
// Pinos revelados por zoom: país → cidade → ponto turístico
// Inspirado em theluxurytraveller.com/hotels-map/
// ════════════════════════════════════════════════════════════════════════════
(function () {

  const container = document.getElementById('mapaWrapper');
  if (!container || typeof L === 'undefined') return;

  // ── Regiões densas com pino agregador (continente) ────────────────────────
  // No zoom 3 a região vira UM pino; ao clicar/aproximar, os países surgem.
  // bbox = [latMin, latMax, lngMin, lngMax]
  const REGIOES = [
    { nome: 'Europa', pin: [48.5, 9.5], centro: [47.0, 9.0], zoom: 4, bbox: [36, 60, -10, 30] },
    { nome: 'África', pin: [3.0, 21.0], centro: [3.0, 20.0], zoom: 4, bbox: [-35, 38, -18, 42] },
  ];
  function regiaoDe(lat, lng) {
    for (const r of REGIOES) {
      const b = r.bbox;
      if (lat >= b[0] && lat <= b[1] && lng >= b[2] && lng <= b[3]) return r;
    }
    return null;
  }
  // Faixas de zoom por nível. Em região densa tudo sobe ~1 nível pra desafogar.
  function faixaZoom(tier, lat, lng) {
    const denso = !!regiaoDe(lat, lng);
    if (tier === 'pais')   return denso ? [4, 6] : [0, 5];
    if (tier === 'cidade') return denso ? [7, 8] : [6, 8];
    return [9, 20]; // ponto — local a uma cidade, não precisa deslocar
  }
  function zoomFoco(lat, lng) { return regiaoDe(lat, lng) ? 7 : 6; } // clicar país → entra nas cidades
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
      popupAnchor: [0, -8],
    });
  }

  // ── Card do destino (popup ao clicar numa cidade/ponto com descrição) ──────
  function slugify(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function imgDestino(paisSlug, nome) {
    return `assets/mapa/${paisSlug}/${slugify(nome)}.jpg`;
  }
  function cardPin(nome, desc, img) {
    const imgHtml = img
      ? `<img class="pin-card-img" src="${img}" alt="" onerror="this.remove()">`
      : '';
    return `<div class="pin-card-pop">
              ${imgHtml}
              <div class="pin-card-body">
                <strong class="pin-card-nome">${nome}</strong>
                <p class="pin-card-desc">${desc}</p>
              </div>
            </div>`;
  }
  const POPUP_OPTS = {
    className: 'pin-pop',
    minWidth: 210,
    maxWidth: 250,
    autoPanPaddingTopLeft: [30, 90],
    autoPanPaddingBottomRight: [30, 30],
  };

  // ── Constrói os marcadores (cada um com sua faixa de zoom própria) ────────
  const marcadores = [];

  (window.MAPA_LUGARES || []).forEach(pais => {
    const pLat = pais.coords.lat, pLng = pais.coords.lng;

    // — Nível PAÍS —
    const mPais = L.marker([pLat, pLng], {
      icon: icone('pais', pais.nome),
      title: pais.nome,
      riseOnHover: true,
      bubblingMouseEvents: false,   // impede o clique de fechar o painel
    });
    const fp = faixaZoom('pais', pLat, pLng);
    mPais._zMin = fp[0]; mPais._zMax = fp[1];
    mPais._foco = zoomFoco(pLat, pLng);
    mPais.on('click', () => {
      const destino = DESTINO_POR_SLUG[pais.slug];
      if (destino && typeof window.abrirPainelDestino === 'function') {
        window.abrirPainelDestino(destino, mPais.getElement());
      } else {
        map.flyTo([pLat, pLng], mPais._foco, { duration: 1.1, easeLinearity: 0.4 });
      }
    });
    marcadores.push(mPais);

    // — Nível CIDADE —
    (pais.cidades || []).forEach(cidade => {
      const cLat = cidade.coords.lat, cLng = cidade.coords.lng;
      const mCidade = L.marker([cLat, cLng], {
        icon: icone('cidade', cidade.nome),
        title: cidade.nome,
        riseOnHover: true,
        bubblingMouseEvents: false,
      });
      const fc = faixaZoom('cidade', cLat, cLng);
      mCidade._zMin = fc[0]; mCidade._zMax = fc[1];
      if (cidade.desc) {
        mCidade.bindPopup(cardPin(cidade.nome, cidade.desc, imgDestino(pais.slug, cidade.nome)), POPUP_OPTS);
      } else {
        mCidade.on('click', () => {
          map.flyTo([cLat, cLng], ZOOM_AO_FOCAR_CIDADE, { duration: 1.0, easeLinearity: 0.4 });
        });
      }
      marcadores.push(mCidade);

      // — Nível PONTO —
      (cidade.pontos || []).forEach(ponto => {
        const oLat = ponto.coords.lat, oLng = ponto.coords.lng;
        const mPonto = L.marker([oLat, oLng], {
          icon: icone('ponto', ponto.nome),
          title: ponto.nome,
          riseOnHover: true,
          bubblingMouseEvents: false,
        });
        const fo = faixaZoom('ponto', oLat, oLng);
        mPonto._zMin = fo[0]; mPonto._zMax = fo[1];
        if (ponto.desc) {
          mPonto.bindPopup(cardPin(ponto.nome, ponto.desc, imgDestino(pais.slug, ponto.nome)), POPUP_OPTS);
        }
        marcadores.push(mPonto);
      });
    });
  });

  // ── Pinos agregadores de continente (só no zoom mais afastado) ────────────
  REGIOES.forEach(r => {
    const mReg = L.marker(r.pin, {
      icon: icone('continente', r.nome),
      title: r.nome,
      riseOnHover: true,
      bubblingMouseEvents: false,
    });
    mReg._zMin = 3; mReg._zMax = 3;
    mReg.on('click', () => map.flyTo(r.centro, r.zoom, { duration: 1.2, easeLinearity: 0.4 }));
    marcadores.push(mReg);
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
    const ehDest = nomesDestino.has(normaliza(p.nome));
    if (ehDest) return;        // destinos Tropicco têm pino azul próprio — sem rótulo cinza
    const reg = regiaoDe(p.lat, p.lng);
    let zMin, zMax;
    if (reg) {
      zMin = 4; zMax = 5;      // país em região agregada: aparece após o pino do continente (zoom 4+)
    } else {
      zMin = p.area >= 600000 ? 3 : p.area >= 150000 ? 4 : 5;
      zMax = 5;
    }
    const m = L.marker([p.lat, p.lng], {
      icon: L.divIcon({
        className: '',
        html: `<span class="mapa-rotulo-pais">${p.nome}</span>`,
        iconSize: [0, 0],
      }),
      interactive: false,
      keyboard: false,
    });
    m._zMin = zMin; m._zMax = zMax;
    rotulosPais.push(m);
  });

  function atualizarRotulos() {
    const z = map.getZoom();
    rotulosPais.forEach(m => {
      const mostrar = z >= m._zMin && z <= m._zMax;
      const presente = map.hasLayer(m);
      if (mostrar && !presente) m.addTo(map);
      else if (!mostrar && presente) map.removeLayer(m);
    });
  }

  // ── Mostra/esconde marcadores conforme o zoom (faixa própria de cada um) ───
  function atualizarMarcadores() {
    const z = map.getZoom();
    marcadores.forEach(m => {
      const mostrar = z >= m._zMin && z <= m._zMax;
      const presente = map.hasLayer(m);
      if (mostrar && !presente) m.addTo(map);
      else if (!mostrar && presente) map.removeLayer(m);
    });
  }
  map.on('zoomend', atualizarMarcadores);
  map.on('zoomend', atualizarRotulos);
  atualizarMarcadores();   // estado inicial
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
    const z = zoomFoco(destino.coords.lat, destino.coords.lng);
    map.flyTo([destino.coords.lat, destino.coords.lng], z, {
      duration: 1.1, easeLinearity: 0.4,
    });
  };
  window.globoRetomarRotacao = function () {};
  window.globoResetarVista = function () {
    map.flyTo([25, 5], 3, { duration: 1.4, easeLinearity: 0.4 });
  };

})();
