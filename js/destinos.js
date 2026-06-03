// Catálogo dos 12 destinos Tropicco — fonte única usada pelo globo, painel lateral e grid de curadoria.
window.DESTINOS = [
  {
    slug: 'italia',
    nome: 'Itália',
    coords: { lat: 43.5, lng: 11.5 },
    regiao: 'Europa',
    tag: '12-14 dias · Cidades + interior + costa',
    subtitulo: 'A Itália que se absorve sem pressa.',
    preview: 'Toscana, Costa Amalfitana e Roma. Distâncias curtas, paisagens distintas, cultura absorvida sem esforço.',
    regioes: ['Toscana', 'Costa Amalfitana', 'Roma']
  },
  {
    slug: 'japao',
    nome: 'Japão',
    coords: { lat: 36.0, lng: 138.0 },
    regiao: 'Ásia',
    tag: '12-14 dias · Cidades + tradição + natureza',
    subtitulo: 'O país que se absorve em silêncio.',
    preview: 'Tóquio, Kyoto e Hokkaido. Modernidade absurda e tradição milenar — choque cultural denso e formativo.',
    regioes: ['Tóquio', 'Kyoto', 'Hokkaido']
  },
  {
    slug: 'patagonia',
    nome: 'Patagônia',
    coords: { lat: -50.5, lng: -73.0 },
    regiao: 'Américas',
    tag: '8-10 dias · Montanha + natureza extrema',
    subtitulo: 'Fim de mundo, com cama macia esperando.',
    preview: 'Torres del Paine, El Calafate e El Chaltén. Aventura controlada com lodges premium dentro do parque.',
    regioes: ['Torres del Paine', 'El Calafate', 'El Chaltén']
  },
  {
    slug: 'marrocos',
    nome: 'Marrocos',
    coords: { lat: 31.6, lng: -7.0 },
    regiao: 'África',
    tag: '10-12 dias · Medina + deserto + costa',
    subtitulo: 'O choque sensorial, com cama macia ao final.',
    preview: 'Marrakech, Atlas, Saara e Essaouira. Choque sensorial em riads, lodges berberes e acampamentos no deserto.',
    regioes: ['Marrakech', 'Vale do Atlas', 'Saara', 'Essaouira']
  },
  {
    slug: 'africa-do-sul',
    nome: 'África do Sul',
    coords: { lat: -25.5, lng: 31.5 },
    regiao: 'África',
    tag: '11-13 dias · Cidade + costa + savana',
    subtitulo: 'A África que está mais próxima do que parece.',
    preview: 'Cape Town, Garden Route e Sabi Sands. Big Five com lodges premium, rastreadores experientes, vista da Table Mountain.',
    regioes: ['Cape Town', 'Garden Route', 'Sabi Sands']
  },
  {
    slug: 'costa-rica',
    nome: 'Costa Rica',
    coords: { lat: 10.0, lng: -84.0 },
    regiao: 'Américas',
    tag: '9-10 dias · Vulcão + floresta + Pacífico',
    subtitulo: 'A natureza dos documentários, na escala de uma viagem.',
    preview: 'Arenal, Monteverde e Pacífico. Vulcões, floresta nas nuvens e fauna em densidade rara.',
    regioes: ['Arenal', 'Monteverde', 'Manuel Antonio ou Nosara']
  },
  {
    slug: 'grecia',
    nome: 'Grécia',
    coords: { lat: 37.0, lng: 25.0 },
    regiao: 'Europa',
    tag: '9-11 dias · Cidade + ilhas + Mediterrâneo',
    subtitulo: 'Mediterrâneo raiz — onde a história entra pela boca.',
    preview: 'Atenas, Santorini ou Naxos, e Creta. Mar mais limpo da Europa, ruínas que viram aula espontânea, barco entre ilhas.',
    regioes: ['Atenas', 'Santorini ou Naxos', 'Creta']
  },
  {
    slug: 'tailandia',
    nome: 'Tailândia',
    coords: { lat: 18.8, lng: 99.0 },
    regiao: 'Ásia',
    tag: '12-14 dias · Cidade + interior + ilhas',
    subtitulo: 'A primeira Ásia — e talvez a mais sorridente.',
    preview: 'Bangkok, Chiang Mai e Krabi. Ásia leve, com gastronomia sensorial, templos místicos e praias paradisíacas.',
    regioes: ['Bangkok', 'Chiang Mai', 'Krabi ou Phuket']
  },
  {
    slug: 'portugal',
    nome: 'Portugal',
    coords: { lat: 38.7, lng: -9.1 },
    regiao: 'Europa',
    tag: '9-11 dias · Cidade + interior + costa',
    subtitulo: 'A Europa em português, sem barreiras.',
    preview: 'Lisboa, Sintra, Alentejo e Douro ou Algarve. A Europa em português, com gastronomia rica e vinho memorável.',
    regioes: ['Lisboa', 'Sintra', 'Alentejo', 'Douro ou Algarve']
  },
  {
    slug: 'suica',
    nome: 'Suíça',
    coords: { lat: 46.5, lng: 8.2 },
    regiao: 'Europa',
    tag: '8-10 dias · Alpes + lagos + vilas',
    subtitulo: 'O cartão-postal que funciona como relógio.',
    preview: 'Zermatt, Lucerna e Interlaken. Esqui no inverno, trilhas alpinas no verão, com chalés boutique e trens cênicos.',
    regioes: ['Zermatt', 'Lucerna', 'Interlaken']
  },
  {
    slug: 'eua-parques',
    nome: 'Estados Unidos',
    nomeCompleto: 'Estados Unidos · Parques Nacionais',
    coords: { lat: 44.5, lng: -110.5 },
    regiao: 'Américas',
    tag: '12-14 dias · Parques nacionais + geografia extrema',
    subtitulo: 'A geografia que parece exagero — e não é.',
    preview: 'Yellowstone, Utah Big 5 ou Yosemite. Lodges históricos dentro dos parques e fauna em densidade quase africana.',
    regioes: ['Yellowstone + Grand Teton', 'Utah Big 5', 'Yosemite + Sequoia']
  },
  {
    slug: 'brasil',
    nome: 'Brasil',
    nomeCompleto: 'Brasil · Nordeste e Amazônia',
    coords: { lat: -3.0, lng: -60.0 },
    regiao: 'Américas',
    tag: '7-10 dias · Nordeste + Amazônia + interior',
    subtitulo: 'O Brasil que está aqui — e que ninguém viu ainda.',
    preview: 'Lençóis, Noronha, Amazônia ou Chapada. O Brasil mais espetacular — com logística doméstica resolvida.',
    regioes: ['Lençóis Maranhenses', 'Fernando de Noronha', 'Amazônia', 'Chapada Diamantina']
  }
];
