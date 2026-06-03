// ════════════════════════════════════════════════════════════════════════════
// MAPA_LUGARES — hierarquia de pinos do mapa interativo
// ════════════════════════════════════════════════════════════════════════════
// Três níveis revelados por zoom:
//   país   → cidades → pontos
//
// Como adicionar pinos:
//   • Cada país tem um array `cidades`.
//   • Cada cidade tem um array `pontos` (pontos turísticos / experiências).
//   • `slug` no país conecta ao painel lateral (deve existir em destinos.js).
//   • coords: { lat, lng } — use coordenadas reais (Google Maps → clique direito).
//
// Comece adicionando cidades e pontos aos países que ainda só têm o esqueleto.
// ════════════════════════════════════════════════════════════════════════════

window.MAPA_LUGARES = [

  // ─── ITÁLIA (showcase completo) ───────────────────────────────────────────
  {
    slug: 'italia', nome: 'Itália', coords: { lat: 42.8, lng: 12.5 },
    cidades: [
      {
        nome: 'Roma', coords: { lat: 41.9028, lng: 12.4964 },
        pontos: [
          { nome: 'Coliseu',          coords: { lat: 41.8902, lng: 12.4922 } },
          { nome: 'Vaticano',         coords: { lat: 41.9022, lng: 12.4539 } },
          { nome: 'Fontana di Trevi',  coords: { lat: 41.9009, lng: 12.4833 } },
        ]
      },
      {
        nome: 'Florença', coords: { lat: 43.7696, lng: 11.2558 },
        pontos: [
          { nome: 'Duomo',         coords: { lat: 43.7731, lng: 11.2560 } },
          { nome: 'Ponte Vecchio', coords: { lat: 43.7679, lng: 11.2531 } },
          { nome: 'Galeria Uffizi', coords: { lat: 43.7677, lng: 11.2553 } },
        ]
      },
      {
        nome: 'Costa Amalfitana', coords: { lat: 40.634, lng: 14.602 },
        pontos: [
          { nome: 'Positano', coords: { lat: 40.6281, lng: 14.4842 } },
          { nome: 'Ravello',  coords: { lat: 40.6493, lng: 14.6112 } },
        ]
      },
    ]
  },

  // ─── JAPÃO (showcase completo) ─────────────────────────────────────────────
  {
    slug: 'japao', nome: 'Japão', coords: { lat: 36.5, lng: 138.0 },
    cidades: [
      {
        nome: 'Tóquio', coords: { lat: 35.6762, lng: 139.6503 },
        pontos: [
          { nome: 'Shibuya',         coords: { lat: 35.6595, lng: 139.7004 } },
          { nome: 'teamLab Planets', coords: { lat: 35.6497, lng: 139.7900 } },
          { nome: 'Senso-ji',        coords: { lat: 35.7148, lng: 139.7967 } },
        ]
      },
      {
        nome: 'Kyoto', coords: { lat: 35.0116, lng: 135.7681 },
        pontos: [
          { nome: 'Fushimi Inari', coords: { lat: 34.9671, lng: 135.7727 } },
          { nome: 'Kinkaku-ji',    coords: { lat: 35.0394, lng: 135.7292 } },
          { nome: 'Arashiyama',    coords: { lat: 35.0094, lng: 135.6669 } },
        ]
      },
      {
        nome: 'Hokkaido', coords: { lat: 43.0618, lng: 141.3545 },
        pontos: []
      },
    ]
  },

  // ─── PATAGÔNIA ─────────────────────────────────────────────────────────────
  {
    slug: 'patagonia', nome: 'Patagônia', coords: { lat: -50.0, lng: -73.0 },
    cidades: [
      { nome: 'Torres del Paine', coords: { lat: -51.00, lng: -73.00 }, pontos: [] },
      { nome: 'El Calafate',      coords: { lat: -50.34, lng: -72.27 }, pontos: [] },
      { nome: 'El Chaltén',       coords: { lat: -49.33, lng: -72.89 }, pontos: [] },
    ]
  },

  // ─── MARROCOS ──────────────────────────────────────────────────────────────
  {
    slug: 'marrocos', nome: 'Marrocos', coords: { lat: 31.6, lng: -7.0 },
    cidades: [
      { nome: 'Marrakech',     coords: { lat: 31.6295, lng: -7.9811 }, pontos: [] },
      { nome: 'Vale do Atlas', coords: { lat: 31.06,  lng: -7.92 },   pontos: [] },
      { nome: 'Saara',         coords: { lat: 31.08,  lng: -4.01 },   pontos: [] },
      { nome: 'Essaouira',     coords: { lat: 31.5085, lng: -9.7595 }, pontos: [] },
    ]
  },

  // ─── ÁFRICA DO SUL ─────────────────────────────────────────────────────────
  {
    slug: 'africa-do-sul', nome: 'África do Sul', coords: { lat: -30.0, lng: 23.5 },
    cidades: [
      { nome: 'Cidade do Cabo', coords: { lat: -33.9249, lng: 18.4241 }, pontos: [] },
      { nome: 'Garden Route',   coords: { lat: -34.036, lng: 23.047 },  pontos: [] },
      { nome: 'Sabi Sands',     coords: { lat: -24.79,  lng: 31.51 },   pontos: [] },
    ]
  },

  // ─── COSTA RICA ────────────────────────────────────────────────────────────
  {
    slug: 'costa-rica', nome: 'Costa Rica', coords: { lat: 9.9, lng: -84.1 },
    cidades: [
      { nome: 'Arenal',         coords: { lat: 10.4626, lng: -84.7032 }, pontos: [] },
      { nome: 'Monteverde',     coords: { lat: 10.3009, lng: -84.8074 }, pontos: [] },
      { nome: 'Manuel Antonio', coords: { lat: 9.39,    lng: -84.14 },   pontos: [] },
    ]
  },

  // ─── GRÉCIA ────────────────────────────────────────────────────────────────
  {
    slug: 'grecia', nome: 'Grécia', coords: { lat: 39.3, lng: 22.3 },
    cidades: [
      { nome: 'Atenas',    coords: { lat: 37.9838, lng: 23.7275 }, pontos: [] },
      { nome: 'Santorini', coords: { lat: 36.3932, lng: 25.4615 }, pontos: [] },
      { nome: 'Creta',     coords: { lat: 35.3387, lng: 25.1442 }, pontos: [] },
    ]
  },

  // ─── TAILÂNDIA ─────────────────────────────────────────────────────────────
  {
    slug: 'tailandia', nome: 'Tailândia', coords: { lat: 15.0, lng: 100.5 },
    cidades: [
      { nome: 'Bangkok',    coords: { lat: 13.7563, lng: 100.5018 }, pontos: [] },
      { nome: 'Chiang Mai', coords: { lat: 18.7883, lng: 98.9853 },  pontos: [] },
      { nome: 'Krabi',      coords: { lat: 8.0863,  lng: 98.9063 },  pontos: [] },
    ]
  },

  // ─── PORTUGAL ──────────────────────────────────────────────────────────────
  {
    slug: 'portugal', nome: 'Portugal', coords: { lat: 39.5, lng: -8.0 },
    cidades: [
      { nome: 'Lisboa',   coords: { lat: 38.7223, lng: -9.1393 }, pontos: [] },
      { nome: 'Sintra',   coords: { lat: 38.8029, lng: -9.3817 }, pontos: [] },
      { nome: 'Alentejo', coords: { lat: 38.5667, lng: -7.9000 }, pontos: [] },
      { nome: 'Douro',    coords: { lat: 41.1621, lng: -7.7918 }, pontos: [] },
    ]
  },

  // ─── SUÍÇA ─────────────────────────────────────────────────────────────────
  {
    slug: 'suica', nome: 'Suíça', coords: { lat: 46.8, lng: 8.2 },
    cidades: [
      { nome: 'Zermatt',    coords: { lat: 46.0207, lng: 7.7491 }, pontos: [] },
      { nome: 'Lucerna',    coords: { lat: 47.0502, lng: 8.3093 }, pontos: [] },
      { nome: 'Interlaken', coords: { lat: 46.6863, lng: 7.8632 }, pontos: [] },
    ]
  },

  // ─── ESTADOS UNIDOS · PARQUES ──────────────────────────────────────────────
  {
    slug: 'eua-parques', nome: 'Estados Unidos', coords: { lat: 39.5, lng: -98.5 },
    cidades: [
      // ── Cidades icônicas ──
      { nome: 'Nova York',       coords: { lat: 40.7128, lng: -74.0060 }, pontos: [] },
      { nome: 'Washington D.C.', coords: { lat: 38.9072, lng: -77.0369 }, pontos: [] },
      { nome: 'Chicago',         coords: { lat: 41.8781, lng: -87.6298 }, pontos: [] },
      { nome: 'Nova Orleans',    coords: { lat: 29.9511, lng: -90.0715 }, pontos: [] },
      { nome: 'Miami',           coords: { lat: 25.7617, lng: -80.1918 }, pontos: [] },
      { nome: 'Los Angeles',     coords: { lat: 34.0522, lng: -118.2437 }, pontos: [
        { nome: 'Joshua Tree', coords: { lat: 33.8734, lng: -115.9010 } },
      ] },
      { nome: 'São Francisco',   coords: { lat: 37.7749, lng: -122.4194 }, pontos: [
        { nome: 'Redwood', coords: { lat: 41.2132, lng: -124.0046 } },
      ] },
      { nome: 'Seattle',         coords: { lat: 47.6062, lng: -122.3321 }, pontos: [
        { nome: 'Olympic',       coords: { lat: 47.8021, lng: -123.6044 } },
        { nome: 'Mount Rainier', coords: { lat: 46.8523, lng: -121.7603 } },
        { nome: 'Crater Lake',   coords: { lat: 42.9446, lng: -122.1090 } },
      ] },
      { nome: 'Las Vegas',       coords: { lat: 36.1699, lng: -115.1398 }, pontos: [] },

      // ── Parques nacionais (principais) ──
      { nome: 'Grand Canyon',           coords: { lat: 36.0544, lng: -112.1401 }, pontos: [
        { nome: 'Antelope Canyon', coords: { lat: 36.8619, lng: -111.3743 } },
        { nome: 'Horseshoe Bend',  coords: { lat: 36.8791, lng: -111.5104 } },
        { nome: 'Monument Valley', coords: { lat: 36.9980, lng: -110.0985 } },
      ] },
      { nome: 'Zion',                   coords: { lat: 37.2982, lng: -113.0263 }, pontos: [
        { nome: 'Bryce Canyon', coords: { lat: 37.5930, lng: -112.1871 } },
        { nome: 'Capitol Reef', coords: { lat: 38.3669, lng: -111.2615 } },
        { nome: 'Arches',       coords: { lat: 38.7331, lng: -109.5925 } },
        { nome: 'Canyonlands',  coords: { lat: 38.3269, lng: -109.8783 } },
      ] },
      { nome: 'Death Valley',           coords: { lat: 36.5323, lng: -116.9325 }, pontos: [] },
      { nome: 'Yosemite',               coords: { lat: 37.8651, lng: -119.5383 }, pontos: [
        { nome: 'Sequoia & Kings Canyon', coords: { lat: 36.4864, lng: -118.5658 } },
      ] },
      { nome: 'Yellowstone',            coords: { lat: 44.4280, lng: -110.5885 }, pontos: [
        { nome: 'Grand Teton', coords: { lat: 43.7904, lng: -110.6818 } },
      ] },
      { nome: 'Glacier',                coords: { lat: 48.7596, lng: -113.7870 }, pontos: [] },
      { nome: 'Rocky Mountain',         coords: { lat: 40.3428, lng: -105.6836 }, pontos: [] },
      { nome: 'Great Smoky Mountains',  coords: { lat: 35.6118, lng: -83.4895 }, pontos: [] },
      { nome: 'Acadia',                 coords: { lat: 44.3386, lng: -68.2733 }, pontos: [] },
      { nome: 'Everglades',             coords: { lat: 25.2866, lng: -80.8987 }, pontos: [] },
      { nome: 'Hawaii Volcanoes',       coords: { lat: 19.4194, lng: -155.2885 }, pontos: [] },
      { nome: 'Denali',                 coords: { lat: 63.1148, lng: -151.1926 }, pontos: [] },
    ]
  },

  // ─── BRASIL ────────────────────────────────────────────────────────────────
  {
    slug: 'brasil', nome: 'Brasil', coords: { lat: -10.5, lng: -52.0 },
    cidades: [
      { nome: 'Lençóis Maranhenses',  coords: { lat: -2.486,  lng: -43.128 }, pontos: [] },
      { nome: 'Fernando de Noronha',  coords: { lat: -3.8576, lng: -32.4297 }, pontos: [] },
      { nome: 'Amazônia',             coords: { lat: -3.119,  lng: -60.0217 }, pontos: [] },
      { nome: 'Chapada Diamantina',   coords: { lat: -12.5598, lng: -41.3897 }, pontos: [] },
    ]
  },

];
