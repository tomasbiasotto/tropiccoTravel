// ════════════════════════════════════════════════════════════════════════════
// Mapa interativo Tropicco — Leaflet + tiles brancos CARTO Positron
// Pinos revelados por zoom: país → cidade → ponto turístico
// Inspirado em theluxurytraveller.com/hotels-map/
// ════════════════════════════════════════════════════════════════════════════
(function () {

  const container = document.getElementById('mapaWrapper');
  if (!container || typeof L === 'undefined') return;

  // ── Continentes: pino agregador único no zoom-out (zoom 3) ────────────────
  // No zoom 3 o mundo inteiro é só 7 pinos de continente. Ao clicar num deles,
  // o mapa voa até a região e os países surgem (todo país aparece a partir do
  // zoom 4). pin = posição do rótulo no globo; centro/zoom = destino do voo.
  const CONTINENTES = [
    { nome: 'América do Norte', pin: [52,  -102], centro: [46,  -100], zoom: 4 },
    { nome: 'América Central',  pin: [15,   -86], centro: [14,   -86], zoom: 5 },
    { nome: 'América do Sul',   pin: [-12,  -58], centro: [-21,  -60], zoom: 4 },
    { nome: 'Europa',           pin: [52,    14], centro: [48,    12], zoom: 4 },
    { nome: 'África',           pin: [4,     20], centro: [2,     20], zoom: 4 },
    { nome: 'Ásia',             pin: [44,    88], centro: [32,    98], zoom: 4 },
    { nome: 'Oceania',          pin: [-25,  134], centro: [-21,  150], zoom: 4 },
  ];
  // Faixas de zoom por nível — iguais para o mundo todo.
  //   continente: 3 · país: 4–5 · cidade: 6–8 · ponto: 9+
  function faixaZoom(tier) {
    if (tier === 'pais')   return [4, 5];
    if (tier === 'cidade') return [6, 8];
    return [9, 20]; // ponto — local a uma cidade, não precisa deslocar
  }
  function zoomFoco() { return 6; }            // clicar país → entra nas cidades
  const ZOOM_AO_FOCAR_CIDADE = 9;              // clicar numa cidade revela seus pontos

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
  // ── Chamada à ação do card (WhatsApp da Tropicco) ─────────────────────────
  // O número/e-mail ficam em js/contato.js (window.TROPICCO) — fonte única.
  const ICONE_WHATS = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.31-.01-.48-.01a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg>`;
  function linkContato(assunto, msg) {
    if (window.TROPICCO && window.TROPICCO.link) return window.TROPICCO.link(assunto, msg);
    return `mailto:contato@tropicco.com.br?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(msg)}`;
  }
  function ctaCard(nome) {
    const msg = `Olá! Me encantei pela ${nome} no mapa de vocês e gostaria de saber mais.`;
    return `<a class="pin-card-cta" href="${linkContato('Quero conhecer ' + nome, msg)}" target="_blank" rel="noopener">${ICONE_WHATS}Quero conhecer</a>`;
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
                ${ctaCard(nome)}
              </div>
            </div>`;
  }

  // ── Card do PAÍS (popup ao clicar no pino do país, com link pra página) ────
  function cardPais(pais) {
    const cid = pais.cidades || [];
    const img = cid[0] ? imgDestino(pais.slug, cid[0].nome) : '';
    const imgHtml = img
      ? `<img class="pin-card-img" src="${img}" alt="" onerror="this.remove()">`
      : '';
    return `<div class="pin-card-pop">
              ${imgHtml}
              <div class="pin-card-body">
                <strong class="pin-card-nome">${pais.nome}</strong>
                <a class="pin-card-cta" href="destinos/pais.html?p=${pais.slug}">Conhecer ${pais.nome} →</a>
              </div>
            </div>`;
  }
  const POPUP_OPTS = {
    className: 'pin-pop',
    minWidth: 380,
    maxWidth: 460,
    autoPanPaddingTopLeft: [30, 90],
    autoPanPaddingBottomRight: [30, 30],
  };
  // Card do país: popup independente do pino (sobrevive ao zoom) e sem autoPan,
  // pois o próprio flyTo já centraliza o país.
  const POPUP_PAIS = { className: 'pin-pop', minWidth: 380, maxWidth: 460, autoPan: false };

  // ── Pré-carrega a foto do card ao passar o mouse (evita flash branco) ──────
  const _precarregadas = new Set();
  function precarregar(src) {
    if (!src || _precarregadas.has(src)) return;
    _precarregadas.add(src);
    const img = new Image();
    img.src = src;
  }
  function aoPassar(m, src) {
    m.on('mouseover', () => precarregar(src));
  }

  // ── Constrói os marcadores (cada um com sua faixa de zoom própria) ────────
  const marcadores = [];
  const INDICE = [];   // base de busca: país · cidade · ponto

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
    // Todo país abre o card (popup independente, que sobrevive ao zoom) E voa
    // pra dentro revelando as cidades — as duas coisas ao mesmo tempo.
    mPais.on('click', () => {
      L.popup(POPUP_PAIS).setLatLng([pLat, pLng]).setContent(cardPais(pais)).openOn(map);
      map.flyTo([pLat, pLng], mPais._foco, { duration: 1.1, easeLinearity: 0.4 });
    });
    marcadores.push(mPais);
    INDICE.push({ nome: pais.nome, sub: 'País', tier: 'pais', lat: pLat, lng: pLng, zoom: mPais._foco, marker: mPais, pais });

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
      const cImg = imgDestino(pais.slug, cidade.nome);
      if (cidade.desc) {
        mCidade.bindPopup(cardPin(cidade.nome, cidade.desc, cImg), POPUP_OPTS);
        aoPassar(mCidade, cImg);
      } else {
        mCidade.on('click', () => {
          map.flyTo([cLat, cLng], ZOOM_AO_FOCAR_CIDADE, { duration: 1.0, easeLinearity: 0.4 });
        });
      }
      marcadores.push(mCidade);
      INDICE.push({ nome: cidade.nome, sub: pais.nome, tier: 'cidade', lat: cLat, lng: cLng, zoom: ZOOM_AO_FOCAR_CIDADE, marker: mCidade, hasPopup: !!cidade.desc, pais });

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
        const oImg = imgDestino(pais.slug, ponto.nome);
        if (ponto.desc) {
          mPonto.bindPopup(cardPin(ponto.nome, ponto.desc, oImg), POPUP_OPTS);
          aoPassar(mPonto, oImg);
        }
        marcadores.push(mPonto);
        INDICE.push({ nome: ponto.nome, sub: `${cidade.nome} · ${pais.nome}`, tier: 'ponto', lat: oLat, lng: oLng, zoom: 12, marker: mPonto, hasPopup: !!ponto.desc, pais });
      });
    });
  });

  // ── Pinos agregadores de continente (só no zoom mais afastado) ────────────
  CONTINENTES.forEach(r => {
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
  // Texto cinza discreto, só a partir do zoom 4 — no zoom 3 o mapa mostra apenas
  // os 7 pinos de continente. Países-destino têm pino azul próprio (sem rótulo).
  function normaliza(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  }
  const nomesDestino = new Set((window.MAPA_LUGARES || []).map(p => normaliza(p.nome)));

  const rotulosPais = [];
  (window.PAISES_MUNDO || []).forEach(p => {
    const ehDest = nomesDestino.has(normaliza(p.nome));
    if (ehDest) return;        // destinos Tropicco têm pino azul próprio — sem rótulo cinza
    const zMin = 4, zMax = 5;  // aparecem junto com os países, depois do pino do continente
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
  function esconderComFade(m) {
    const el = m.getElement();
    const pino = el && el.querySelector('.mapa-pin');
    if (pino) {
      pino.classList.add('mapa-pin-saindo');
      m._fadeTimer = setTimeout(() => { map.removeLayer(m); m._fadeTimer = null; }, 260);
    } else {
      map.removeLayer(m);
    }
  }
  function atualizarMarcadores() {
    const z = map.getZoom();
    marcadores.forEach(m => {
      const mostrar = z >= m._zMin && z <= m._zMax;
      const presente = map.hasLayer(m);
      if (mostrar) {
        if (m._fadeTimer) { clearTimeout(m._fadeTimer); m._fadeTimer = null; }
        const el = m.getElement();
        const pino = el && el.querySelector('.mapa-pin');
        if (pino) pino.classList.remove('mapa-pin-saindo');
        if (!presente) m.addTo(map);
      } else if (presente && !m._fadeTimer) {
        esconderComFade(m);
      }
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

  // ── Busca de destinos + "Me surpreenda" ───────────────────────────────────
  function irPara(item, abrirCard) {
    map.flyTo([item.lat, item.lng], item.zoom, { duration: 1.3, easeLinearity: 0.35 });
    if (abrirCard && item.hasPopup && item.marker) {
      map.once('moveend', () => {
        if (!map.hasLayer(item.marker)) item.marker.addTo(map);
        item.marker.openPopup();
      });
    }
  }

  const buscaInput = document.getElementById('mapaBuscaInput');
  const buscaLista = document.getElementById('mapaBuscaLista');
  if (buscaInput && buscaLista) {
    let foco = -1, resultados = [];

    function fechar() {
      buscaLista.hidden = true;
      buscaLista.innerHTML = '';
      foco = -1; resultados = [];
    }
    function render() {
      buscaLista.innerHTML = resultados.map((it, i) => `
        <li role="option" data-i="${i}" class="${i === foco ? 'ativo' : ''}">
          <span class="mapa-busca-nome">${it.nome}</span>
          <span class="mapa-busca-sub">${it.sub}</span>
        </li>`).join('');
      buscaLista.hidden = resultados.length === 0;
    }
    function buscar(termo) {
      const q = normaliza(termo);
      if (q.length < 2) { fechar(); return; }
      const comeca = [], contem = [];
      for (const it of INDICE) {
        const n = normaliza(it.nome);
        if (n.startsWith(q)) comeca.push(it);
        else if (n.includes(q)) contem.push(it);
        if (comeca.length >= 7) break;
      }
      resultados = comeca.concat(contem).slice(0, 7);
      foco = -1;
      render();
    }
    function escolher(i) {
      const it = resultados[i];
      if (!it) return;
      buscaInput.value = it.nome;
      fechar();
      buscaInput.blur();
      irPara(it, true);
    }

    buscaInput.addEventListener('input', () => buscar(buscaInput.value));
    buscaInput.addEventListener('focus', () => { if (buscaInput.value) buscar(buscaInput.value); });
    buscaInput.addEventListener('keydown', (e) => {
      if (buscaLista.hidden) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); foco = Math.min(foco + 1, resultados.length - 1); render(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); foco = Math.max(foco - 1, 0); render(); }
      else if (e.key === 'Enter') { e.preventDefault(); escolher(foco < 0 ? 0 : foco); }
      else if (e.key === 'Escape') { fechar(); }
    });
    buscaLista.addEventListener('mousedown', (e) => {
      const li = e.target.closest('li[data-i]');
      if (li) { e.preventDefault(); escolher(+li.dataset.i); }
    });
    buscaInput.addEventListener('blur', () => setTimeout(fechar, 120));
  }

  const btnSurpresa = document.getElementById('mapaSurpresa');
  if (btnSurpresa) {
    const surpresas = INDICE.filter(it => it.hasPopup);
    let ultima = -1;
    btnSurpresa.addEventListener('click', () => {
      if (!surpresas.length) return;
      let i;
      do { i = Math.floor(Math.random() * surpresas.length); }
      while (surpresas.length > 1 && i === ultima);
      ultima = i;
      if (buscaInput) buscaInput.value = '';
      irPara(surpresas[i], true);
    });
  }

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
