// Globo 3D fotorrealista — textura NASA Blue Marble sobre fundo branco.
(function () {
  const container = document.getElementById('globe');
  if (!container || typeof Globe === 'undefined') return;

  const ORIGEM = { nome: 'Lagoa Vermelha', lat: -28.21, lng: -51.53 };

  // Mapa slug → país (Natural Earth 110m) pra centralizar pino no centróide
  const PAIS_POR_DESTINO = {
    'italia': 'Italy', 'japao': 'Japan', 'patagonia': 'Argentina',
    'marrocos': 'Morocco', 'africa-do-sul': 'South Africa', 'costa-rica': 'Costa Rica',
    'grecia': 'Greece', 'tailandia': 'Thailand', 'portugal': 'Portugal',
    'suica': 'Switzerland', 'eua-parques': 'United States of America', 'brasil': 'Brazil',
  };

  // Textura de oceano gerada via Canvas — sem dependência externa
  function gerarTexturaOceano() {
    const w = 2048, h = 1024;
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    // Gradiente polo-a-polo: escuro nos polos, azul profundo no equador
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0,    '#02080f');
    g.addColorStop(0.18, '#051628');
    g.addColorStop(0.50, '#0a2548');
    g.addColorStop(0.82, '#051628');
    g.addColorStop(1,    '#02080f');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    // Reflexo de luz suave (simula sol no oceano)
    const r = ctx.createRadialGradient(w * 0.28, h * 0.44, 0, w * 0.28, h * 0.44, w * 0.42);
    r.addColorStop(0, 'rgba(12, 65, 145, 0.28)');
    r.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = r; ctx.fillRect(0, 0, w, h);
    return c.toDataURL('image/jpeg', 0.92);
  }
  const TEXTURA_GLOBO = gerarTexturaOceano();

  // Continentes — tons terrosos/quentes contrastando com o oceano azul profundo
  const COR_CONTINENTE = {
    EU: 'rgba(172, 148,  96, 0.82)',
    AF: 'rgba(185, 148,  78, 0.82)',
    AS: 'rgba(168, 145,  92, 0.82)',
    NA: 'rgba(175, 152, 100, 0.82)',
    SA: 'rgba(162, 142,  84, 0.82)',
    OC: 'rgba(178, 155, 105, 0.82)',
    AN: 'rgba(218, 228, 238, 0.86)',  // gelo antártico
  };
  const COR_CONTINENTE_HOVER = {
    EU: 'rgba(210, 180, 115, 0.96)',
    AF: 'rgba(218, 175, 100, 0.96)',
    AS: 'rgba(205, 175, 110, 0.96)',
    NA: 'rgba(212, 183, 118, 0.96)',
    SA: 'rgba(198, 170, 103, 0.96)',
    OC: 'rgba(213, 186, 124, 0.96)',
    AN: 'rgba(235, 242, 250, 0.96)',
  };
  const COR_DEFAULT       = 'rgba(172, 148, 96, 0.82)';
  const COR_DEFAULT_HOVER = 'rgba(210, 180, 115, 0.96)';
  const COR_LADO          = 'rgba(0, 0, 0, 0.12)';
  const COR_BORDA         = 'rgba(0, 0, 0, 0.18)';

  const CONTINENTE = {
    'Albania':'EU','Andorra':'EU','Austria':'EU','Belarus':'EU','Belgium':'EU',
    'Bosnia and Herz.':'EU','Bulgaria':'EU','Croatia':'EU','Cyprus':'EU','Czechia':'EU','Czech Rep.':'EU',
    'Denmark':'EU','Estonia':'EU','Finland':'EU','France':'EU','Germany':'EU',
    'Greece':'EU','Hungary':'EU','Iceland':'EU','Ireland':'EU','Italy':'EU',
    'Kosovo':'EU','Latvia':'EU','Liechtenstein':'EU','Lithuania':'EU','Luxembourg':'EU',
    'Macedonia':'EU','North Macedonia':'EU','Malta':'EU','Moldova':'EU','Monaco':'EU',
    'Montenegro':'EU','Netherlands':'EU','Norway':'EU','Poland':'EU','Portugal':'EU',
    'Romania':'EU','Russia':'EU','San Marino':'EU','Serbia':'EU','Slovakia':'EU',
    'Slovenia':'EU','Spain':'EU','Sweden':'EU','Switzerland':'EU','Ukraine':'EU',
    'United Kingdom':'EU','Vatican':'EU',
    'Algeria':'AF','Angola':'AF','Benin':'AF','Botswana':'AF','Burkina Faso':'AF',
    'Burundi':'AF','Cameroon':'AF','Cape Verde':'AF','Central African Rep.':'AF','Chad':'AF',
    'Comoros':'AF','Congo':'AF','Dem. Rep. Congo':'AF','Djibouti':'AF','Egypt':'AF',
    'Eq. Guinea':'AF','Eritrea':'AF','Eswatini':'AF','Swaziland':'AF','Ethiopia':'AF',
    'Gabon':'AF','Gambia':'AF','Ghana':'AF','Guinea':'AF','Guinea-Bissau':'AF',
    "Côte d'Ivoire":'AF','Ivory Coast':'AF','Kenya':'AF','Lesotho':'AF','Liberia':'AF',
    'Libya':'AF','Madagascar':'AF','Malawi':'AF','Mali':'AF','Mauritania':'AF',
    'Mauritius':'AF','Morocco':'AF','Mozambique':'AF','Namibia':'AF','Niger':'AF',
    'Nigeria':'AF','Rwanda':'AF','São Tomé and Principe':'AF','Senegal':'AF','Seychelles':'AF',
    'Sierra Leone':'AF','Somalia':'AF','Somaliland':'AF','South Africa':'AF','S. Sudan':'AF','South Sudan':'AF',
    'Sudan':'AF','Tanzania':'AF','Togo':'AF','Tunisia':'AF','Uganda':'AF',
    'W. Sahara':'AF','Western Sahara':'AF','Zambia':'AF','Zimbabwe':'AF',
    'Afghanistan':'AS','Armenia':'AS','Azerbaijan':'AS','Bahrain':'AS','Bangladesh':'AS',
    'Bhutan':'AS','Brunei':'AS','Cambodia':'AS','China':'AS','Georgia':'AS',
    'India':'AS','Indonesia':'AS','Iran':'AS','Iraq':'AS','Israel':'AS',
    'Japan':'AS','Jordan':'AS','Kazakhstan':'AS','Kuwait':'AS','Kyrgyzstan':'AS',
    'Laos':'AS','Lebanon':'AS','Malaysia':'AS','Maldives':'AS','Mongolia':'AS',
    'Myanmar':'AS','Nepal':'AS','North Korea':'AS','Dem. Rep. Korea':'AS','Oman':'AS','Pakistan':'AS',
    'Palestine':'AS','Philippines':'AS','Qatar':'AS','Saudi Arabia':'AS','Singapore':'AS',
    'South Korea':'AS','Korea':'AS','Sri Lanka':'AS','Syria':'AS','Taiwan':'AS','Tajikistan':'AS',
    'Thailand':'AS','Timor-Leste':'AS','East Timor':'AS','Turkey':'AS','Turkmenistan':'AS',
    'United Arab Emirates':'AS','Uzbekistan':'AS','Vietnam':'AS','Yemen':'AS',
    'Antigua and Barb.':'NA','Bahamas':'NA','Barbados':'NA','Belize':'NA','Canada':'NA',
    'Costa Rica':'NA','Cuba':'NA','Dominica':'NA','Dominican Rep.':'NA','El Salvador':'NA',
    'Greenland':'NA','Grenada':'NA','Guatemala':'NA','Haiti':'NA','Honduras':'NA',
    'Jamaica':'NA','Mexico':'NA','Nicaragua':'NA','Panama':'NA','Puerto Rico':'NA',
    'St. Kitts and Nevis':'NA','Saint Lucia':'NA','St. Vin. and Gren.':'NA','Trinidad and Tobago':'NA',
    'United States of America':'NA','United States':'NA','USA':'NA',
    'Argentina':'SA','Bolivia':'SA','Brazil':'SA','Chile':'SA','Colombia':'SA',
    'Ecuador':'SA','Falkland Is.':'SA','Guyana':'SA','Paraguay':'SA','Peru':'SA',
    'Suriname':'SA','Uruguay':'SA','Venezuela':'SA',
    'Australia':'OC','Fiji':'OC','Kiribati':'OC','Marshall Is.':'OC','Micronesia':'OC',
    'Nauru':'OC','New Caledonia':'OC','New Zealand':'OC','Palau':'OC','Papua New Guinea':'OC',
    'Samoa':'OC','Solomon Is.':'OC','Tonga':'OC','Tuvalu':'OC','Vanuatu':'OC',
    'Antarctica':'AN',
  };

  function corPais(d, isHover) {
    const c = CONTINENTE[d.properties && d.properties.name];
    if (!c) return isHover ? COR_DEFAULT_HOVER : COR_DEFAULT;
    return isHover ? COR_CONTINENTE_HOVER[c] : COR_CONTINENTE[c];
  }

  // POV inicial
  const POV_INICIAL = { lat: 10, lng: -30, altitude: 2.6 };
  const POV_INTRO   = { lat: 0,  lng: -30, altitude: 4.2 };

  const world = Globe({
    rendererConfig: { antialias: true, powerPreference: 'high-performance' }
  })(container)
    .backgroundColor('rgba(240,246,252,1)')
    .showAtmosphere(true)
    .atmosphereColor('#6ab4f0')
    .atmosphereAltitude(0.22)
    .showGlobe(true)
    .globeImageUrl(TEXTURA_GLOBO);

  // Cap pixelRatio em Retina/4K (ganho de performance grande)
  try { world.renderer().setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)); } catch (e) {}

  let paisHover = null;

  function aplicarPoligonos(features) {
    world
      .polygonsData(features)
      .polygonCapColor(d => corPais(d, d === paisHover))
      .polygonSideColor(() => COR_LADO)
      .polygonStrokeColor(() => COR_BORDA)
      .polygonAltitude(0.004)
      .polygonsTransitionDuration(0)
      .polygonLabel(() => '')
      .onPolygonHover(h => {
        if (h === paisHover) return;
        paisHover = h;
        world.polygonCapColor(d => corPais(d, d === paisHover));
        container.style.cursor = h ? 'pointer' : 'grab';
      });
  }

  // === ARCOS (origem → destinos) ===
  const arcosIniciais = (window.DESTINOS || []).map(d => ({
    startLat: ORIGEM.lat, startLng: ORIGEM.lng,
    endLat: d.coords.lat, endLng: d.coords.lng,
  }));

  world
    .arcsData(arcosIniciais)
    .arcStartLat('startLat')
    .arcStartLng('startLng')
    .arcEndLat('endLat')
    .arcEndLng('endLng')
    .arcColor(() => ['rgba(255,255,255,0.10)', 'rgba(180,225,255,0.72)'])
    .arcStroke(0.32)
    .arcAltitudeAutoScale(0.45)
    .arcDashLength(0.38)
    .arcDashGap(0.22)
    .arcDashAnimateTime(2600)
    .arcsTransitionDuration(0);

  // === PINO DE ORIGEM (Lagoa Vermelha) ===
  world.pointsData([ORIGEM])
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude(0.012)
    .pointRadius(0.32)
    .pointColor(() => '#1f4f8c')
    .pointResolution(6)
    .pointLabel(d => `<div class="globe-origem-label">${d.nome} · sede</div>`);

  // === PINOS DOS DESTINOS (HTML pra reutilizar CSS .globe-pin) ===
  world.htmlElementsData(window.DESTINOS || [])
    .htmlLat(d => d.coords.lat)
    .htmlLng(d => d.coords.lng)
    .htmlAltitude(0.012)
    .htmlElement(d => {
      const el = document.createElement('div');
      el.className = 'globe-pin';
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', `${d.nome} · ${d.regiao}`);
      el.innerHTML = `
        <div class="pin-card">
          <span class="pin-card-name">${d.nome}</span>
          <span class="pin-card-region">${d.regiao}</span>
        </div>
        <div class="pin-glow"></div>
        <div class="pin-pulse"></div>
        <div class="pin-ring"></div>
        <div class="pin-dot"></div>
      `;
      const open = (ev) => {
        ev.stopPropagation();
        if (typeof window.abrirPainelDestino === 'function') {
          window.abrirPainelDestino(d, el);
        }
      };
      el.addEventListener('click', open);
      el.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(ev); }
      });
      return el;
    });

  // Controles
  world.controls().autoRotate = true;
  world.controls().autoRotateSpeed = 0.32;
  world.controls().enableZoom = true;
  world.controls().enablePan = false;
  world.controls().rotateSpeed = 0.7;
  world.controls().zoomSpeed = 0.6;

  // === INTRO CINEMATOGRÁFICA ===
  world.pointOfView(POV_INTRO, 0);
  setTimeout(() => world.pointOfView(POV_INICIAL, 2400), 250);

  // Resize responsivo
  function resize() {
    world.width(container.offsetWidth);
    world.height(container.offsetHeight);
  }
  window.addEventListener('resize', resize);
  resize();

  // === CARREGA PAÍSES + reposiciona pinos no centróide ===
  function processar(topo) {
    const features = topojson.feature(topo, topo.objects.countries).features;
    aplicarPoligonos(features);

    // Centro do bbox por país (visual mais "natural" que centróide por média)
    function bboxCentro(f) {
      let minLat = 90, maxLat = -90, minLng = 180, maxLng = -180;
      (function walk(arr) {
        if (typeof arr[0] === 'number') {
          const [lng, lat] = arr;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
          if (lng < minLng) minLng = lng;
          if (lng > maxLng) maxLng = lng;
        } else arr.forEach(walk);
      })(f.geometry.coordinates);
      return { lat: (minLat + maxLat) / 2, lng: (minLng + maxLng) / 2 };
    }
    const centroides = {};
    features.forEach(f => {
      const nome = f.properties && f.properties.name;
      if (nome) centroides[nome] = bboxCentro(f);
    });

    (window.DESTINOS || []).forEach(d => {
      const pais = PAIS_POR_DESTINO[d.slug];
      const c = pais && centroides[pais];
      if (c) {
        d.coords.lat = c.lat;
        d.coords.lng = c.lng;
      }
    });

    // Re-renderiza pinos e arcos com coords novas
    world.htmlElementsData([...(window.DESTINOS || [])]);
    world.arcsData((window.DESTINOS || []).map(d => ({
      startLat: ORIGEM.lat, startLng: ORIGEM.lng,
      endLat: d.coords.lat, endLng: d.coords.lng,
    })));
  }

  fetch('https://unpkg.com/world-atlas@2/countries-110m.json')
    .then(r => r.json())
    .then(processar)
    .catch(err => console.warn('Falha ao carregar países:', err));

  // === PAUSA AUTO-ROTATE FORA DO VIEWPORT (perf) ===
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          if (!document.getElementById('infoPanel')?.classList.contains('visible')) {
            world.controls().autoRotate = true;
          }
        } else {
          world.controls().autoRotate = false;
        }
      });
    }, { threshold: 0.15 });
    io.observe(container);
  }

  // === API PÚBLICA ===
  window.globoFocarDestino = function (destino) {
    world.controls().autoRotate = false;
    world.pointOfView({ lat: destino.coords.lat, lng: destino.coords.lng, altitude: 1.7 }, 1900);
  };
  window.globoRetomarRotacao = function () {
    world.controls().autoRotate = true;
  };
  window.globoResetarVista = function () {
    world.controls().autoRotate = true;
    world.pointOfView(POV_INICIAL, 1600);
  };
})();
