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

  // ─── ITÁLIA ────────────────────────────────────────────────────────────────
  {
    slug: 'italia', nome: 'Itália', coords: { lat: 42.8, lng: 12.5 },
    cidades: [
      { nome: 'Roma', coords: { lat: 41.9028, lng: 12.4964 },
        desc: 'A cidade eterna — onde cada esquina é uma ruína viva e o tempo se mistura ao cotidiano.', pontos: [
        { nome: 'Coliseu', coords: { lat: 41.8902, lng: 12.4922 },
          desc: 'O anfiteatro que reunia 50 mil pessoas — o símbolo máximo de Roma.' },
        { nome: 'Vaticano', coords: { lat: 41.9022, lng: 12.4539 },
          desc: 'O menor país do mundo guarda a Capela Sistina e a Basílica de São Pedro.' },
        { nome: 'Fontana di Trevi', coords: { lat: 41.9009, lng: 12.4833 },
          desc: 'A fonte barroca onde se joga a moeda que promete o retorno a Roma.' },
        { nome: 'Pantheon', coords: { lat: 41.8986, lng: 12.4769 },
          desc: 'O templo romano mais bem preservado — uma cúpula perfeita com 2.000 anos.' },
        { nome: 'Fórum Romano', coords: { lat: 41.8925, lng: 12.4853 },
          desc: 'O coração da Roma antiga, onde a república nasceu entre colunas e templos.' },
      ] },
      { nome: 'Florença', coords: { lat: 43.7696, lng: 11.2558 },
        desc: 'O berço do Renascimento: arte, cúpulas e o melhor da Toscana a pé.', pontos: [
        { nome: 'Duomo', coords: { lat: 43.7731, lng: 11.2560 },
          desc: 'A catedral de Florença e sua cúpula de tijolos — a obra-prima de Brunelleschi.' },
        { nome: 'Ponte Vecchio', coords: { lat: 43.7679, lng: 11.2531 },
          desc: 'A ponte medieval coberta de ourivesarias sobre o rio Arno.' },
        { nome: 'Galeria Uffizi', coords: { lat: 43.7677, lng: 11.2553 },
          desc: 'Botticelli, Da Vinci e Michelangelo sob um mesmo teto.' },
      ] },
      { nome: 'Veneza', coords: { lat: 45.4408, lng: 12.3155 },
        desc: 'A cidade sobre a água — canais no lugar de ruas, gôndolas e palácios que flutuam.', pontos: [
        { nome: 'Praça São Marcos', coords: { lat: 45.4341, lng: 12.3388 },
          desc: 'O salão de visitas da Europa — a basílica dourada e os cafés centenários.' },
        { nome: 'Canal Grande', coords: { lat: 45.4400, lng: 12.3320 },
          desc: 'A avenida de água de Veneza, ladeada por palácios de mármore.' },
        { nome: 'Ponte di Rialto', coords: { lat: 45.4380, lng: 12.3358 },
          desc: 'A ponte de pedra mais famosa sobre o Canal Grande, repleta de lojas.' },
      ] },
      { nome: 'Costa Amalfitana', coords: { lat: 40.634, lng: 14.602 },
        desc: 'Vilarejos pendurados em penhascos sobre o Mediterrâneo — a Itália de cartão-postal.', pontos: [
        { nome: 'Positano', coords: { lat: 40.6281, lng: 14.4842 },
          desc: 'O vilarejo vertical mais fotografado da Costa Amalfitana.' },
        { nome: 'Ravello', coords: { lat: 40.6493, lng: 14.6112 },
          desc: 'Jardins suspensos com a vista mais serena do Mediterrâneo.' },
        { nome: 'Capri', coords: { lat: 40.5532, lng: 14.2222 },
          desc: 'A ilha glamourosa da Gruta Azul e dos Faraglioni emergindo do mar.' },
        { nome: 'Amalfi', coords: { lat: 40.6340, lng: 14.6027 },
          desc: 'A vila que dá nome à costa, com sua catedral árabe-normanda.' },
      ] },
      { nome: 'Milão', coords: { lat: 45.4642, lng: 9.1900 },
        desc: 'A capital da moda e do design — catedral gótica, ópera e aperitivo ao entardecer.', pontos: [
        { nome: 'Duomo de Milão', coords: { lat: 45.4641, lng: 9.1919 },
          desc: 'A catedral gótica de mármore branco, com seus mil pináculos e estátuas.' },
        { nome: 'Galleria Vittorio Emanuele', coords: { lat: 45.4659, lng: 9.1899 },
          desc: 'A galeria comercial mais antiga da Itália, sob uma abóbada de vidro.' },
      ] },
      { nome: 'Nápoles', coords: { lat: 40.8518, lng: 14.2681 },
        desc: 'Caótica e apaixonante — a melhor pizza do mundo e o portão para Pompeia e Capri.', pontos: [
        { nome: 'Pompeia', coords: { lat: 40.7497, lng: 14.4869 },
          desc: 'A cidade romana congelada no tempo pela erupção do Vesúvio em 79 d.C.' },
        { nome: 'Vesúvio', coords: { lat: 40.8210, lng: 14.4260 },
          desc: 'O vulcão que sepultou Pompeia — e a vista da cratera sobre a baía de Nápoles.' },
      ] },
      { nome: 'Cinque Terre', coords: { lat: 44.1280, lng: 9.7095 },
        desc: 'Cinco vilas de casas coloridas agarradas aos penhascos da Ligúria.', pontos: [
        { nome: 'Vernazza', coords: { lat: 44.1350, lng: 9.6843 },
          desc: 'A mais bonita das cinco vilas — um porto natural entre casas coloridas.' },
        { nome: 'Manarola', coords: { lat: 44.1069, lng: 9.7281 },
          desc: 'Casas empilhadas sobre o mar e os vinhedos em terraços da Ligúria.' },
      ] },
      { nome: 'Toscana', coords: { lat: 43.40, lng: 11.30 },
        desc: 'Colinas onduladas, ciprestes, vinhedos e cidades medievais douradas pelo sol.', pontos: [
        { nome: 'Siena', coords: { lat: 43.3188, lng: 11.3308 },
          desc: 'A praça em concha onde corre o Palio — o gótico medieval intacto.' },
        { nome: 'San Gimignano', coords: { lat: 43.4675, lng: 11.0431 },
          desc: 'A "Manhattan medieval", com suas torres de pedra recortando o céu toscano.' },
      ] },
      { nome: 'Sicília', coords: { lat: 37.8516, lng: 15.2853 },
        desc: 'A maior ilha do Mediterrâneo — templos gregos, o vulcão Etna e o mar mais limpo.', pontos: [
        { nome: 'Etna', coords: { lat: 37.7510, lng: 14.9934 },
          desc: 'O maior vulcão ativo da Europa, fumegando sobre vinhedos e neve.' },
        { nome: 'Vale dos Templos', coords: { lat: 37.2900, lng: 13.5853 },
          desc: 'Templos gregos melhor preservados que na própria Grécia, em Agrigento.' },
      ] },
      { nome: 'Bolonha', coords: { lat: 44.4949, lng: 11.3426 },
        desc: 'A capital gastronômica da Itália — pórticos infinitos e a massa que nasceu aqui.', pontos: [] },
      { nome: 'Lago di Como', coords: { lat: 45.9852, lng: 9.2572 },
        desc: 'Vilas elegantes e jardins debruçados sobre o lago, aos pés dos Alpes.', pontos: [] },
      { nome: 'Verona', coords: { lat: 45.4384, lng: 10.9916 },
        desc: 'A cidade de Romeu e Julieta — arena romana e romance a céu aberto.', pontos: [] },
      { nome: 'Pisa', coords: { lat: 43.7228, lng: 10.4017 },
        desc: 'A torre que se inclina há 800 anos, no Campo dos Milagres.', pontos: [] },
    ]
  },

  // ─── JAPÃO ─────────────────────────────────────────────────────────────────
  {
    slug: 'japao', nome: 'Japão', coords: { lat: 36.5, lng: 138.0 },
    cidades: [
      { nome: 'Tóquio', coords: { lat: 35.6762, lng: 139.6503 },
        desc: 'Néon, templos e a maior cidade do mundo — onde o futuro convive com a tradição.', pontos: [
        { nome: 'Shibuya', coords: { lat: 35.6595, lng: 139.7004 },
          desc: 'O cruzamento mais movimentado do planeta, pulsando dia e noite.' },
        { nome: 'teamLab Planets', coords: { lat: 35.6497, lng: 139.7900 },
          desc: 'Um museu digital imersivo onde a arte reage ao seu toque.' },
        { nome: 'Senso-ji', coords: { lat: 35.7148, lng: 139.7967 },
          desc: 'O templo mais antigo de Tóquio, com seu portão e lanterna gigantes.' },
      ] },
      { nome: 'Kyoto', coords: { lat: 35.0116, lng: 135.7681 },
        desc: 'A antiga capital imperial: mil templos, gueixas e jardins zen.', pontos: [
        { nome: 'Fushimi Inari', coords: { lat: 34.9671, lng: 135.7727 },
          desc: 'Os milhares de portões vermelhos que sobem a montanha sagrada.' },
        { nome: 'Kinkaku-ji', coords: { lat: 35.0394, lng: 135.7292 },
          desc: 'O Pavilhão Dourado refletido no espelho do lago.' },
        { nome: 'Arashiyama', coords: { lat: 35.0094, lng: 135.6669 },
          desc: 'A floresta de bambu por onde a luz desce filtrada em verde.' },
      ] },
      { nome: 'Osaka', coords: { lat: 34.6937, lng: 135.5023 },
        desc: 'A cozinha de rua do Japão — Dotonbori em néon e um castelo sobre a água.', pontos: [
        { nome: 'Dotonbori', coords: { lat: 34.6687, lng: 135.5013 },
          desc: 'O coração néon de Osaka, espelhado no canal e transbordando de comida.' },
        { nome: 'Castelo de Osaka', coords: { lat: 34.6873, lng: 135.5259 },
          desc: 'A fortaleza branca e dourada cercada por um fosso e cerejeiras.' },
      ] },
      { nome: 'Monte Fuji', coords: { lat: 35.3606, lng: 138.7274 },
        desc: 'A montanha sagrada e simétrica — o símbolo eterno do Japão.', pontos: [
        { nome: 'Lago Kawaguchi', coords: { lat: 35.5171, lng: 138.7536 },
          desc: 'O reflexo perfeito do Fuji nas águas calmas do lago.' },
        { nome: 'Hakone', coords: { lat: 35.2324, lng: 139.1069 },
          desc: 'Onsen, teleférico e a vista do Fuji entre as montanhas.' },
      ] },
      { nome: 'Hiroshima', coords: { lat: 34.3853, lng: 132.4553 },
        desc: 'Renascida da tragédia — memória, paz e o santuário flutuante de Miyajima.', pontos: [
        { nome: 'Miyajima', coords: { lat: 34.2960, lng: 132.3199 },
          desc: 'O portão torii que flutua na maré — um dos cenários mais sagrados do Japão.' },
      ] },
      { nome: 'Nara', coords: { lat: 34.6851, lng: 135.8048 },
        desc: 'A primeira capital imperial — cervos livres e o maior Buda de bronze do mundo.', pontos: [
        { nome: 'Todai-ji', coords: { lat: 34.6890, lng: 135.8398 },
          desc: 'O templo de madeira que abriga o Grande Buda de 15 metros.' },
      ] },
      { nome: 'Hokkaido', coords: { lat: 43.0618, lng: 141.3545 },
        desc: 'A ilha do norte — neve, onsen, lavanda e a natureza mais selvagem do Japão.', pontos: [
        { nome: 'Niseko', coords: { lat: 42.8048, lng: 140.6874 },
          desc: 'A neve mais leve do mundo — o paraíso do esqui no norte do Japão.' },
      ] },
    ]
  },

  // ─── PATAGÔNIA ─────────────────────────────────────────────────────────────
  {
    slug: 'patagonia', nome: 'Patagônia', coords: { lat: -50.0, lng: -73.0 },
    cidades: [
      { nome: 'Torres del Paine', coords: { lat: -51.00, lng: -73.00 },
        desc: 'As três torres de granito que coroam o parque mais espetacular do Chile.', pontos: [] },
      { nome: 'El Calafate', coords: { lat: -50.34, lng: -72.27 },
        desc: 'A base para o Perito Moreno — uma geleira viva que se parte em estrondos.', pontos: [
        { nome: 'Perito Moreno', coords: { lat: -50.4967, lng: -73.1377 },
          desc: 'Uma muralha de gelo de 60 metros que rompe e desaba dentro do lago.' },
      ] },
      { nome: 'El Chaltén', coords: { lat: -49.33, lng: -72.89 },
        desc: 'A capital argentina do trekking, aos pés do Monte Fitz Roy.', pontos: [
        { nome: 'Monte Fitz Roy', coords: { lat: -49.2710, lng: -73.0438 },
          desc: 'A silhueta de granito mais cobiçada dos montanhistas do mundo.' },
        { nome: 'Laguna de los Tres', coords: { lat: -49.2950, lng: -73.0100 },
          desc: 'A lagoa turquesa aos pés do Fitz Roy — o fim da trilha mais famosa.' },
      ] },
      { nome: 'Ushuaia', coords: { lat: -54.8019, lng: -68.3030 },
        desc: 'O fim do mundo — a cidade mais austral do planeta, entre montanhas e o Canal Beagle.', pontos: [
        { nome: 'Canal Beagle', coords: { lat: -54.8700, lng: -68.2000 },
          desc: 'A navegação entre ilhas de pinguins, lobos-marinhos e o farol do fim do mundo.' },
      ] },
      { nome: 'Bariloche', coords: { lat: -41.1335, lng: -71.3103 },
        desc: 'A Suíça argentina — lagos, chocolate e os Andes refletidos na água.', pontos: [
        { nome: 'Cerro Catedral', coords: { lat: -41.1680, lng: -71.4420 },
          desc: 'A maior estação de esqui da América do Sul, sobre o lago Nahuel Huapi.' },
      ] },
    ]
  },

  // ─── MARROCOS ──────────────────────────────────────────────────────────────
  {
    slug: 'marrocos', nome: 'Marrocos', coords: { lat: 31.6, lng: -7.0 },
    cidades: [
      { nome: 'Marrakech', coords: { lat: 31.6295, lng: -7.9811 },
        desc: 'A cidade vermelha — souks, riads e a praça Jemaa el-Fna ao entardecer.', pontos: [
        { nome: 'Jemaa el-Fna', coords: { lat: 31.6258, lng: -7.9891 },
          desc: 'A praça que vira um teatro a céu aberto à noite — encantadores, músicos e fumaça.' },
        { nome: 'Jardim Majorelle', coords: { lat: 31.6417, lng: -8.0033 },
          desc: 'O oásis azul-cobalto que Yves Saint Laurent salvou e amou.' },
      ] },
      { nome: 'Fès', coords: { lat: 34.0181, lng: -5.0078 },
        desc: 'A capital espiritual — a maior medina medieval do mundo, um labirinto vivo.', pontos: [
        { nome: 'Curtumes de Fès', coords: { lat: 34.0664, lng: -4.9700 },
          desc: 'Os tanques de tinturaria medievais, um mosaico de cores visto dos terraços.' },
      ] },
      { nome: 'Chefchaouen', coords: { lat: 35.1688, lng: -5.2636 },
        desc: 'A cidade azul — ruelas inteiras pintadas de tons de céu nas montanhas do Rif.', pontos: [] },
      { nome: 'Vale do Atlas', coords: { lat: 31.06, lng: -7.92 },
        desc: 'Aldeias berberes e kasbahs de barro entre montanhas nevadas.', pontos: [
        { nome: 'Aït Ben Haddou', coords: { lat: 31.0470, lng: -7.1318 },
          desc: 'A cidadela de barro de filmes como Gladiador e Game of Thrones.' },
      ] },
      { nome: 'Saara', coords: { lat: 31.08, lng: -4.01 },
        desc: 'Dunas alaranjadas, acampamentos sob as estrelas e o silêncio do deserto.', pontos: [
        { nome: 'Erg Chebbi', coords: { lat: 31.1500, lng: -3.9700 },
          desc: 'As dunas de 150 metros de Merzouga — o Saara de cartão-postal.' },
      ] },
      { nome: 'Essaouira', coords: { lat: 31.5085, lng: -9.7595 },
        desc: 'A cidade-fortaleza à beira do Atlântico, ventada e boêmia.', pontos: [] },
      { nome: 'Casablanca', coords: { lat: 33.5731, lng: -7.5898 },
        desc: 'A metrópole moderna do Marrocos — e a imensa mesquita sobre o mar.', pontos: [
        { nome: 'Mesquita Hassan II', coords: { lat: 33.6086, lng: -7.6326 },
          desc: 'O minarete mais alto do mundo, erguido parte sobre o Atlântico.' },
      ] },
    ]
  },

  // ─── ÁFRICA DO SUL ─────────────────────────────────────────────────────────
  {
    slug: 'africa-do-sul', nome: 'África do Sul', coords: { lat: -30.0, lng: 23.5 },
    cidades: [
      { nome: 'Cidade do Cabo', coords: { lat: -33.9249, lng: 18.4241 },
        desc: 'Entre a Table Mountain e dois oceanos — uma das cidades mais bonitas do mundo.', pontos: [
        { nome: 'Table Mountain', coords: { lat: -33.9628, lng: 18.4098 },
          desc: 'A montanha de topo plano que domina a cidade — teleférico até as nuvens.' },
        { nome: 'Cabo da Boa Esperança', coords: { lat: -34.3568, lng: 18.4740 },
          desc: 'O ponto onde dois oceanos se encontram, entre falésias e babuínos.' },
      ] },
      { nome: 'Garden Route', coords: { lat: -34.036, lng: 23.047 },
        desc: 'A estrada costeira de florestas, falésias e praias selvagens.', pontos: [] },
      { nome: 'Stellenbosch', coords: { lat: -33.9321, lng: 18.8602 },
        desc: 'A capital dos vinhos da África do Sul, entre vinhedos e montanhas.', pontos: [] },
      { nome: 'Sabi Sands', coords: { lat: -24.79, lng: 31.51 },
        desc: 'A reserva colada ao Kruger onde se vê os Big Five de perto.', pontos: [
        { nome: 'Parque Kruger', coords: { lat: -23.9884, lng: 31.5547 },
          desc: 'Um dos maiores santuários de fauna do planeta — leões, elefantes e rinocerontes.' },
      ] },
      { nome: 'Joanesburgo', coords: { lat: -26.2041, lng: 28.0473 },
        desc: 'A maior cidade do país — história do apartheid e o portão para o safári.', pontos: [] },
    ]
  },

  // ─── COSTA RICA ────────────────────────────────────────────────────────────
  {
    slug: 'costa-rica', nome: 'Costa Rica', coords: { lat: 9.9, lng: -84.1 },
    cidades: [
      { nome: 'Arenal', coords: { lat: 10.4626, lng: -84.7032 },
        desc: 'Um vulcão cônico perfeito, cercado de fontes termais e floresta.', pontos: [] },
      { nome: 'Monteverde', coords: { lat: 10.3009, lng: -84.8074 },
        desc: 'A floresta nuvosa suspensa, atravessada por pontes no dossel.', pontos: [] },
      { nome: 'Manuel Antonio', coords: { lat: 9.39, lng: -84.14 },
        desc: 'Praias de cartão-postal onde a floresta encontra o Pacífico — e os macacos.', pontos: [] },
      { nome: 'Tortuguero', coords: { lat: 10.5432, lng: -83.5042 },
        desc: 'Os canais do Caribe onde as tartarugas-marinhas desovam — a "Amazônia tica".', pontos: [] },
      { nome: 'Corcovado', coords: { lat: 8.5376, lng: -83.5917 },
        desc: 'O lugar mais biologicamente intenso do planeta, na península de Osa.', pontos: [] },
      { nome: 'Tamarindo', coords: { lat: 10.2993, lng: -85.8371 },
        desc: 'A praia do surfe e do pôr do sol no Pacífico de Guanacaste.', pontos: [] },
      { nome: 'Rio Celeste', coords: { lat: 10.7167, lng: -84.9931 },
        desc: 'Um rio de um azul impossível, nascido do encontro de dois afluentes vulcânicos.', pontos: [] },
    ]
  },

  // ─── GRÉCIA ────────────────────────────────────────────────────────────────
  {
    slug: 'grecia', nome: 'Grécia', coords: { lat: 39.3, lng: 22.3 },
    cidades: [
      { nome: 'Atenas', coords: { lat: 37.9838, lng: 23.7275 },
        desc: 'O berço da democracia, coroado pela Acrópole e o Partenon.', pontos: [
        { nome: 'Acrópole', coords: { lat: 37.9715, lng: 23.7257 },
          desc: 'O templo de mármore que define a civilização ocidental, sobre a cidade.' },
      ] },
      { nome: 'Santorini', coords: { lat: 36.3932, lng: 25.4615 },
        desc: 'Casas brancas e cúpulas azuis sobre a caldeira — o pôr do sol mais famoso do mundo.', pontos: [
        { nome: 'Oia', coords: { lat: 36.4618, lng: 25.3753 },
          desc: 'O vilarejo das cúpulas azuis onde milhares aplaudem o sol se pondo no mar.' },
      ] },
      { nome: 'Creta', coords: { lat: 35.3387, lng: 25.1442 },
        desc: 'A maior ilha grega: praias de lagoa, montanhas e a civilização minoica.', pontos: [
        { nome: 'Lagoa de Balos', coords: { lat: 35.5790, lng: 23.5870 },
          desc: 'Uma lagoa de areia rosa e água rasa turquesa no extremo oeste de Creta.' },
      ] },
      { nome: 'Mykonos', coords: { lat: 37.4467, lng: 25.3289 },
        desc: 'Os moinhos brancos, a vida noturna e as praias mais cosmopolitas do Egeu.', pontos: [] },
      { nome: 'Meteora', coords: { lat: 39.7217, lng: 21.6306 },
        desc: 'Mosteiros suspensos no topo de colunas de rocha — surreal e sagrado.', pontos: [] },
      { nome: 'Delfos', coords: { lat: 38.4824, lng: 22.5010 },
        desc: 'O oráculo da Antiguidade, encravado nas encostas do Monte Parnaso.', pontos: [] },
      { nome: 'Rodes', coords: { lat: 36.4349, lng: 28.2176 },
        desc: 'A cidade medieval dos cavaleiros, banhada por dois mares.', pontos: [] },
    ]
  },

  // ─── TAILÂNDIA ─────────────────────────────────────────────────────────────
  {
    slug: 'tailandia', nome: 'Tailândia', coords: { lat: 15.0, lng: 100.5 },
    cidades: [
      { nome: 'Bangkok', coords: { lat: 13.7563, lng: 100.5018 },
        desc: 'Templos dourados, mercados flutuantes e a energia frenética do Sudeste Asiático.', pontos: [
        { nome: 'Grande Palácio', coords: { lat: 13.7500, lng: 100.4915 },
          desc: 'O complexo real dourado e o Buda de Esmeralda, o mais sagrado da Tailândia.' },
        { nome: 'Wat Arun', coords: { lat: 13.7437, lng: 100.4889 },
          desc: 'O Templo do Amanhecer, com sua torre de porcelana à beira do rio.' },
      ] },
      { nome: 'Chiang Mai', coords: { lat: 18.7883, lng: 98.9853 },
        desc: 'A capital do norte, cercada de montanhas, templos e santuários de elefantes.', pontos: [
        { nome: 'Doi Suthep', coords: { lat: 18.8048, lng: 98.9217 },
          desc: 'O templo dourado na montanha, com vista para toda Chiang Mai.' },
      ] },
      { nome: 'Chiang Rai', coords: { lat: 19.9105, lng: 99.8406 },
        desc: 'A terra do Triângulo Dourado e do surreal Templo Branco.', pontos: [
        { nome: 'Templo Branco', coords: { lat: 19.8244, lng: 99.7631 },
          desc: 'Wat Rong Khun — um templo todo branco e espelhado, entre o sagrado e o onírico.' },
      ] },
      { nome: 'Ayutthaya', coords: { lat: 14.3692, lng: 100.5877 },
        desc: 'A antiga capital em ruínas — torres e Budas envolvidos por raízes.', pontos: [] },
      { nome: 'Krabi', coords: { lat: 8.0863, lng: 98.9063 },
        desc: 'Falésias de calcário que despencam num mar verde-esmeralda.', pontos: [
        { nome: 'Railay', coords: { lat: 8.0110, lng: 98.8377 },
          desc: 'Uma praia acessível só de barco, cercada de paredões de escalada.' },
        { nome: 'Ilhas Phi Phi', coords: { lat: 7.7407, lng: 98.7784 },
          desc: 'Enseadas de água turquesa entre falésias — o paraíso das ilhas tailandesas.' },
      ] },
      { nome: 'Phuket', coords: { lat: 7.8804, lng: 98.3923 },
        desc: 'A maior ilha do país — praias, vida noturna e base para o mar de Andaman.', pontos: [] },
      { nome: 'Koh Samui', coords: { lat: 9.5120, lng: 100.0136 },
        desc: 'Praias de coqueiros e resorts no Golfo da Tailândia.', pontos: [] },
    ]
  },

  // ─── PORTUGAL ──────────────────────────────────────────────────────────────
  {
    slug: 'portugal', nome: 'Portugal', coords: { lat: 39.5, lng: -8.0 },
    cidades: [
      { nome: 'Lisboa', coords: { lat: 38.7223, lng: -9.1393 },
        desc: 'Sete colinas, bondes amarelos e fado nas vielas de Alfama.', pontos: [
        { nome: 'Torre de Belém', coords: { lat: 38.6916, lng: -9.2160 },
          desc: 'A torre manuelina à beira do Tejo, de onde partiam as caravelas.' },
        { nome: 'Alfama', coords: { lat: 38.7128, lng: -9.1300 },
          desc: 'O bairro mais antigo — ladeiras, varais e o som do fado escapando das tascas.' },
      ] },
      { nome: 'Sintra', coords: { lat: 38.8029, lng: -9.3817 },
        desc: 'Palácios coloridos e florestas de névoa — um conto de fadas a uma hora de Lisboa.', pontos: [
        { nome: 'Palácio da Pena', coords: { lat: 38.7876, lng: -9.3905 },
          desc: 'O palácio romântico de cores vivas no alto da serra de Sintra.' },
      ] },
      { nome: 'Porto', coords: { lat: 41.1579, lng: -8.6291 },
        desc: 'A cidade do vinho do Porto — azulejos, a Ribeira e o rio Douro encontrando o mar.', pontos: [
        { nome: 'Ribeira', coords: { lat: 41.1407, lng: -8.6110 },
          desc: 'O cais colorido sob a ponte Dom Luís I, Patrimônio da Humanidade.' },
      ] },
      { nome: 'Douro', coords: { lat: 41.1621, lng: -7.7918 },
        desc: 'Vinhedos em terraços que descem até o rio — o vinho do Porto nasce aqui.', pontos: [] },
      { nome: 'Algarve', coords: { lat: 37.0890, lng: -8.2470 },
        desc: 'Falésias douradas, grutas escondidas e as praias mais bonitas de Portugal.', pontos: [
        { nome: 'Gruta de Benagil', coords: { lat: 37.0875, lng: -8.4255 },
          desc: 'A caverna com um óculo aberto no teto, acessível só por mar.' },
      ] },
      { nome: 'Alentejo', coords: { lat: 38.5667, lng: -7.9000 },
        desc: 'Planícies douradas, vinhos e o silêncio do interior português.', pontos: [] },
      { nome: 'Óbidos', coords: { lat: 39.3606, lng: -9.1576 },
        desc: 'A vila medieval murada, de ruelas floridas e ginjinha servida no chocolate.', pontos: [] },
      { nome: 'Madeira', coords: { lat: 32.7607, lng: -16.9595 },
        desc: 'A ilha-jardim no Atlântico — montanhas verticais, levadas e flores o ano todo.', pontos: [] },
      { nome: 'Açores', coords: { lat: 37.7412, lng: -25.6756 },
        desc: 'Vulcões, lagoas de cratera e baleias no meio do Atlântico.', pontos: [] },
    ]
  },

  // ─── SUÍÇA ─────────────────────────────────────────────────────────────────
  {
    slug: 'suica', nome: 'Suíça', coords: { lat: 46.8, lng: 8.2 },
    cidades: [
      { nome: 'Zermatt', coords: { lat: 46.0207, lng: 7.7491 },
        desc: 'A vila sem carros aos pés do Matterhorn, a montanha mais icônica dos Alpes.', pontos: [
        { nome: 'Matterhorn', coords: { lat: 45.9763, lng: 7.6586 },
          desc: 'A pirâmide de rocha quase perfeita — a montanha mais fotografada do mundo.' },
      ] },
      { nome: 'Interlaken', coords: { lat: 46.6863, lng: 7.8632 },
        desc: 'Entre dois lagos, a base para a Jungfrau e as aventuras alpinas.', pontos: [
        { nome: 'Lauterbrunnen', coords: { lat: 46.5938, lng: 7.9085 },
          desc: 'O vale das 72 cachoeiras, encravado entre paredões verticais.' },
        { nome: 'Jungfraujoch', coords: { lat: 46.5475, lng: 7.9856 },
          desc: 'O "Topo da Europa" — a estação de trem mais alta do continente, no gelo eterno.' },
      ] },
      { nome: 'Lucerna', coords: { lat: 47.0502, lng: 8.3093 },
        desc: 'A ponte de madeira, o lago e os Alpes ao fundo — a Suíça de cartão-postal.', pontos: [] },
      { nome: 'Grindelwald', coords: { lat: 46.6242, lng: 8.0414 },
        desc: 'A vila alpina aos pés do Eiger — trilhas, teleféricos e prados verdes.', pontos: [] },
      { nome: 'Genebra', coords: { lat: 46.2044, lng: 6.1432 },
        desc: 'A cidade internacional à beira do lago Léman, com seu jato d\'água gigante.', pontos: [] },
      { nome: 'Zurique', coords: { lat: 47.3769, lng: 8.5417 },
        desc: 'A maior cidade suíça — centro financeiro elegante à beira do lago.', pontos: [] },
      { nome: 'Montreux', coords: { lat: 46.4312, lng: 6.9123 },
        desc: 'A Riviera suíça — jazz, vinhedos e o castelo de Chillon sobre a água.', pontos: [
        { nome: 'Castelo de Chillon', coords: { lat: 46.4142, lng: 6.9275 },
          desc: 'A fortaleza medieval que emerge das águas do lago Léman.' },
      ] },
    ]
  },

  // ─── ESTADOS UNIDOS · PARQUES ──────────────────────────────────────────────
  {
    slug: 'eua-parques', nome: 'Estados Unidos', coords: { lat: 39.5, lng: -98.5 },
    cidades: [
      // ── Cidades icônicas ──
      { nome: 'Nova York', coords: { lat: 40.7128, lng: -74.0060 },
        desc: 'A cidade que define o ritmo do mundo — arranha-céus, museus e uma energia que não dorme.', pontos: [] },
      { nome: 'Washington D.C.', coords: { lat: 38.9072, lng: -77.0369 },
        desc: 'A capital monumental: mármore, memoriais e os maiores museus gratuitos do planeta.', pontos: [] },
      { nome: 'Chicago', coords: { lat: 41.8781, lng: -87.6298 },
        desc: 'Berço do arranha-céu, à beira do lago Michigan — arquitetura que vale a viagem.', pontos: [] },
      { nome: 'Nova Orleans', coords: { lat: 29.9511, lng: -90.0715 },
        desc: 'Jazz nas ruas, cozinha cajun e a alma mais singular dos Estados Unidos.', pontos: [] },
      { nome: 'Miami', coords: { lat: 25.7617, lng: -80.1918 },
        desc: 'Art déco, praias de água morna e a porta de entrada latina da América.', pontos: [] },
      { nome: 'Los Angeles', coords: { lat: 34.0522, lng: -118.2437 },
        desc: 'Hollywood, o Pacífico e o sol perpétuo da Costa Oeste.', pontos: [
        { nome: 'Joshua Tree', coords: { lat: 33.8734, lng: -115.9010 },
          desc: 'Árvores retorcidas e rochas gigantes onde dois desertos se encontram.' },
      ] },
      { nome: 'São Francisco', coords: { lat: 37.7749, lng: -122.4194 },
        desc: 'A baía, o Golden Gate e a cidade mais europeia da América.', pontos: [
        { nome: 'Redwood', coords: { lat: 41.2132, lng: -124.0046 },
          desc: 'As árvores mais altas da Terra, numa floresta de névoa na costa norte.' },
      ] },
      { nome: 'Seattle', coords: { lat: 47.6062, lng: -122.3321 },
        desc: 'Café, música e natureza — cercada por montanhas, floresta e mar.', pontos: [
        { nome: 'Olympic', coords: { lat: 47.8021, lng: -123.6044 },
          desc: 'Três mundos num só: floresta tropical temperada, montanha e costa selvagem.' },
        { nome: 'Mount Rainier', coords: { lat: 46.8523, lng: -121.7603 },
          desc: 'Um vulcão coberto de gelo, cercado por prados de flores no verão.' },
        { nome: 'Crater Lake', coords: { lat: 42.9446, lng: -122.1090 },
          desc: 'O lago mais profundo dos EUA, de um azul impossível, num vulcão extinto.' },
      ] },
      { nome: 'Las Vegas', coords: { lat: 36.1699, lng: -115.1398 },
        desc: 'O improvável no meio do deserto — e a base perfeita para o Sudoeste.', pontos: [] },

      // ── Parques nacionais (principais) ──
      { nome: 'Grand Canyon', coords: { lat: 36.0544, lng: -112.1401 },
        desc: '1,6 km de profundidade esculpidos pelo rio Colorado. O ícone absoluto dos parques.', pontos: [
        { nome: 'Antelope Canyon', coords: { lat: 36.8619, lng: -111.3743 },
          desc: 'Fendas de arenito onde a luz desce como feixes — o cânion mais fotografado.' },
        { nome: 'Horseshoe Bend', coords: { lat: 36.8791, lng: -111.5104 },
          desc: 'A curva perfeita do rio Colorado, 300 m abaixo de seus pés.' },
        { nome: 'Monument Valley', coords: { lat: 36.9980, lng: -110.0985 },
          desc: 'As mesas de arenito dos faroestes — o Oeste americano em estado puro.' },
      ] },
      { nome: 'Zion', coords: { lat: 37.2982, lng: -113.0263 },
        desc: 'Paredões vermelhos verticais e trilhas que sobem por entre os cânions de Utah.', pontos: [
        { nome: 'Bryce Canyon', coords: { lat: 37.5930, lng: -112.1871 },
          desc: 'Um anfiteatro de hoodoos cor de fogo — pináculos de pedra surreais.' },
        { nome: 'Capitol Reef', coords: { lat: 38.3669, lng: -111.2615 },
          desc: 'Falésias, domos brancos e pomares escondidos no coração de Utah.' },
        { nome: 'Arches', coords: { lat: 38.7331, lng: -109.5925 },
          desc: 'Mais de 2.000 arcos naturais de arenito, incluindo o icônico Delicate Arch.' },
        { nome: 'Canyonlands', coords: { lat: 38.3269, lng: -109.8783 },
          desc: 'Mesas, torres e desfiladeiros esculpidos por dois rios — vastidão pura.' },
      ] },
      { nome: 'Death Valley', coords: { lat: 36.5323, lng: -116.9325 },
        desc: 'O lugar mais quente e baixo da América — um deserto de outro planeta.', pontos: [] },
      { nome: 'Yosemite', coords: { lat: 37.8651, lng: -119.5383 },
        desc: 'Granito colossal, sequoias e cachoeiras — a obra-prima de John Muir.', pontos: [
        { nome: 'Sequoia & Kings Canyon', coords: { lat: 36.4864, lng: -118.5658 },
          desc: 'As maiores árvores vivas do planeta, com milhares de anos.' },
      ] },
      { nome: 'Yellowstone', coords: { lat: 44.4280, lng: -110.5885 },
        desc: 'O primeiro parque nacional do mundo: gêiseres, fontes coloridas e bisões.', pontos: [
        { nome: 'Grand Teton', coords: { lat: 43.7904, lng: -110.6818 },
          desc: 'Picos afiados que se erguem direto da planície — os Alpes do Wyoming.' },
      ] },
      { nome: 'Glacier', coords: { lat: 48.7596, lng: -113.7870 },
        desc: 'Os Alpes americanos — lagos glaciais e a estrada Going-to-the-Sun.', pontos: [] },
      { nome: 'Rocky Mountain', coords: { lat: 40.3428, lng: -105.6836 },
        desc: 'Picos acima de 4.000 m, lagos alpinos e alces nas alturas do Colorado.', pontos: [] },
      { nome: 'Great Smoky Mountains', coords: { lat: 35.6118, lng: -83.4895 },
        desc: 'Montanhas enevoadas e florestas infinitas — o parque mais visitado dos EUA.', pontos: [] },
      { nome: 'Acadia', coords: { lat: 44.3386, lng: -68.2733 },
        desc: 'Onde as montanhas encontram o Atlântico, na costa selvagem do Maine.', pontos: [] },
      { nome: 'Everglades', coords: { lat: 25.2866, lng: -80.8987 },
        desc: 'Um rio de capim que escorre lento — jacarés, manguezais e aves raras.', pontos: [] },
      { nome: 'Hawaii Volcanoes', coords: { lat: 19.4194, lng: -155.2885 },
        desc: 'Lava viva e crateras fumegantes — a terra ainda nascendo no Havaí.', pontos: [] },
      { nome: 'Denali', coords: { lat: 63.1148, lng: -151.1926 },
        desc: 'A montanha mais alta da América do Norte, no coração selvagem do Alasca.', pontos: [] },
    ]
  },

  // ─── BRASIL ────────────────────────────────────────────────────────────────
  {
    slug: 'brasil', nome: 'Brasil', coords: { lat: -10.5, lng: -52.0 },
    cidades: [
      // ── Cidades icônicas ──
      { nome: 'Rio de Janeiro', coords: { lat: -22.9068, lng: -43.1729 },
        desc: 'O cartão-postal do Brasil — onde montanha, mar e cidade se encontram como em nenhum outro lugar.', pontos: [
        { nome: 'Cristo Redentor', coords: { lat: -22.9519, lng: -43.2105 },
          desc: 'Braços abertos a 700 m de altura — a vista que abraça o Rio inteiro.' },
        { nome: 'Pão de Açúcar', coords: { lat: -22.9486, lng: -43.1566 },
          desc: 'O bondinho que sobe ao morro mais famoso da baía de Guanabara.' },
        { nome: 'Copacabana', coords: { lat: -22.9711, lng: -43.1822 },
          desc: 'A praia-símbolo, com seu calçadão de ondas e a orla mais animada do mundo.' },
      ] },
      { nome: 'Salvador', coords: { lat: -12.9714, lng: -38.5014 },
        desc: 'O coração afro-brasileiro: Pelourinho, tambores, dendê e a fé que vira festa.', pontos: [] },
      { nome: 'São Paulo', coords: { lat: -23.5505, lng: -46.6333 },
        desc: 'A metrópole que não dorme — a melhor gastronomia e arte da América Latina.', pontos: [] },
      { nome: 'Brasília', coords: { lat: -15.7942, lng: -47.8822 },
        desc: 'A capital projetada do zero por Niemeyer — concreto que virou poesia.', pontos: [] },
      { nome: 'Recife & Olinda', coords: { lat: -8.0476, lng: -34.8770 },
        desc: 'Frevo, maracatu e ladeiras coloniais — o Nordeste em sua forma mais viva.', pontos: [] },
      { nome: 'Manaus', coords: { lat: -3.1190, lng: -60.0217 },
        desc: 'No meio da selva, um teatro de ópera — a porta de entrada da Amazônia.', pontos: [] },
      { nome: 'Belém', coords: { lat: -1.4558, lng: -48.5024 },
        desc: 'Onde o rio encontra a floresta — o Ver-o-Peso e a cozinha amazônica.', pontos: [] },
      { nome: 'Florianópolis', coords: { lat: -27.5954, lng: -48.5480 },
        desc: 'Quarenta e duas praias numa ilha — do surfe selvagem ao mar manso.', pontos: [] },
      { nome: 'Fortaleza', coords: { lat: -3.7319, lng: -38.5267 },
        desc: 'Sol o ano inteiro e a base para as praias mais bonitas do Ceará.', pontos: [] },

      // ── Maravilhas naturais ──
      { nome: 'Fernando de Noronha', coords: { lat: -3.8576, lng: -32.4297 },
        desc: 'O arquipélago mais protegido do Atlântico — águas transparentes e vida marinha rara.', pontos: [
        { nome: 'Baía do Sancho', coords: { lat: -3.8540, lng: -32.4438 },
          desc: 'Eleita a praia mais bonita do planeta — acessível por uma escada na fenda da rocha.' },
        { nome: 'Baía dos Porcos', coords: { lat: -3.8580, lng: -32.4470 },
          desc: 'Piscinas naturais e a vista dos Dois Irmãos — o cartão-postal de Noronha.' },
      ] },
      { nome: 'Lençóis Maranhenses', coords: { lat: -2.4860, lng: -43.1280 },
        desc: 'Um deserto de dunas brancas que, na chuva, se enche de lagoas azul-turquesa.', pontos: [] },
      { nome: 'Chapada Diamantina', coords: { lat: -12.5598, lng: -41.3897 },
        desc: 'Cânions, grutas e cachoeiras no sertão da Bahia — o Brasil que poucos conhecem.', pontos: [] },
      { nome: 'Amazônia', coords: { lat: -3.10, lng: -64.80 },
        desc: 'A maior floresta do planeta — botos, igarapés e a imensidão verde vista de um lodge flutuante.', pontos: [] },
      { nome: 'Pantanal', coords: { lat: -19.0000, lng: -56.6200 },
        desc: 'A maior área úmida do mundo e o melhor lugar do país para ver onças, ariranhas e aves.', pontos: [] },
      { nome: 'Cataratas do Iguaçu', coords: { lat: -25.6953, lng: -54.4367 },
        desc: '275 quedas d\'água rugindo na fronteira — uma das sete maravilhas naturais do mundo.', pontos: [
        { nome: 'Garganta do Diabo', coords: { lat: -25.6920, lng: -54.4380 },
          desc: 'O ponto onde o rio despenca em fúria — a passarela mais emocionante das Cataratas.' },
      ] },
      { nome: 'Chapada dos Veadeiros', coords: { lat: -14.1300, lng: -47.5200 },
        desc: 'O cerrado mais antigo da Terra: cachoeiras cristalinas, cânions e céu de cristal em Goiás.', pontos: [] },
      { nome: 'Jalapão', coords: { lat: -10.5000, lng: -46.5000 },
        desc: 'Fervedouros onde se flutua, dunas alaranjadas e o céu mais estrelado do Brasil.', pontos: [] },
      { nome: 'Bonito', coords: { lat: -21.1261, lng: -56.4822 },
        desc: 'Rios de água tão clara que se mergulha entre peixes como num aquário natural.', pontos: [] },
      { nome: 'Jericoacoara', coords: { lat: -2.7960, lng: -40.5140 },
        desc: 'Uma vila de ruas de areia entre dunas e lagoas — e um pôr do sol que vira ritual.', pontos: [] },
      { nome: 'Serra Gaúcha', coords: { lat: -29.3747, lng: -50.8760 },
        desc: 'Frio, fondue, vinho e charme europeu nas montanhas do Rio Grande do Sul.', pontos: [] },
      { nome: 'Paraty', coords: { lat: -23.2178, lng: -44.7131 },
        desc: 'Um centro colonial intacto entre a Mata Atlântica e um mar de ilhas e cachoeiras.', pontos: [] },
    ]
  },

  // ─── FRANÇA ────────────────────────────────────────────────────────────────
  {
    slug: 'franca', nome: 'França', coords: { lat: 46.6, lng: 2.4 },
    cidades: [
      { nome: 'Paris', coords: { lat: 48.8566, lng: 2.3522 },
        desc: 'A cidade-luz — arte, moda e romance às margens do Sena.', pontos: [
        { nome: 'Torre Eiffel', coords: { lat: 48.8584, lng: 2.2945 },
          desc: 'O símbolo de Paris, de ferro e renda, cintilando à noite.' },
        { nome: 'Louvre', coords: { lat: 48.8606, lng: 2.3376 },
          desc: 'O maior museu do mundo, guardião da Mona Lisa.' },
        { nome: 'Notre-Dame', coords: { lat: 48.8530, lng: 2.3499 },
          desc: 'A catedral gótica renascida no coração medieval de Paris.' },
      ] },
      { nome: 'Versalhes', coords: { lat: 48.8049, lng: 2.1204 },
        desc: 'O palácio do Rei Sol e seus jardins infinitos.', pontos: [] },
      { nome: 'Nice', coords: { lat: 43.7102, lng: 7.2620 },
        desc: 'A Riviera Francesa — mar azul-turquesa e glamour mediterrâneo.', pontos: [] },
      { nome: 'Provence', coords: { lat: 43.9352, lng: 5.0510 },
        desc: 'Campos de lavanda, vilarejos de pedra e luz dourada.', pontos: [] },
      { nome: 'Mont-Saint-Michel', coords: { lat: 48.6361, lng: -1.5115 },
        desc: 'A abadia que emerge do mar com a maré, na costa da Normandia.', pontos: [] },
      { nome: 'Bordeaux', coords: { lat: 44.8378, lng: -0.5792 },
        desc: 'A capital mundial do vinho, elegante às margens do Garona.', pontos: [] },
      { nome: 'Chamonix', coords: { lat: 45.9237, lng: 6.8694 },
        desc: 'Aos pés do Mont Blanc — o berço do alpinismo.', pontos: [] },
      { nome: 'Vale do Loire', coords: { lat: 47.3000, lng: 0.7000 },
        desc: 'Castelos de conto de fadas espalhados pelo jardim da França.', pontos: [] },
    ]
  },

  // ─── ESPANHA ───────────────────────────────────────────────────────────────
  {
    slug: 'espanha', nome: 'Espanha', coords: { lat: 40.2, lng: -3.7 },
    cidades: [
      { nome: 'Barcelona', coords: { lat: 41.3851, lng: 2.1734 },
        desc: 'A cidade de Gaudí — modernismo, praia e vida que não dorme.', pontos: [
        { nome: 'Sagrada Família', coords: { lat: 41.4036, lng: 2.1744 },
          desc: 'A basílica inacabada de Gaudí, uma floresta de pedra que sobe ao céu.' },
        { nome: 'Park Güell', coords: { lat: 41.4145, lng: 2.1527 },
          desc: 'O parque-mosaico onde Gaudí brincou com cor e curva.' },
      ] },
      { nome: 'Madri', coords: { lat: 40.4168, lng: -3.7038 },
        desc: 'A capital vibrante — museus mundiais, tapas e noites longas.', pontos: [] },
      { nome: 'Sevilha', coords: { lat: 37.3891, lng: -5.9845 },
        desc: 'Flamenco, laranjeiras e a Andaluzia em sua forma mais quente.', pontos: [
        { nome: 'Alcázar de Sevilha', coords: { lat: 37.3831, lng: -5.9903 },
          desc: 'O palácio mourisco de pátios, fontes e azulejos.' },
      ] },
      { nome: 'Granada', coords: { lat: 37.1773, lng: -3.5986 },
        desc: 'A Alhambra moura coroando a cidade, com a Sierra Nevada ao fundo.', pontos: [
        { nome: 'Alhambra', coords: { lat: 37.1761, lng: -3.5881 },
          desc: 'O palácio-fortaleza mais belo do mundo islâmico.' },
      ] },
      { nome: 'Ibiza', coords: { lat: 38.9067, lng: 1.4206 },
        desc: 'A ilha da festa e das enseadas escondidas no Mediterrâneo.', pontos: [] },
      { nome: 'Maiorca', coords: { lat: 39.6953, lng: 3.0176 },
        desc: 'Calas turquesa, vilarejos de pedra e a Serra de Tramuntana.', pontos: [] },
      { nome: 'San Sebastián', coords: { lat: 43.3183, lng: -1.9812 },
        desc: 'A capital basca da gastronomia, na baía mais elegante.', pontos: [] },
      { nome: 'Toledo', coords: { lat: 39.8628, lng: -4.0273 },
        desc: 'A cidade das três culturas, intacta sobre o rio Tejo.', pontos: [] },
    ]
  },

  // ─── REINO UNIDO ───────────────────────────────────────────────────────────
  {
    slug: 'reino-unido', nome: 'Reino Unido', coords: { lat: 54.0, lng: -2.5 },
    cidades: [
      { nome: 'Londres', coords: { lat: 51.5074, lng: -0.1278 },
        desc: 'A metrópole global — história imperial e cultura em ebulição.', pontos: [
        { nome: 'Big Ben', coords: { lat: 51.5007, lng: -0.1246 },
          desc: 'A torre do relógio mais famosa do mundo, à beira do Tâmisa.' },
        { nome: 'London Eye', coords: { lat: 51.5033, lng: -0.1196 },
          desc: 'A roda-gigante que abraça a vista de toda Londres.' },
        { nome: 'Tower Bridge', coords: { lat: 51.5055, lng: -0.0754 },
          desc: 'A ponte vitoriana que se abre sobre o Tâmisa.' },
      ] },
      { nome: 'Edimburgo', coords: { lat: 55.9533, lng: -3.1883 },
        desc: 'A capital escocesa — castelo no rochedo e ruelas medievais.', pontos: [] },
      { nome: 'Stonehenge', coords: { lat: 51.1789, lng: -1.8262 },
        desc: 'O círculo de pedras pré-histórico, mistério de 5.000 anos.', pontos: [] },
      { nome: 'Bath', coords: { lat: 51.3811, lng: -2.3590 },
        desc: 'A cidade georgiana das termas romanas, em pedra cor de mel.', pontos: [] },
      { nome: 'Highlands', coords: { lat: 57.0000, lng: -4.5000 },
        desc: 'Lagos profundos, castelos e montanhas brumosas na Escócia.', pontos: [] },
      { nome: 'Oxford', coords: { lat: 51.7520, lng: -1.2577 },
        desc: 'A cidade universitária das torres sonhadoras.', pontos: [] },
    ]
  },

  // ─── ALEMANHA ──────────────────────────────────────────────────────────────
  {
    slug: 'alemanha', nome: 'Alemanha', coords: { lat: 51.0, lng: 10.2 },
    cidades: [
      { nome: 'Berlim', coords: { lat: 52.5200, lng: 13.4050 },
        desc: 'A capital reinventada — história, arte e a vanguarda criativa da Europa.', pontos: [
        { nome: 'Portão de Brandemburgo', coords: { lat: 52.5163, lng: 13.3777 },
          desc: 'O arco neoclássico que virou símbolo da reunificação alemã.' },
      ] },
      { nome: 'Munique', coords: { lat: 48.1351, lng: 11.5820 },
        desc: 'A capital da Baviera — cerveja, Oktoberfest e os Alpes a uma hora.', pontos: [] },
      { nome: 'Neuschwanstein', coords: { lat: 47.5576, lng: 10.7498 },
        desc: 'O castelo de conto de fadas que inspirou a Disney.', pontos: [] },
      { nome: 'Floresta Negra', coords: { lat: 48.0000, lng: 8.2000 },
        desc: 'Vales escuros, relógios cuco e a estrada mais cênica da Alemanha.', pontos: [] },
      { nome: 'Hamburgo', coords: { lat: 53.5511, lng: 9.9937 },
        desc: 'A cidade portuária dos canais e da nova ópera de vidro.', pontos: [] },
      { nome: 'Colônia', coords: { lat: 50.9375, lng: 6.9603 },
        desc: 'A catedral gótica gigante às margens do Reno.', pontos: [] },
      { nome: 'Vale do Reno', coords: { lat: 50.1000, lng: 7.7000 },
        desc: 'Castelos sobre vinhedos ao longo do rio mais romântico da Europa.', pontos: [] },
    ]
  },

  // ─── ÁUSTRIA ───────────────────────────────────────────────────────────────
  {
    slug: 'austria', nome: 'Áustria', coords: { lat: 47.6, lng: 14.1 },
    cidades: [
      { nome: 'Viena', coords: { lat: 48.2082, lng: 16.3738 },
        desc: 'A capital imperial da música, dos cafés e dos palácios.', pontos: [
        { nome: 'Palácio de Schönbrunn', coords: { lat: 48.1858, lng: 16.3122 },
          desc: 'O Versalhes austríaco dos Habsburgo, com seus jardins barrocos.' },
      ] },
      { nome: 'Salzburgo', coords: { lat: 47.8095, lng: 13.0550 },
        desc: 'A cidade de Mozart, entre uma fortaleza e os Alpes.', pontos: [] },
      { nome: 'Hallstatt', coords: { lat: 47.5622, lng: 13.6493 },
        desc: 'O vilarejo mais fotografado dos Alpes, à beira do lago.', pontos: [] },
      { nome: 'Innsbruck', coords: { lat: 47.2692, lng: 11.4041 },
        desc: 'A capital alpina cercada de picos nevados.', pontos: [] },
      { nome: 'Tirol', coords: { lat: 47.2000, lng: 11.4000 },
        desc: 'Vales verdes, chalés e as montanhas mais bonitas da Áustria.', pontos: [] },
    ]
  },

  // ─── HOLANDA ───────────────────────────────────────────────────────────────
  {
    slug: 'holanda', nome: 'Holanda', coords: { lat: 52.2, lng: 5.5 },
    cidades: [
      { nome: 'Amsterdã', coords: { lat: 52.3676, lng: 4.9041 },
        desc: 'A cidade dos canais, bicicletas e museus de mestres.', pontos: [
        { nome: 'Museu Van Gogh', coords: { lat: 52.3584, lng: 4.8811 },
          desc: 'A maior coleção do gênio holandês reunida num só lugar.' },
      ] },
      { nome: 'Keukenhof', coords: { lat: 52.2697, lng: 4.5469 },
        desc: 'O maior jardim de tulipas do mundo, explodindo na primavera.', pontos: [] },
      { nome: 'Roterdã', coords: { lat: 51.9244, lng: 4.4777 },
        desc: 'A cidade da arquitetura ousada e do maior porto da Europa.', pontos: [] },
      { nome: 'Giethoorn', coords: { lat: 52.7402, lng: 6.0786 },
        desc: 'A Veneza holandesa, sem ruas — só canais e pontes de madeira.', pontos: [] },
    ]
  },

  // ─── CROÁCIA ───────────────────────────────────────────────────────────────
  {
    slug: 'croacia', nome: 'Croácia', coords: { lat: 44.5, lng: 16.2 },
    cidades: [
      { nome: 'Dubrovnik', coords: { lat: 42.6507, lng: 18.0944 },
        desc: 'A pérola do Adriático — muralhas medievais sobre o mar azul.', pontos: [] },
      { nome: 'Split', coords: { lat: 43.5081, lng: 16.4402 },
        desc: 'A cidade construída dentro de um palácio romano, à beira-mar.', pontos: [] },
      { nome: 'Plitvice', coords: { lat: 44.8654, lng: 15.5820 },
        desc: 'Dezesseis lagos turquesa em cascata por uma floresta.', pontos: [] },
      { nome: 'Hvar', coords: { lat: 43.1729, lng: 16.4413 },
        desc: 'A ilha do sol, da lavanda e da vida noturna do Adriático.', pontos: [] },
      { nome: 'Zagreb', coords: { lat: 45.8150, lng: 15.9819 },
        desc: 'A capital de cafés, mercados e charme austro-húngaro.', pontos: [] },
    ]
  },

  // ─── TURQUIA ───────────────────────────────────────────────────────────────
  {
    slug: 'turquia', nome: 'Turquia', coords: { lat: 39.0, lng: 35.2 },
    cidades: [
      { nome: 'Istambul', coords: { lat: 41.0082, lng: 28.9784 },
        desc: 'Onde a Europa encontra a Ásia — mesquitas, bazares e o Bósforo.', pontos: [
        { nome: 'Hagia Sophia', coords: { lat: 41.0086, lng: 28.9802 },
          desc: 'A basílica-mesquita de 1.500 anos, maravilha de Istambul.' },
        { nome: 'Mesquita Azul', coords: { lat: 41.0054, lng: 28.9768 },
          desc: 'Os seis minaretes e os vinte mil azulejos de Iznik.' },
      ] },
      { nome: 'Capadócia', coords: { lat: 38.6431, lng: 34.8289 },
        desc: 'Vales de chaminés de fada e o céu cheio de balões ao amanhecer.', pontos: [] },
      { nome: 'Pamukkale', coords: { lat: 37.9203, lng: 29.1206 },
        desc: 'As cascatas de travertino branco e piscinas termais.', pontos: [] },
      { nome: 'Éfeso', coords: { lat: 37.9395, lng: 27.3417 },
        desc: 'A cidade greco-romana mais bem preservada do Mediterrâneo.', pontos: [] },
      { nome: 'Antália', coords: { lat: 36.8969, lng: 30.7133 },
        desc: 'A Riviera turca de praias e ruínas à beira do mar.', pontos: [] },
    ]
  },

  // ─── EGITO ─────────────────────────────────────────────────────────────────
  {
    slug: 'egito', nome: 'Egito', coords: { lat: 26.8, lng: 30.8 },
    cidades: [
      { nome: 'Cairo', coords: { lat: 30.0444, lng: 31.2357 },
        desc: 'A megalópole às portas das pirâmides milenares.', pontos: [
        { nome: 'Pirâmides de Gizé', coords: { lat: 29.9792, lng: 31.1342 },
          desc: 'As únicas das sete maravilhas antigas que restam de pé.' },
        { nome: 'Esfinge', coords: { lat: 29.9753, lng: 31.1376 },
          desc: 'O guardião de pedra com corpo de leão e rosto de faraó.' },
      ] },
      { nome: 'Luxor', coords: { lat: 25.6872, lng: 32.6396 },
        desc: 'O maior museu a céu aberto — templos colossais e o Vale dos Reis.', pontos: [
        { nome: 'Vale dos Reis', coords: { lat: 25.7402, lng: 32.6014 },
          desc: 'As tumbas escondidas dos faraós, incluindo a de Tutancâmon.' },
      ] },
      { nome: 'Aswan', coords: { lat: 24.0889, lng: 32.8998 },
        desc: 'O Nilo mais sereno, com suas ilhas e templos núbios.', pontos: [] },
      { nome: 'Abu Simbel', coords: { lat: 22.3372, lng: 31.6258 },
        desc: 'Os quatro colossos de Ramsés esculpidos na rocha.', pontos: [] },
      { nome: 'Hurghada', coords: { lat: 27.2579, lng: 33.8116 },
        desc: 'Recifes de coral e mergulho nas águas mornas do Mar Vermelho.', pontos: [] },
    ]
  },

  // ─── EMIRADOS ÁRABES ───────────────────────────────────────────────────────
  {
    slug: 'emirados-arabes', nome: 'Emirados Árabes Unidos', coords: { lat: 24.2, lng: 54.3 },
    cidades: [
      { nome: 'Dubai', coords: { lat: 25.2048, lng: 55.2708 },
        desc: 'A cidade do futuro — arranha-céus, deserto e luxo sem limites.', pontos: [
        { nome: 'Burj Khalifa', coords: { lat: 25.1972, lng: 55.2744 },
          desc: 'O edifício mais alto do mundo, 828 metros sobre o deserto.' },
        { nome: 'Palm Jumeirah', coords: { lat: 25.1124, lng: 55.1390 },
          desc: 'A ilha artificial em forma de palmeira, cravada no Golfo.' },
      ] },
      { nome: 'Abu Dhabi', coords: { lat: 24.4539, lng: 54.3773 },
        desc: 'A capital opulenta do Golfo — e sua mesquita de mármore branco.', pontos: [
        { nome: 'Mesquita Sheikh Zayed', coords: { lat: 24.4128, lng: 54.4750 },
          desc: 'A mesquita de mármore branco com 82 cúpulas e lustres de cristal.' },
      ] },
    ]
  },

  // ─── ÍNDIA ─────────────────────────────────────────────────────────────────
  {
    slug: 'india', nome: 'Índia', coords: { lat: 22.5, lng: 79.0 },
    cidades: [
      { nome: 'Agra', coords: { lat: 27.1767, lng: 78.0081 },
        desc: 'A cidade do Taj Mahal, joia do império mogol.', pontos: [
        { nome: 'Taj Mahal', coords: { lat: 27.1751, lng: 78.0421 },
          desc: 'O mausoléu de mármore branco — o maior monumento ao amor.' },
      ] },
      { nome: 'Jaipur', coords: { lat: 26.9124, lng: 75.7873 },
        desc: 'A Cidade Rosa do Rajastão — palácios, fortes e bazares.', pontos: [] },
      { nome: 'Nova Délhi', coords: { lat: 28.6139, lng: 77.2090 },
        desc: 'A capital de templos, mausoléus e um caos vibrante.', pontos: [] },
      { nome: 'Varanasi', coords: { lat: 25.3176, lng: 82.9739 },
        desc: 'A cidade sagrada às margens do Ganges, onde a vida e a morte se encontram.', pontos: [] },
      { nome: 'Kerala', coords: { lat: 9.9312, lng: 76.2673 },
        desc: 'Os remansos de palmeiras e as casas-barco do sul tropical.', pontos: [] },
      { nome: 'Goa', coords: { lat: 15.2993, lng: 74.1240 },
        desc: 'As praias e a herança portuguesa na costa indiana.', pontos: [] },
    ]
  },

  // ─── CHINA ─────────────────────────────────────────────────────────────────
  {
    slug: 'china', nome: 'China', coords: { lat: 35.5, lng: 103.0 },
    cidades: [
      { nome: 'Pequim', coords: { lat: 39.9042, lng: 116.4074 },
        desc: 'A capital milenar — a Cidade Proibida e a Praça da Paz Celestial.', pontos: [
        { nome: 'Cidade Proibida', coords: { lat: 39.9163, lng: 116.3972 },
          desc: 'O palácio imperial de 9.000 salas, fechado ao povo por séculos.' },
        { nome: 'Grande Muralha', coords: { lat: 40.4319, lng: 116.5704 },
          desc: 'A muralha de milhares de quilômetros serpenteando as montanhas.' },
      ] },
      { nome: 'Xangai', coords: { lat: 31.2304, lng: 121.4737 },
        desc: 'A metrópole futurista do Bund e dos arranha-céus.', pontos: [] },
      { nome: 'Guilin', coords: { lat: 25.2736, lng: 110.2900 },
        desc: 'Os picos de calcário que flutuam sobre o rio Li.', pontos: [] },
      { nome: 'Xi an', coords: { lat: 34.3416, lng: 108.9398 },
        desc: 'Os Guerreiros de Terracota, um exército de argila de 2.200 anos.', pontos: [] },
      { nome: 'Zhangjiajie', coords: { lat: 29.1170, lng: 110.4790 },
        desc: 'Os pilares de pedra envoltos em névoa que inspiraram Avatar.', pontos: [] },
      { nome: 'Chengdu', coords: { lat: 30.5728, lng: 104.0668 },
        desc: 'A terra dos pandas-gigantes e da culinária mais picante da China.', pontos: [] },
    ]
  },

  // ─── MÉXICO ────────────────────────────────────────────────────────────────
  {
    slug: 'mexico', nome: 'México', coords: { lat: 23.6, lng: -102.5 },
    cidades: [
      { nome: 'Cidade do México', coords: { lat: 19.4326, lng: -99.1332 },
        desc: 'A megalópole de murais, mercados e história asteca.', pontos: [] },
      { nome: 'Cancún', coords: { lat: 21.1619, lng: -86.8515 },
        desc: 'Praias caribenhas de areia branca e cenotes de água-doce.', pontos: [] },
      { nome: 'Chichén Itzá', coords: { lat: 20.6843, lng: -88.5678 },
        desc: 'A pirâmide maia de Kukulcán, uma das maravilhas do mundo.', pontos: [] },
      { nome: 'Tulum', coords: { lat: 20.2114, lng: -87.4654 },
        desc: 'As ruínas maias sobre falésias diante do Caribe turquesa.', pontos: [] },
      { nome: 'Oaxaca', coords: { lat: 17.0732, lng: -96.7266 },
        desc: 'A capital da gastronomia e do artesanato mexicano.', pontos: [] },
      { nome: 'Guanajuato', coords: { lat: 21.0190, lng: -101.2574 },
        desc: 'A cidade colonial de becos coloridos e túneis subterrâneos.', pontos: [] },
      { nome: 'Cabo San Lucas', coords: { lat: 22.8905, lng: -109.9167 },
        desc: 'O arco de pedra onde o deserto encontra o mar de Cortez.', pontos: [] },
    ]
  },

  // ─── CANADÁ ────────────────────────────────────────────────────────────────
  {
    slug: 'canada', nome: 'Canadá', coords: { lat: 56.0, lng: -98.0 },
    cidades: [
      { nome: 'Banff', coords: { lat: 51.1784, lng: -115.5708 },
        desc: 'Lagos turquesa e picos nevados nas Montanhas Rochosas.', pontos: [
        { nome: 'Lago Louise', coords: { lat: 51.4254, lng: -116.1773 },
          desc: 'O lago glacial cor de esmeralda diante de uma geleira.' },
      ] },
      { nome: 'Vancouver', coords: { lat: 49.2827, lng: -123.1207 },
        desc: 'Entre o Pacífico e as montanhas — a cidade mais cênica do país.', pontos: [] },
      { nome: 'Toronto', coords: { lat: 43.6532, lng: -79.3832 },
        desc: 'A metrópole multicultural da CN Tower, à beira do lago Ontário.', pontos: [] },
      { nome: 'Cataratas do Niágara', coords: { lat: 43.0962, lng: -79.0377 },
        desc: 'A muralha de água mais famosa da América do Norte.', pontos: [] },
      { nome: 'Quebec', coords: { lat: 46.8139, lng: -71.2080 },
        desc: 'A cidade amuralhada mais francesa das Américas.', pontos: [] },
      { nome: 'Whistler', coords: { lat: 50.1163, lng: -122.9574 },
        desc: 'A estação de esqui de classe mundial nas montanhas costeiras.', pontos: [] },
    ]
  },

  // ─── PERU ──────────────────────────────────────────────────────────────────
  {
    slug: 'peru', nome: 'Peru', coords: { lat: -9.5, lng: -75.5 },
    cidades: [
      { nome: 'Machu Picchu', coords: { lat: -13.1631, lng: -72.5450 },
        desc: 'A cidade perdida dos incas, suspensa entre montanhas e nuvens.', pontos: [] },
      { nome: 'Cusco', coords: { lat: -13.5319, lng: -71.9675 },
        desc: 'A capital do império inca, hoje colonial e viva nos Andes.', pontos: [] },
      { nome: 'Vale Sagrado', coords: { lat: -13.3200, lng: -72.0800 },
        desc: 'Terraços incas e vilarejos entre montanhas e o rio Urubamba.', pontos: [] },
      { nome: 'Lima', coords: { lat: -12.0464, lng: -77.0428 },
        desc: 'A capital gastronômica da América do Sul, à beira do Pacífico.', pontos: [] },
      { nome: 'Lago Titicaca', coords: { lat: -15.7500, lng: -69.3500 },
        desc: 'O lago navegável mais alto do mundo e suas ilhas flutuantes de junco.', pontos: [] },
      { nome: 'Montanha Colorida', coords: { lat: -13.8700, lng: -71.3030 },
        desc: 'As sete cores minerais do arco-íris de pedra, a 5.000 metros.', pontos: [] },
      { nome: 'Arequipa', coords: { lat: -16.4090, lng: -71.5375 },
        desc: 'A cidade branca de sillar, sob três vulcões.', pontos: [] },
    ]
  },

  // ─── ARGENTINA ─────────────────────────────────────────────────────────────
  {
    slug: 'argentina', nome: 'Argentina', coords: { lat: -34.0, lng: -64.0 },
    cidades: [
      { nome: 'Buenos Aires', coords: { lat: -34.6037, lng: -58.3816 },
        desc: 'A Paris da América do Sul — tango, bifes e bairros boêmios.', pontos: [] },
      { nome: 'Mendoza', coords: { lat: -32.8895, lng: -68.8458 },
        desc: 'A capital do vinho Malbec, aos pés dos Andes.', pontos: [] },
      { nome: 'Salta', coords: { lat: -24.7821, lng: -65.4232 },
        desc: 'O norte colorido — vinhedos de altitude e montanhas de sete cores.', pontos: [] },
      { nome: 'Península Valdés', coords: { lat: -42.5000, lng: -64.0000 },
        desc: 'Baleias, pinguins e elefantes-marinhos na costa patagônica.', pontos: [] },
      { nome: 'Córdoba', coords: { lat: -31.4201, lng: -64.1888 },
        desc: 'A cidade universitária colonial no coração do país.', pontos: [] },
    ]
  },

  // ─── VIETNÃ ────────────────────────────────────────────────────────────────
  {
    slug: 'vietna', nome: 'Vietnã', coords: { lat: 16.0, lng: 107.5 },
    cidades: [
      { nome: 'Hanói', coords: { lat: 21.0285, lng: 105.8542 },
        desc: 'A capital de mil anos — lago, templos e o caos encantador das motos.', pontos: [] },
      { nome: 'Baía de Ha Long', coords: { lat: 20.9101, lng: 107.1839 },
        desc: 'Milhares de ilhotas de calcário emergindo de um mar esmeralda.', pontos: [] },
      { nome: 'Hoi An', coords: { lat: 15.8801, lng: 108.3380 },
        desc: 'A cidade antiga das lanternas, intacta à beira do rio.', pontos: [] },
      { nome: 'Ho Chi Minh', coords: { lat: 10.8231, lng: 106.6297 },
        desc: 'Saigon — energia frenética e história no sul do país.', pontos: [] },
      { nome: 'Sapa', coords: { lat: 22.3380, lng: 103.8442 },
        desc: 'Terraços de arroz escalonando montanhas, entre minorias étnicas.', pontos: [] },
      { nome: 'Hue', coords: { lat: 16.4637, lng: 107.5909 },
        desc: 'A antiga capital imperial às margens do Rio dos Perfumes.', pontos: [] },
    ]
  },

  // ─── INDONÉSIA ─────────────────────────────────────────────────────────────
  {
    slug: 'indonesia', nome: 'Indonésia', coords: { lat: -2.0, lng: 117.0 },
    cidades: [
      { nome: 'Bali', coords: { lat: -8.4095, lng: 115.1889 },
        desc: 'A ilha dos deuses — templos, arrozais e praias de surfe.', pontos: [
        { nome: 'Ubud', coords: { lat: -8.5069, lng: 115.2625 },
          desc: 'O coração espiritual de Bali, entre arrozais e arte.' },
        { nome: 'Tanah Lot', coords: { lat: -8.6212, lng: 115.0868 },
          desc: 'O templo sobre uma rocha cercada pelo mar ao pôr do sol.' },
      ] },
      { nome: 'Komodo', coords: { lat: -8.5500, lng: 119.4890 },
        desc: 'A ilha dos dragões e do mar mais colorido do mundo.', pontos: [] },
      { nome: 'Borobudur', coords: { lat: -7.6079, lng: 110.2038 },
        desc: 'O maior templo budista do mundo, ao amanhecer entre vulcões.', pontos: [] },
      { nome: 'Monte Bromo', coords: { lat: -7.9425, lng: 112.9530 },
        desc: 'O vulcão fumegante visto de um mar de areia ao nascer do sol.', pontos: [] },
      { nome: 'Ilhas Gili', coords: { lat: -8.3500, lng: 116.0400 },
        desc: 'Três ilhotas sem carros, de águas transparentes e tartarugas.', pontos: [] },
    ]
  },

  // ─── SINGAPURA ─────────────────────────────────────────────────────────────
  {
    slug: 'singapura', nome: 'Singapura', coords: { lat: 1.35, lng: 103.82 },
    cidades: [
      { nome: 'Marina Bay Sands', coords: { lat: 1.2834, lng: 103.8607 },
        desc: 'O hotel-navio com a piscina mais famosa do mundo no topo.', pontos: [] },
      { nome: 'Gardens by the Bay', coords: { lat: 1.2816, lng: 103.8636 },
        desc: 'As superárvores futuristas que se acendem à noite.', pontos: [] },
      { nome: 'Sentosa', coords: { lat: 1.2494, lng: 103.8303 },
        desc: 'A ilha do lazer — praias, parques e vista do mar.', pontos: [] },
      { nome: 'Chinatown', coords: { lat: 1.2839, lng: 103.8436 },
        desc: 'Templos, mercados e a comida de rua mais premiada do mundo.', pontos: [] },
    ]
  },

  // ─── COREIA DO SUL ─────────────────────────────────────────────────────────
  {
    slug: 'coreia-do-sul', nome: 'Coreia do Sul', coords: { lat: 36.5, lng: 127.9 },
    cidades: [
      { nome: 'Seul', coords: { lat: 37.5665, lng: 126.9780 },
        desc: 'A capital onde palácios milenares convivem com K-pop e néon.', pontos: [
        { nome: 'Gyeongbokgung', coords: { lat: 37.5796, lng: 126.9770 },
          desc: 'O grande palácio real da dinastia Joseon, com a troca da guarda.' },
      ] },
      { nome: 'Busan', coords: { lat: 35.1796, lng: 129.0756 },
        desc: 'A cidade portuária de praias, templos no mar e mercados de peixe.', pontos: [] },
      { nome: 'Jeju', coords: { lat: 33.4996, lng: 126.5312 },
        desc: 'A ilha vulcânica de crateras, cascatas e mulheres-mergulhadoras.', pontos: [] },
      { nome: 'Gyeongju', coords: { lat: 35.8562, lng: 129.2247 },
        desc: 'O museu sem paredes — tumbas e templos do antigo reino Silla.', pontos: [] },
    ]
  },

  // ─── AUSTRÁLIA ─────────────────────────────────────────────────────────────
  {
    slug: 'australia', nome: 'Austrália', coords: { lat: -25.0, lng: 134.0 },
    cidades: [
      { nome: 'Sydney', coords: { lat: -33.8688, lng: 151.2093 },
        desc: 'A cidade do porto mais famoso do mundo — ópera, praias e brunch ao sol.', pontos: [
        { nome: 'Ópera de Sydney', coords: { lat: -33.8568, lng: 151.2153 },
          desc: 'A vela branca de concreto que virou o símbolo da Austrália.' },
        { nome: 'Bondi Beach', coords: { lat: -33.8908, lng: 151.2743 },
          desc: 'A praia urbana mais icônica, com a caminhada costeira até Coogee.' },
      ] },
      { nome: 'Cairns', coords: { lat: -16.9186, lng: 145.7781 },
        desc: 'O portão para a Grande Barreira de Corais — o maior recife vivo do planeta.', pontos: [] },
      { nome: 'Uluru', coords: { lat: -25.3444, lng: 131.0369 },
        desc: 'O monólito sagrado que muda de cor ao pôr do sol no coração vermelho.', pontos: [] },
      { nome: 'Melbourne', coords: { lat: -37.8136, lng: 144.9631 },
        desc: 'A capital cultural — becos de arte, cafés e vida boêmia.', pontos: [] },
      { nome: 'Whitsundays', coords: { lat: -20.2839, lng: 148.9637 },
        desc: 'Areias de sílica branca e o mar em tons impossíveis de azul.', pontos: [] },
    ]
  },

  // ─── NOVA ZELÂNDIA ─────────────────────────────────────────────────────────
  {
    slug: 'nova-zelandia', nome: 'Nova Zelândia', coords: { lat: -41.5, lng: 172.5 },
    cidades: [
      { nome: 'Queenstown', coords: { lat: -45.0312, lng: 168.6626 },
        desc: 'A capital mundial da aventura, abraçada por montanhas e lago.', pontos: [] },
      { nome: 'Milford Sound', coords: { lat: -44.6414, lng: 167.8974 },
        desc: 'O fiorde de penhascos e cascatas — a oitava maravilha do mundo.', pontos: [] },
      { nome: 'Auckland', coords: { lat: -36.8485, lng: 174.7633 },
        desc: 'A cidade das velas, entre dois portos e vulcões adormecidos.', pontos: [] },
      { nome: 'Rotorua', coords: { lat: -38.1368, lng: 176.2497 },
        desc: 'Terra de gêiseres, lama borbulhante e cultura Maori viva.', pontos: [] },
      { nome: 'Hobbiton', coords: { lat: -37.8721, lng: 175.6831 },
        desc: 'A Comarca dos filmes, verde e ondulada, em Matamata.', pontos: [] },
    ]
  },

  // ─── ISLÂNDIA ──────────────────────────────────────────────────────────────
  {
    slug: 'islandia', nome: 'Islândia', coords: { lat: 64.9, lng: -19.0 },
    cidades: [
      { nome: 'Reykjavík', coords: { lat: 64.1466, lng: -21.9426 },
        desc: 'A capital mais ao norte do mundo, colorida e criativa.', pontos: [] },
      { nome: 'Círculo Dourado', coords: { lat: 64.3104, lng: -20.3024 },
        desc: 'Gêiseres, a cascata Gullfoss e a falha entre dois continentes.', pontos: [] },
      { nome: 'Lagoa Azul', coords: { lat: 63.8804, lng: -22.4495 },
        desc: 'O banho geotérmico leitoso em meio a um campo de lava.', pontos: [] },
      { nome: 'Jökulsárlón', coords: { lat: 64.0784, lng: -16.2306 },
        desc: 'A lagoa de icebergs azuis à deriva rumo ao mar.', pontos: [] },
      { nome: 'Vík', coords: { lat: 63.4194, lng: -19.0060 },
        desc: 'Praias de areia preta e colunas de basalto sob falésias.', pontos: [] },
    ]
  },

  // ─── NORUEGA ───────────────────────────────────────────────────────────────
  {
    slug: 'noruega', nome: 'Noruega', coords: { lat: 64.5, lng: 11.0 },
    cidades: [
      { nome: 'Oslo', coords: { lat: 59.9139, lng: 10.7522 },
        desc: 'A capital entre o fiorde e a floresta — design e museus vikings.', pontos: [] },
      { nome: 'Bergen', coords: { lat: 60.3913, lng: 5.3221 },
        desc: 'A porta dos fiordes, com seu cais hanseático colorido.', pontos: [] },
      { nome: 'Geirangerfjord', coords: { lat: 62.1010, lng: 7.0066 },
        desc: 'O fiorde-patrimônio de cascatas despencando em paredões verdes.', pontos: [] },
      { nome: 'Lofoten', coords: { lat: 68.2000, lng: 13.6000 },
        desc: 'Picos cravados no mar e vilarejos de pescadores sob a aurora.', pontos: [] },
      { nome: 'Tromso', coords: { lat: 69.6492, lng: 18.9553 },
        desc: 'A cidade ártica para caçar a aurora boreal no inverno.', pontos: [] },
    ]
  },

  // ─── SUÉCIA ────────────────────────────────────────────────────────────────
  {
    slug: 'suecia', nome: 'Suécia', coords: { lat: 60.5, lng: 15.5 },
    cidades: [
      { nome: 'Estocolmo', coords: { lat: 59.3293, lng: 18.0686 },
        desc: 'A capital sobre 14 ilhas — elegante, limpa e cercada de água.', pontos: [] },
      { nome: 'Gotemburgo', coords: { lat: 57.7089, lng: 11.9746 },
        desc: 'A cidade dos canais, frutos do mar e arquipélago.', pontos: [] },
      { nome: 'Lapônia', coords: { lat: 67.8558, lng: 20.2253 },
        desc: 'O hotel de gelo e a aurora boreal no extremo norte.', pontos: [] },
      { nome: 'Visby', coords: { lat: 57.6348, lng: 18.2948 },
        desc: 'Cidade medieval murada na ilha de Gotland.', pontos: [] },
    ]
  },

  // ─── IRLANDA ───────────────────────────────────────────────────────────────
  {
    slug: 'irlanda', nome: 'Irlanda', coords: { lat: 53.4, lng: -8.0 },
    cidades: [
      { nome: 'Dublin', coords: { lat: 53.3498, lng: -6.2603 },
        desc: 'A capital literária dos pubs, da Guinness e da boa prosa.', pontos: [] },
      { nome: 'Penhascos de Moher', coords: { lat: 52.9719, lng: -9.4269 },
        desc: 'Paredões de 200 metros despencando direto no Atlântico.', pontos: [] },
      { nome: 'Galway', coords: { lat: 53.2707, lng: -9.0568 },
        desc: 'A cidade boêmia de música ao vivo e portão para o oeste selvagem.', pontos: [] },
      { nome: 'Anel de Kerry', coords: { lat: 51.9000, lng: -9.8000 },
        desc: 'A rota cênica de montanhas, lagos e vilarejos à beira-mar.', pontos: [] },
    ]
  },

  // ─── BÉLGICA ───────────────────────────────────────────────────────────────
  {
    slug: 'belgica', nome: 'Bélgica', coords: { lat: 50.6, lng: 4.6 },
    cidades: [
      { nome: 'Bruxelas', coords: { lat: 50.8503, lng: 4.3517 },
        desc: 'A capital da Europa — Grand Place, waffles e art nouveau.', pontos: [] },
      { nome: 'Bruges', coords: { lat: 51.2093, lng: 3.2247 },
        desc: 'A Veneza do Norte, de canais e ruelas medievais intactas.', pontos: [] },
      { nome: 'Gante', coords: { lat: 51.0543, lng: 3.7174 },
        desc: 'Cidade-canal medieval, viva e menos turística que Bruges.', pontos: [] },
      { nome: 'Antuérpia', coords: { lat: 51.2194, lng: 4.4025 },
        desc: 'A capital dos diamantes e da moda flamenga.', pontos: [] },
    ]
  },

  // ─── TCHÉQUIA ──────────────────────────────────────────────────────────────
  {
    slug: 'tchequia', nome: 'Tchéquia', coords: { lat: 49.8, lng: 15.5 },
    cidades: [
      { nome: 'Praga', coords: { lat: 50.0755, lng: 14.4378 },
        desc: 'A cidade das cem torres — castelo, ponte e relógio astronômico.', pontos: [
        { nome: 'Ponte Carlos', coords: { lat: 50.0865, lng: 14.4114 },
          desc: 'A ponte gótica de estátuas enegrecidas sobre o rio Vltava.' },
        { nome: 'Castelo de Praga', coords: { lat: 50.0911, lng: 14.4016 },
          desc: 'O maior complexo de castelo do mundo, no alto da colina.' },
      ] },
      { nome: 'Cesky Krumlov', coords: { lat: 48.8127, lng: 14.3175 },
        desc: 'Vila medieval abraçada por um meandro do rio, intacta no tempo.', pontos: [] },
      { nome: 'Karlovy Vary', coords: { lat: 50.2329, lng: 12.8710 },
        desc: 'A cidade-spa de fontes termais, colunatas e fachadas pastel.', pontos: [] },
    ]
  },

  // ─── HUNGRIA ───────────────────────────────────────────────────────────────
  {
    slug: 'hungria', nome: 'Hungria', coords: { lat: 47.2, lng: 19.5 },
    cidades: [
      { nome: 'Budapeste', coords: { lat: 47.4979, lng: 19.0402 },
        desc: 'A pérola do Danúbio — banhos termais e parlamento iluminado.', pontos: [
        { nome: 'Parlamento', coords: { lat: 47.5072, lng: 19.0456 },
          desc: 'O colosso neogótico às margens do Danúbio.' },
        { nome: 'Banhos Széchenyi', coords: { lat: 47.5188, lng: 19.0816 },
          desc: 'O banho termal amarelo a céu aberto, fumegante no inverno.' },
      ] },
      { nome: 'Eger', coords: { lat: 47.9026, lng: 20.3772 },
        desc: 'Cidade barroca de castelo e o famoso vinho Sangue de Touro.', pontos: [] },
      { nome: 'Lago Balaton', coords: { lat: 46.8000, lng: 17.7000 },
        desc: 'O mar da Hungria — vinhedos e vilarejos à beira da água.', pontos: [] },
    ]
  },

  // ─── POLÔNIA ───────────────────────────────────────────────────────────────
  {
    slug: 'polonia', nome: 'Polônia', coords: { lat: 52.0, lng: 19.5 },
    cidades: [
      { nome: 'Cracóvia', coords: { lat: 50.0647, lng: 19.9450 },
        desc: 'A antiga capital real, intacta — a maior praça medieval da Europa.', pontos: [] },
      { nome: 'Varsóvia', coords: { lat: 52.2297, lng: 21.0122 },
        desc: 'A capital fênix, reconstruída tijolo a tijolo após a guerra.', pontos: [] },
      { nome: 'Gdańsk', coords: { lat: 54.3520, lng: 18.6466 },
        desc: 'A cidade hanseática do âmbar, de fachadas coloridas no Báltico.', pontos: [] },
      { nome: 'Wieliczka', coords: { lat: 49.9836, lng: 20.0540 },
        desc: 'Uma catedral inteira esculpida no fundo de uma mina de sal.', pontos: [] },
      { nome: 'Zakopane', coords: { lat: 49.2992, lng: 19.9496 },
        desc: 'A capital de inverno aos pés dos montes Tatras.', pontos: [] },
    ]
  },

  // ─── JORDÂNIA ──────────────────────────────────────────────────────────────
  {
    slug: 'jordania', nome: 'Jordânia', coords: { lat: 31.0, lng: 36.5 },
    cidades: [
      { nome: 'Petra', coords: { lat: 30.3285, lng: 35.4444 },
        desc: 'A cidade rosa esculpida na rocha pelos nabateus há 2.000 anos.', pontos: [
        { nome: 'O Tesouro', coords: { lat: 30.3222, lng: 35.4515 },
          desc: 'A fachada monumental que surge ao fim de um desfiladeiro estreito.' },
      ] },
      { nome: 'Wadi Rum', coords: { lat: 29.5765, lng: 35.4206 },
        desc: 'O deserto vermelho de Lawrence da Arábia, sob céus de estrelas.', pontos: [] },
      { nome: 'Amã', coords: { lat: 31.9454, lng: 35.9284 },
        desc: 'A capital de colinas, anfiteatro romano e cafés perfumados.', pontos: [] },
      { nome: 'Mar Morto', coords: { lat: 31.5000, lng: 35.5000 },
        desc: 'O ponto mais baixo da Terra, onde o corpo flutua sozinho.', pontos: [] },
    ]
  },

  // ─── ISRAEL ────────────────────────────────────────────────────────────────
  {
    slug: 'israel', nome: 'Israel', coords: { lat: 31.4, lng: 35.0 },
    cidades: [
      { nome: 'Jerusalém', coords: { lat: 31.7683, lng: 35.2137 },
        desc: 'A cidade sagrada para três religiões — viva, intensa e milenar.', pontos: [
        { nome: 'Muro das Lamentações', coords: { lat: 31.7767, lng: 35.2345 },
          desc: 'O lugar mais sagrado do judaísmo, ao pé do Monte do Templo.' },
        { nome: 'Cidade Velha', coords: { lat: 31.7781, lng: 35.2350 },
          desc: 'Becos de pedra entre quatro quarteirões e três fés.' },
      ] },
      { nome: 'Tel Aviv', coords: { lat: 32.0853, lng: 34.7818 },
        desc: 'A cidade que não para — praia, Bauhaus e vida noturna.', pontos: [] },
      { nome: 'Mar da Galileia', coords: { lat: 32.8000, lng: 35.6000 },
        desc: 'O lago bíblico cercado de colinas verdes e história.', pontos: [] },
      { nome: 'Massada', coords: { lat: 31.3157, lng: 35.3534 },
        desc: 'A fortaleza no alto do deserto, sobre o Mar Morto.', pontos: [] },
    ]
  },

  // ─── SRI LANKA ─────────────────────────────────────────────────────────────
  {
    slug: 'sri-lanka', nome: 'Sri Lanka', coords: { lat: 7.8, lng: 80.7 },
    cidades: [
      { nome: 'Kandy', coords: { lat: 7.2906, lng: 80.6337 },
        desc: 'A cidade-templo do dente sagrado de Buda, entre colinas.', pontos: [] },
      { nome: 'Sigiriya', coords: { lat: 7.9570, lng: 80.7603 },
        desc: 'A fortaleza-palácio no topo de um rochedo de 200 metros.', pontos: [] },
      { nome: 'Ella', coords: { lat: 6.8667, lng: 81.0466 },
        desc: 'O vale verde das plantações de chá e a ponte dos nove arcos.', pontos: [] },
      { nome: 'Galle', coords: { lat: 6.0535, lng: 80.2210 },
        desc: 'O forte holandês à beira-mar, de ruelas e cafés charmosos.', pontos: [] },
      { nome: 'Yala', coords: { lat: 6.3728, lng: 81.5167 },
        desc: 'O safári dos leopardos no extremo sul da ilha.', pontos: [] },
    ]
  },

  // ─── NEPAL ─────────────────────────────────────────────────────────────────
  {
    slug: 'nepal', nome: 'Nepal', coords: { lat: 28.3, lng: 84.0 },
    cidades: [
      { nome: 'Kathmandu', coords: { lat: 27.7172, lng: 85.3240 },
        desc: 'A capital de templos, estupas e ruelas de incenso e tibetanos.', pontos: [] },
      { nome: 'Pokhara', coords: { lat: 28.2096, lng: 83.9856 },
        desc: 'A cidade-lago aos pés dos Annapurnas, base do trekking.', pontos: [] },
      { nome: 'Everest', coords: { lat: 27.8069, lng: 86.7140 },
        desc: 'O portão para o teto do mundo, partindo de Namche Bazaar.', pontos: [] },
      { nome: 'Chitwan', coords: { lat: 27.5291, lng: 84.3542 },
        desc: 'O safári de rinocerontes e tigres na selva do sul.', pontos: [] },
    ]
  },

  // ─── CAMBOJA ───────────────────────────────────────────────────────────────
  {
    slug: 'camboja', nome: 'Camboja', coords: { lat: 12.5, lng: 104.9 },
    cidades: [
      { nome: 'Siem Reap', coords: { lat: 13.4125, lng: 103.8670 },
        desc: 'O portão para Angkor, o maior complexo de templos do mundo.', pontos: [
        { nome: 'Angkor Wat', coords: { lat: 13.4125, lng: 103.8670 },
          desc: 'O templo-montanha que se reflete no lago ao nascer do sol.' },
        { nome: 'Ta Prohm', coords: { lat: 13.4348, lng: 103.8891 },
          desc: 'O templo tomado por raízes gigantes de figueiras.' },
      ] },
      { nome: 'Phnom Penh', coords: { lat: 11.5564, lng: 104.9282 },
        desc: 'A capital às margens do Mekong, entre palácio real e memória.', pontos: [] },
      { nome: 'Battambang', coords: { lat: 13.0957, lng: 103.2022 },
        desc: 'A cidade colonial tranquila e o lendário trem de bambu.', pontos: [] },
    ]
  },

  // ─── FILIPINAS ─────────────────────────────────────────────────────────────
  {
    slug: 'filipinas', nome: 'Filipinas', coords: { lat: 12.5, lng: 122.0 },
    cidades: [
      { nome: 'El Nido', coords: { lat: 11.1800, lng: 119.3890 },
        desc: 'Lagunas esmeralda entre paredões de calcário em Palawan.', pontos: [] },
      { nome: 'Boracay', coords: { lat: 11.9674, lng: 121.9248 },
        desc: 'A praia de areia branca mais celebrada da Ásia.', pontos: [] },
      { nome: 'Bohol', coords: { lat: 9.8500, lng: 124.1435 },
        desc: 'As Chocolate Hills e os menores primatas do mundo.', pontos: [] },
      { nome: 'Manila', coords: { lat: 14.5995, lng: 120.9842 },
        desc: 'A capital vibrante de fortaleza espanhola e baías de pôr do sol.', pontos: [] },
      { nome: 'Banaue', coords: { lat: 16.9292, lng: 121.0586 },
        desc: 'Os terraços de arroz esculpidos na montanha há 2.000 anos.', pontos: [] },
    ]
  },

  // ─── MALÁSIA ───────────────────────────────────────────────────────────────
  {
    slug: 'malasia', nome: 'Malásia', coords: { lat: 4.2, lng: 102.0 },
    cidades: [
      { nome: 'Kuala Lumpur', coords: { lat: 3.1390, lng: 101.6869 },
        desc: 'A capital das torres gêmeas, mesquitas e comida de rua.', pontos: [
        { nome: 'Torres Petronas', coords: { lat: 3.1578, lng: 101.7117 },
          desc: 'As gêmeas de aço que definiram a skyline da cidade.' },
      ] },
      { nome: 'Penang', coords: { lat: 5.4141, lng: 100.3288 },
        desc: 'A capital gastronômica do país — arte de rua e heranças vivas.', pontos: [] },
      { nome: 'Langkawi', coords: { lat: 6.3500, lng: 99.8000 },
        desc: 'O arquipélago de praias, teleférico e selva tropical.', pontos: [] },
      { nome: 'Bornéu', coords: { lat: 6.0750, lng: 116.5583 },
        desc: 'A montanha Kinabalu e os orangotangos na floresta milenar.', pontos: [] },
    ]
  },

  // ─── QUÊNIA ────────────────────────────────────────────────────────────────
  {
    slug: 'quenia', nome: 'Quênia', coords: { lat: 0.5, lng: 37.9 },
    cidades: [
      { nome: 'Masai Mara', coords: { lat: -1.4061, lng: 35.0117 },
        desc: 'A savana da Grande Migração e dos Cinco Grandes.', pontos: [] },
      { nome: 'Nairóbi', coords: { lat: -1.2921, lng: 36.8219 },
        desc: 'A capital com safári e girafas logo nos arredores.', pontos: [] },
      { nome: 'Amboseli', coords: { lat: -2.6527, lng: 37.2606 },
        desc: 'Manadas de elefantes diante do Kilimanjaro nevado.', pontos: [] },
      { nome: 'Diani Beach', coords: { lat: -4.2767, lng: 39.5908 },
        desc: 'Areia branca e o Índico turquesa no litoral sul.', pontos: [] },
    ]
  },

  // ─── TANZÂNIA ──────────────────────────────────────────────────────────────
  {
    slug: 'tanzania', nome: 'Tanzânia', coords: { lat: -6.4, lng: 35.0 },
    cidades: [
      { nome: 'Serengeti', coords: { lat: -2.3333, lng: 34.8333 },
        desc: 'A planície sem fim da migração de milhões de gnus.', pontos: [] },
      { nome: 'Kilimanjaro', coords: { lat: -3.0674, lng: 37.3556 },
        desc: 'O teto da África — neve eterna sobre o equador.', pontos: [] },
      { nome: 'Zanzibar', coords: { lat: -6.1659, lng: 39.2026 },
        desc: 'A ilha das especiarias, Stone Town e praias de sonho.', pontos: [] },
      { nome: 'Ngorongoro', coords: { lat: -3.2000, lng: 35.5000 },
        desc: 'O Éden da vida selvagem dentro de uma cratera vulcânica.', pontos: [] },
    ]
  },

  // ─── COLÔMBIA ──────────────────────────────────────────────────────────────
  {
    slug: 'colombia', nome: 'Colômbia', coords: { lat: 4.0, lng: -73.0 },
    cidades: [
      { nome: 'Cartagena', coords: { lat: 10.3910, lng: -75.4794 },
        desc: 'A cidade murada do Caribe — varandas floridas e cor em cada esquina.', pontos: [] },
      { nome: 'Bogotá', coords: { lat: 4.7110, lng: -74.0721 },
        desc: 'A capital nas alturas dos Andes, de ouro pré-colombiano e grafite.', pontos: [] },
      { nome: 'Medellín', coords: { lat: 6.2442, lng: -75.5812 },
        desc: 'A cidade da eterna primavera, reinventada e criativa.', pontos: [] },
      { nome: 'Eixo Cafeeiro', coords: { lat: 4.6371, lng: -75.5705 },
        desc: 'Vales de palmeiras gigantes e fazendas de café em Salento.', pontos: [] },
      { nome: 'Tayrona', coords: { lat: 11.3000, lng: -73.9000 },
        desc: 'A selva que encontra praias virgens no Caribe colombiano.', pontos: [] },
    ]
  },

  // ─── CHILE ─────────────────────────────────────────────────────────────────
  {
    slug: 'chile', nome: 'Chile', coords: { lat: -35.0, lng: -71.0 },
    cidades: [
      { nome: 'Santiago', coords: { lat: -33.4489, lng: -70.6693 },
        desc: 'A capital entre a cordilheira nevada e os vinhedos do vale.', pontos: [] },
      { nome: 'Atacama', coords: { lat: -22.9087, lng: -68.2000 },
        desc: 'O deserto mais árido do mundo — gêiseres, lagoas e céus de estrelas.', pontos: [] },
      { nome: 'Valparaíso', coords: { lat: -33.0472, lng: -71.6127 },
        desc: 'A cidade-porto de morros coloridos, funiculares e murais.', pontos: [] },
      { nome: 'Ilha de Páscoa', coords: { lat: -27.1127, lng: -109.3497 },
        desc: 'Os moais misteriosos no ponto habitado mais isolado do planeta.', pontos: [] },
    ]
  },

  // ─── EQUADOR ───────────────────────────────────────────────────────────────
  {
    slug: 'equador', nome: 'Equador', coords: { lat: -1.5, lng: -78.5 },
    cidades: [
      { nome: 'Quito', coords: { lat: -0.1807, lng: -78.4678 },
        desc: 'O centro colonial mais bem preservado da América, a 2.850m.', pontos: [] },
      { nome: 'Galápagos', coords: { lat: -0.9538, lng: -90.9656 },
        desc: 'O arquipélago de Darwin — fauna que não tem medo do homem.', pontos: [] },
      { nome: 'Baños', coords: { lat: -1.3928, lng: -78.4269 },
        desc: 'A cidade-aventura de cachoeiras e termas ao pé de um vulcão.', pontos: [] },
      { nome: 'Cuenca', coords: { lat: -2.9001, lng: -79.0059 },
        desc: 'Cidade andina de cúpulas azuis e ruas de pedra.', pontos: [] },
    ]
  },

  // ─── BOLÍVIA ───────────────────────────────────────────────────────────────
  {
    slug: 'bolivia', nome: 'Bolívia', coords: { lat: -16.5, lng: -64.5 },
    cidades: [
      { nome: 'Salar de Uyuni', coords: { lat: -20.1338, lng: -67.4891 },
        desc: 'O maior espelho do mundo — o deserto de sal que reflete o céu.', pontos: [] },
      { nome: 'La Paz', coords: { lat: -16.4897, lng: -68.1193 },
        desc: 'A sede de governo mais alta do mundo, encravada num cânion andino.', pontos: [] },
      { nome: 'Isla del Sol', coords: { lat: -16.0247, lng: -69.1700 },
        desc: 'A ilha sagrada no Lago Titicaca, berço mítico dos incas.', pontos: [] },
      { nome: 'Sucre', coords: { lat: -19.0196, lng: -65.2619 },
        desc: 'A cidade branca, capital constitucional de fachadas coloniais.', pontos: [] },
    ]
  },

  // ─── URUGUAI ───────────────────────────────────────────────────────────────
  {
    slug: 'uruguai', nome: 'Uruguai', coords: { lat: -32.5, lng: -56.0 },
    cidades: [
      { nome: 'Montevidéu', coords: { lat: -34.9011, lng: -56.1645 },
        desc: 'A capital tranquila da rambla, do mate e do tango.', pontos: [] },
      { nome: 'Punta del Este', coords: { lat: -34.9587, lng: -54.9342 },
        desc: 'O balneário glamouroso e a mão gigante que emerge da areia.', pontos: [] },
      { nome: 'Colônia do Sacramento', coords: { lat: -34.4626, lng: -57.8400 },
        desc: 'O bairro histórico português à beira do Rio da Prata.', pontos: [] },
      { nome: 'José Ignacio', coords: { lat: -34.8386, lng: -54.6300 },
        desc: 'O vilarejo de praia chique e descalço da moda sul-americana.', pontos: [] },
    ]
  },

  // ─── PARAGUAI ──────────────────────────────────────────────────────────────
  {
    slug: 'paraguai', nome: 'Paraguai', coords: { lat: -23.4, lng: -58.4 },
    cidades: [
      { nome: 'Assunção', coords: { lat: -25.2637, lng: -57.5759 },
        desc: 'A capital tranquila e calorosa às margens do rio Paraguai.', pontos: [] },
      { nome: 'Missões Jesuíticas', coords: { lat: -27.1300, lng: -55.7000 },
        desc: 'As ruínas jesuíticas guaranis de Trinidad, patrimônio da humanidade.', pontos: [] },
      { nome: 'Encarnación', coords: { lat: -27.3306, lng: -55.8667 },
        desc: 'A pérola do sul — praias de rio e o maior carnaval do país.', pontos: [] },
    ]
  },

  // ─── VENEZUELA ─────────────────────────────────────────────────────────────
  {
    slug: 'venezuela', nome: 'Venezuela', coords: { lat: 6.5, lng: -66.5 },
    cidades: [
      { nome: 'Salto Angel', coords: { lat: 5.9701, lng: -62.5362 },
        desc: 'A cachoeira mais alta do mundo, despencando do alto de um tepui.', pontos: [] },
      { nome: 'Caracas', coords: { lat: 10.4806, lng: -66.9036 },
        desc: 'A capital ao pé do morro Ávila, entre o mar e a montanha.', pontos: [] },
      { nome: 'Gran Sabana', coords: { lat: 5.1431, lng: -60.7625 },
        desc: 'Os tepuis ancestrais que inspiraram "O Mundo Perdido".', pontos: [] },
      { nome: 'Los Roques', coords: { lat: 11.8500, lng: -66.7500 },
        desc: 'O arquipélago caribenho de águas cristalinas e bancos de areia.', pontos: [] },
    ]
  },

  // ─── GUIANA ────────────────────────────────────────────────────────────────
  {
    slug: 'guiana', nome: 'Guiana', coords: { lat: 5.0, lng: -58.9 },
    cidades: [
      { nome: 'Georgetown', coords: { lat: 6.8013, lng: -58.1551 },
        desc: 'A capital de arquitetura colonial em madeira, à beira do Caribe.', pontos: [] },
      { nome: 'Kaieteur', coords: { lat: 5.1742, lng: -59.4817 },
        desc: 'A maior queda de água de salto único do mundo, na selva intocada.', pontos: [] },
    ]
  },

  // ─── SURINAME ──────────────────────────────────────────────────────────────
  {
    slug: 'suriname', nome: 'Suriname', coords: { lat: 4.1, lng: -56.0 },
    cidades: [
      { nome: 'Paramaribo', coords: { lat: 5.8520, lng: -55.2038 },
        desc: 'A capital de madeira colonial holandesa, patrimônio da humanidade.', pontos: [] },
      { nome: 'Brownsberg', coords: { lat: 4.9500, lng: -55.1800 },
        desc: 'A reserva de floresta amazônica intocada que cobre quase todo o país.', pontos: [] },
    ]
  },

  // ─── PANAMÁ ────────────────────────────────────────────────────────────────
  {
    slug: 'panama', nome: 'Panamá', coords: { lat: 8.5, lng: -80.0 },
    cidades: [
      { nome: 'Cidade do Panamá', coords: { lat: 8.9824, lng: -79.5199 },
        desc: 'A capital de arranha-céus à beira do canal, com a Cidade Velha colonial.', pontos: [] },
      { nome: 'Canal do Panamá', coords: { lat: 9.1000, lng: -79.8000 },
        desc: 'A obra que une dois oceanos — navios içados entre comportas gigantes.', pontos: [] },
      { nome: 'Bocas del Toro', coords: { lat: 9.3404, lng: -82.2417 },
        desc: 'O arquipélago caribenho de cabanas sobre a água e selva.', pontos: [] },
      { nome: 'Boquete', coords: { lat: 8.7800, lng: -82.4400 },
        desc: 'A cidade das montanhas, café de altitude e jardins floridos.', pontos: [] },
    ]
  },

  // ─── GUATEMALA ─────────────────────────────────────────────────────────────
  {
    slug: 'guatemala', nome: 'Guatemala', coords: { lat: 15.5, lng: -90.3 },
    cidades: [
      { nome: 'Antígua', coords: { lat: 14.5586, lng: -90.7295 },
        desc: 'A cidade colonial de ruas de pedra emoldurada por três vulcões.', pontos: [] },
      { nome: 'Tikal', coords: { lat: 17.2220, lng: -89.6237 },
        desc: 'A cidade maia engolida pela selva, com templos acima das copas.', pontos: [] },
      { nome: 'Lago Atitlán', coords: { lat: 14.6900, lng: -91.2000 },
        desc: 'O lago vulcânico cercado de aldeias maias, dito o mais belo do mundo.', pontos: [] },
      { nome: 'Cidade da Guatemala', coords: { lat: 14.6349, lng: -90.5069 },
        desc: 'A capital movimentada, portão de entrada do país.', pontos: [] },
    ]
  },

  // ─── BELIZE ────────────────────────────────────────────────────────────────
  {
    slug: 'belize', nome: 'Belize', coords: { lat: 17.2, lng: -88.5 },
    cidades: [
      { nome: 'Great Blue Hole', coords: { lat: 17.3160, lng: -87.5350 },
        desc: 'O sumidouro azul-marinho perfeito visto do alto — um mergulho lendário.', pontos: [] },
      { nome: 'Cayo Ambergris', coords: { lat: 17.9214, lng: -87.9611 },
        desc: 'A ilha-base da segunda maior barreira de corais do planeta.', pontos: [] },
      { nome: 'Caracol', coords: { lat: 16.7639, lng: -89.1178 },
        desc: 'As ruínas maias mais imponentes do país, escondidas na selva.', pontos: [] },
      { nome: 'Placencia', coords: { lat: 16.5167, lng: -88.3667 },
        desc: 'A península de praias caribenhas e vilarejo descalço.', pontos: [] },
    ]
  },

  // ─── NICARÁGUA ─────────────────────────────────────────────────────────────
  {
    slug: 'nicaragua', nome: 'Nicarágua', coords: { lat: 12.8, lng: -85.0 },
    cidades: [
      { nome: 'Granada', coords: { lat: 11.9344, lng: -85.9560 },
        desc: 'A cidade colonial mais antiga das Américas, colorida à beira do grande lago.', pontos: [] },
      { nome: 'León', coords: { lat: 12.4347, lng: -86.8790 },
        desc: 'A cidade universitária de igrejas barrocas e vulcões para sandboard.', pontos: [] },
      { nome: 'Ometepe', coords: { lat: 11.5000, lng: -85.6000 },
        desc: 'A ilha de dois vulcões erguendo-se do maior lago da região.', pontos: [] },
      { nome: 'San Juan del Sur', coords: { lat: 11.2530, lng: -85.8700 },
        desc: 'A baía de surfe e pôr do sol no Pacífico.', pontos: [] },
    ]
  },

  // ─── HONDURAS ──────────────────────────────────────────────────────────────
  {
    slug: 'honduras', nome: 'Honduras', coords: { lat: 14.8, lng: -86.5 },
    cidades: [
      { nome: 'Roatán', coords: { lat: 16.3200, lng: -86.5300 },
        desc: 'A ilha caribenha de barreira de corais e mergulho cristalino.', pontos: [] },
      { nome: 'Copán', coords: { lat: 14.8400, lng: -89.1400 },
        desc: 'As ruínas maias célebres por suas estelas finamente esculpidas.', pontos: [] },
      { nome: 'Tegucigalpa', coords: { lat: 14.0723, lng: -87.1921 },
        desc: 'A capital nas montanhas, entre ladeiras e história colonial.', pontos: [] },
    ]
  },

  // ─── EL SALVADOR ───────────────────────────────────────────────────────────
  {
    slug: 'el-salvador', nome: 'El Salvador', coords: { lat: 13.8, lng: -88.9 },
    cidades: [
      { nome: 'San Salvador', coords: { lat: 13.6929, lng: -89.2182 },
        desc: 'A capital vibrante ao pé do vulcão, cercada de cafezais.', pontos: [] },
      { nome: 'Rota das Flores', coords: { lat: 13.8600, lng: -89.8400 },
        desc: 'A estrada cênica de vilarejos coloridos e plantações de café.', pontos: [] },
      { nome: 'El Tunco', coords: { lat: 13.4939, lng: -89.3826 },
        desc: 'A praia de areia preta, capital do surfe centro-americano.', pontos: [] },
      { nome: 'Suchitoto', coords: { lat: 13.9389, lng: -89.0272 },
        desc: 'A vila colonial de arte e ruas de pedra à beira do lago.', pontos: [] },
    ]
  },

  // ══ ILHAS DO PACÍFICO (OCEANIA) ════════════════════════════════════════════

  // ─── FIJI ──────────────────────────────────────────────────────────────────
  {
    slug: 'fiji', nome: 'Fiji', coords: { lat: -17.7, lng: 178.0 },
    cidades: [
      { nome: 'Ilhas Mamanuca', coords: { lat: -17.6667, lng: 177.1167 },
        desc: 'Ilhotas de areia branca e resorts sobre lagunas turquesa.', pontos: [] },
      { nome: 'Yasawa', coords: { lat: -17.0000, lng: 177.0000 },
        desc: 'A cadeia de ilhas vulcânicas de praias selvagens e cavernas.', pontos: [] },
      { nome: 'Taveuni', coords: { lat: -16.8500, lng: 179.9667 },
        desc: 'A ilha-jardim de cachoeiras e mergulho de corais moles.', pontos: [] },
      { nome: 'Suva', coords: { lat: -18.1416, lng: 178.4419 },
        desc: 'A capital colonial, mercados e portão para as ilhas.', pontos: [] },
    ]
  },

  // ─── POLINÉSIA FRANCESA ────────────────────────────────────────────────────
  {
    slug: 'polinesia-francesa', nome: 'Polinésia Francesa', coords: { lat: -17.6, lng: -149.6 },
    cidades: [
      { nome: 'Bora Bora', coords: { lat: -16.5004, lng: -151.7415 },
        desc: 'A laguna mais famosa do mundo e os bangalôs sobre a água.', pontos: [] },
      { nome: 'Tahiti', coords: { lat: -17.6509, lng: -149.4260 },
        desc: 'A ilha principal, de montanhas verdes e praias de areia preta.', pontos: [] },
      { nome: 'Moorea', coords: { lat: -17.5388, lng: -149.8295 },
        desc: 'A ilha-coração de baías dramáticas e raias nas águas rasas.', pontos: [] },
      { nome: 'Rangiroa', coords: { lat: -15.1333, lng: -147.6500 },
        desc: 'O atol-laguna, paraíso do mergulho com golfinhos.', pontos: [] },
    ]
  },

  // ─── ILHAS COOK ────────────────────────────────────────────────────────────
  {
    slug: 'ilhas-cook', nome: 'Ilhas Cook', coords: { lat: -21.2, lng: -159.7 },
    cidades: [
      { nome: 'Rarotonga', coords: { lat: -21.2367, lng: -159.7777 },
        desc: 'A ilha-montanha cercada por uma laguna de águas calmas.', pontos: [] },
      { nome: 'Aitutaki', coords: { lat: -18.8569, lng: -159.7853 },
        desc: 'Uma das mais belas lagunas do Pacífico, triangular e azul.', pontos: [] },
    ]
  },

  // ─── SAMOA ─────────────────────────────────────────────────────────────────
  {
    slug: 'samoa', nome: 'Samoa', coords: { lat: -13.7, lng: -172.1 },
    cidades: [
      { nome: 'Apia', coords: { lat: -13.8333, lng: -171.7667 },
        desc: 'A capital tranquila, lar de Robert Louis Stevenson.', pontos: [] },
      { nome: 'To Sua', coords: { lat: -14.0086, lng: -171.4290 },
        desc: 'A piscina natural em cratera, cercada de jardim tropical.', pontos: [] },
      { nome: 'Lalomanu', coords: { lat: -14.0264, lng: -171.4530 },
        desc: 'A praia de areia branca eleita entre as melhores do mundo.', pontos: [] },
    ]
  },

  // ─── VANUATU ───────────────────────────────────────────────────────────────
  {
    slug: 'vanuatu', nome: 'Vanuatu', coords: { lat: -16.5, lng: 168.0 },
    cidades: [
      { nome: 'Port Vila', coords: { lat: -17.7333, lng: 168.3167 },
        desc: 'A capital de mercados e lagunas azul-celeste.', pontos: [] },
      { nome: 'Vulcão Yasur', coords: { lat: -19.5300, lng: 169.4470 },
        desc: 'Um dos vulcões mais acessíveis do mundo, em erupção constante.', pontos: [] },
      { nome: 'Espiritu Santo', coords: { lat: -15.3500, lng: 166.8333 },
        desc: 'A ilha do Blue Hole e do naufrágio mais mergulhado do planeta.', pontos: [] },
    ]
  },

  // ─── NOVA CALEDÔNIA ────────────────────────────────────────────────────────
  {
    slug: 'nova-caledonia', nome: 'Nova Caledônia', coords: { lat: -21.3, lng: 165.5 },
    cidades: [
      { nome: 'Numea', coords: { lat: -22.2758, lng: 166.4580 },
        desc: 'A capital francesa do Pacífico, de marinas e praias.', pontos: [] },
      { nome: 'Ilha dos Pinheiros', coords: { lat: -22.6167, lng: 167.4833 },
        desc: 'Lagunas patrimônio da Unesco e pinheiros colunares.', pontos: [] },
    ]
  },

  // ══ ILHAS DO CARIBE (AMÉRICA CENTRAL) ══════════════════════════════════════

  // ─── CUBA ──────────────────────────────────────────────────────────────────
  {
    slug: 'cuba', nome: 'Cuba', coords: { lat: 21.5, lng: -79.5 },
    cidades: [
      { nome: 'Havana', coords: { lat: 23.1136, lng: -82.3666 },
        desc: 'A capital congelada nos anos 50, de carrões e música ao vivo.', pontos: [] },
      { nome: 'Varadero', coords: { lat: 23.1394, lng: -81.2814 },
        desc: 'A praia de 20 km de areia branca mais famosa do Caribe.', pontos: [] },
      { nome: 'Trinidad', coords: { lat: 21.8019, lng: -79.9844 },
        desc: 'A cidade colonial intacta, de ruas de pedra e cores vivas.', pontos: [] },
      { nome: 'Viñales', coords: { lat: 22.6160, lng: -83.7160 },
        desc: 'O vale de mogotes e das plantações de tabaco.', pontos: [] },
    ]
  },

  // ─── REPÚBLICA DOMINICANA ──────────────────────────────────────────────────
  {
    slug: 'republica-dominicana', nome: 'República Dominicana', coords: { lat: 18.7, lng: -70.2 },
    cidades: [
      { nome: 'Punta Cana', coords: { lat: 18.5601, lng: -68.3725 },
        desc: 'Os resorts à beira de praias de coqueiros mais procurados das Américas.', pontos: [] },
      { nome: 'Santo Domingo', coords: { lat: 18.4861, lng: -69.9312 },
        desc: 'A cidade colonial mais antiga do Novo Mundo.', pontos: [] },
      { nome: 'Samaná', coords: { lat: 19.2058, lng: -69.3360 },
        desc: 'A península das baleias jubarte e praias selvagens.', pontos: [] },
    ]
  },

  // ─── JAMAICA ───────────────────────────────────────────────────────────────
  {
    slug: 'jamaica', nome: 'Jamaica', coords: { lat: 18.1, lng: -77.3 },
    cidades: [
      { nome: 'Montego Bay', coords: { lat: 18.4762, lng: -77.8939 },
        desc: 'A capital turística, de praias e vida noturna animada.', pontos: [] },
      { nome: 'Negril', coords: { lat: 18.2683, lng: -78.3493 },
        desc: 'A Seven Mile Beach e o pôr do sol nos penhascos.', pontos: [] },
      { nome: 'Ocho Rios', coords: { lat: 18.4007, lng: -77.1031 },
        desc: 'As cataratas de Dunn River e a Jamaica das montanhas.', pontos: [] },
    ]
  },

  // ─── BAHAMAS ───────────────────────────────────────────────────────────────
  {
    slug: 'bahamas', nome: 'Bahamas', coords: { lat: 24.5, lng: -76.5 },
    cidades: [
      { nome: 'Nassau', coords: { lat: 25.0443, lng: -77.3504 },
        desc: 'A capital de fortes coloniais e resorts cor-de-rosa.', pontos: [] },
      { nome: 'Exuma', coords: { lat: 23.5333, lng: -75.8333 },
        desc: 'Os porcos nadadores e bancos de areia em mar transparente.', pontos: [] },
      { nome: 'Harbour Island', coords: { lat: 25.5000, lng: -76.6333 },
        desc: 'A praia de areia rosa mais famosa do mundo.', pontos: [] },
    ]
  },

  // ─── PORTO RICO ────────────────────────────────────────────────────────────
  {
    slug: 'porto-rico', nome: 'Porto Rico', coords: { lat: 18.2, lng: -66.4 },
    cidades: [
      { nome: 'San Juan', coords: { lat: 18.4655, lng: -66.1057 },
        desc: 'O Velho San Juan colonial, de ruas azuis e fortes espanhóis.', pontos: [] },
      { nome: 'El Yunque', coords: { lat: 18.2950, lng: -65.8000 },
        desc: 'A única floresta tropical do sistema de parques dos EUA.', pontos: [] },
      { nome: 'Culebra', coords: { lat: 18.3100, lng: -65.3000 },
        desc: 'A Playa Flamenco, eleita uma das melhores praias do planeta.', pontos: [] },
    ]
  },

  // ─── ARUBA ─────────────────────────────────────────────────────────────────
  {
    slug: 'aruba', nome: 'Aruba', coords: { lat: 12.52, lng: -69.97 },
    cidades: [
      { nome: 'Oranjestad', coords: { lat: 12.5240, lng: -70.0270 },
        desc: 'A capital colorida de fachadas holandesas.', pontos: [] },
      { nome: 'Eagle Beach', coords: { lat: 12.5527, lng: -70.0540 },
        desc: 'A praia dos divi-divi e areia branca eleita top do Caribe.', pontos: [] },
    ]
  },

  // ─── BARBADOS ──────────────────────────────────────────────────────────────
  {
    slug: 'barbados', nome: 'Barbados', coords: { lat: 13.19, lng: -59.54 },
    cidades: [
      { nome: 'Bridgetown', coords: { lat: 13.1132, lng: -59.5988 },
        desc: 'A capital georgiana, patrimônio da humanidade.', pontos: [] },
      { nome: 'Costa de Platina', coords: { lat: 13.1800, lng: -59.6400 },
        desc: 'A faixa oeste de praias calmas e resorts sofisticados.', pontos: [] },
    ]
  },

  // ─── ILHAS CAYMAN ──────────────────────────────────────────────────────────
  {
    slug: 'ilhas-cayman', nome: 'Ilhas Cayman', coords: { lat: 19.3, lng: -81.2 },
    cidades: [
      { nome: 'Grand Cayman', coords: { lat: 19.3133, lng: -81.2546 },
        desc: 'A Seven Mile Beach e o mergulho com arraias em Stingray City.', pontos: [] },
      { nome: 'Little Cayman', coords: { lat: 19.6833, lng: -80.0500 },
        desc: 'O Bloody Bay Wall, parede de mergulho lendária.', pontos: [] },
    ]
  },

];
