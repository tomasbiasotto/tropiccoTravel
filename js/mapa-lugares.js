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

];
