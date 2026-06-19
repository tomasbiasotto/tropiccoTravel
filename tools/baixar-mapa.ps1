# Baixa fotos curadas para cada destino do mapa (assets/mapa/<pais>/<slug>.jpg)
# Chaves de busca por SLUG (ASCII) para evitar problemas de encoding.
param([Parameter(Mandatory=$true)][string]$ApiKey, [switch]$DryRun, [switch]$Force)

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$proj = Split-Path $PSScriptRoot -Parent

function Slugify([string]$s){
  $n=$s.Normalize([Text.NormalizationForm]::FormD); $sb=New-Object Text.StringBuilder
  foreach($c in $n.ToCharArray()){ if([Globalization.CharUnicodeInfo]::GetUnicodeCategory($c) -ne [Globalization.UnicodeCategory]::NonSpacingMark){[void]$sb.Append($c)} }
  return ([Regex]::Replace($sb.ToString().ToLower(),'[^a-z0-9]+','-')).Trim('-')
}

$Q = @{
 'nova-york'='New York City skyline';'washington-d-c'='Washington DC Capitol building';'chicago'='Chicago skyline river';'nova-orleans'='New Orleans French Quarter';'miami'='Miami Beach art deco';'los-angeles'='Los Angeles Hollywood sign';'sao-francisco'='San Francisco Golden Gate Bridge';'seattle'='Seattle skyline Space Needle';'las-vegas'='Las Vegas Strip night';
 'grand-canyon'='Grand Canyon Arizona';'zion'='Zion National Park canyon';'death-valley'='Death Valley desert dunes';'yosemite'='Yosemite valley El Capitan';'yellowstone'='Yellowstone Grand Prismatic Spring';'glacier'='Glacier National Park Montana';'rocky-mountain'='Rocky Mountain National Park Colorado';'great-smoky-mountains'='Great Smoky Mountains misty';'acadia'='Acadia National Park Maine coast';'everglades'='Everglades Florida swamp';'hawaii-volcanoes'='Hawaii volcano lava';'denali'='Denali Alaska mountain';
 'joshua-tree'='Joshua Tree National Park';'redwood'='Redwood forest California';'olympic'='Olympic National Park rainforest';'mount-rainier'='Mount Rainier wildflowers';'crater-lake'='Crater Lake Oregon';'antelope-canyon'='Antelope Canyon Arizona';'horseshoe-bend'='Horseshoe Bend Arizona';'monument-valley'='Monument Valley';'bryce-canyon'='Bryce Canyon hoodoos';'capitol-reef'='Capitol Reef National Park';'arches'='Arches National Park Delicate Arch';'canyonlands'='Canyonlands National Park';'sequoia-kings-canyon'='Sequoia National Park giant trees';'grand-teton'='Grand Teton mountains';
 'rio-de-janeiro'='Rio de Janeiro Christ Redeemer Sugarloaf';'salvador'='Salvador Bahia Pelourinho';'sao-paulo'='Sao Paulo skyline';'brasilia'='Brasilia cathedral Niemeyer';'recife-olinda'='Olinda Pernambuco colorful';'manaus'='Amazon Theatre Manaus';'belem'='Belem Para Brazil';'florianopolis'='Florianopolis beach Brazil';'fortaleza'='Fortaleza Ceara beach';
 'fernando-de-noronha'='Fernando de Noronha aerial';'lencois-maranhenses'='Lencois Maranhenses lagoons';'chapada-diamantina'='Chapada Diamantina waterfall';'amazonia'='Amazon rainforest river aerial';'pantanal'='Pantanal jaguar wildlife';'cataratas-do-iguacu'='Iguazu Falls';'chapada-dos-veadeiros'='Chapada dos Veadeiros waterfall';'jalapao'='Jalapao Tocantins dunes';'bonito'='Bonito Brazil river snorkeling';'jericoacoara'='Jericoacoara dunes lagoon';'serra-gaucha'='Gramado Serra Gaucha Brazil';'paraty'='Paraty historic town Brazil';
 'cristo-redentor'='Christ the Redeemer Rio';'pao-de-acucar'='Sugarloaf Mountain Rio';'copacabana'='Copacabana beach Rio';'baia-do-sancho'='Baia do Sancho Fernando de Noronha';'baia-dos-porcos'='Baia dos Porcos Noronha';'garganta-do-diabo'='Iguazu Falls Devils Throat';
 'roma'='Rome Colosseum Italy';'florenca'='Florence Duomo Italy';'costa-amalfitana'='Amalfi Coast Positano';'coliseu'='Colosseum Rome';'vaticano'='Vatican St Peters Basilica';'fontana-di-trevi'='Trevi Fountain Rome';'duomo'='Florence Cathedral Duomo';'ponte-vecchio'='Ponte Vecchio Florence';'galeria-uffizi'='Uffizi Gallery Florence';'positano'='Positano Amalfi Coast';'ravello'='Ravello Amalfi Coast';
 'veneza'='Venice Grand Canal Italy';'milao'='Milan Duomo Italy';'napoles'='Naples Italy Vesuvius bay';'cinque-terre'='Cinque Terre Italy';'toscana'='Tuscany cypress hills';'sicilia'='Taormina Sicily Italy';'bolonha'='Bologna Italy porticoes';'lago-di-como'='Lake Como Italy';'verona'='Verona Italy arena';'pisa'='Pisa leaning tower';'pantheon'='Pantheon Rome interior';'forum-romano'='Roman Forum Rome';'praca-sao-marcos'='St Marks Square Venice';'canal-grande'='Grand Canal Venice';'ponte-di-rialto'='Rialto Bridge Venice';'capri'='Capri island Italy Faraglioni';'amalfi'='Amalfi town Italy coast';'duomo-de-milao'='Milan Cathedral Duomo';'galleria-vittorio-emanuele'='Galleria Vittorio Emanuele Milan';'pompeia'='Pompeii ruins Italy';'vesuvio'='Mount Vesuvius Naples';'vernazza'='Vernazza Cinque Terre';'manarola'='Manarola Cinque Terre';'siena'='Siena Tuscany Piazza del Campo';'san-gimignano'='San Gimignano Tuscany towers';'etna'='Mount Etna Sicily';'vale-dos-templos'='Valley of the Temples Agrigento';
 'toquio'='Tokyo skyline tower';'kyoto'='Kyoto temple Japan';'hokkaido'='Hokkaido Japan landscape';'shibuya'='Shibuya crossing Tokyo';'teamlab-planets'='teamLab Tokyo digital art';'senso-ji'='Sensoji temple Tokyo';'fushimi-inari'='Fushimi Inari torii gates';'kinkaku-ji'='Kinkakuji Golden Pavilion Kyoto';'arashiyama'='Arashiyama bamboo forest';
 'torres-del-paine'='Torres del Paine Patagonia';'el-calafate'='Perito Moreno glacier';'el-chalten'='Fitz Roy Patagonia';
 'marrakech'='Marrakech medina Morocco';'vale-do-atlas'='Atlas Mountains Morocco village';'saara'='Sahara desert Morocco dunes';'essaouira'='Essaouira Morocco harbor';
 'cidade-do-cabo'='Cape Town Table Mountain';'garden-route'='Garden Route South Africa coast';'sabi-sands'='safari lion South Africa Kruger';
 'arenal'='Arenal volcano Costa Rica';'monteverde'='Monteverde cloud forest';'manuel-antonio'='Manuel Antonio Costa Rica beach';
 'atenas'='Acropolis Athens Greece';'santorini'='Santorini Oia sunset';'creta'='Crete Greece beach';
 'bangkok'='Bangkok Grand Palace temple';'chiang-mai'='Chiang Mai temple Thailand';'krabi'='Krabi Railay Beach Thailand';
 'lisboa'='Lisbon tram Alfama';'sintra'='Sintra Pena Palace';'alentejo'='Alentejo Portugal landscape';'douro'='Douro Valley vineyards Portugal';
 'zermatt'='Matterhorn Zermatt';'lucerna'='Lucerne Switzerland chapel bridge';'interlaken'='Lauterbrunnen Switzerland';
 'osaka'='Osaka Japan night skyline';'dotonbori'='Dotonbori Osaka neon';'castelo-de-osaka'='Osaka Castle';'monte-fuji'='Mount Fuji Japan';'lago-kawaguchi'='Lake Kawaguchi Mount Fuji';'hakone'='Hakone Mount Fuji';'hiroshima'='Hiroshima Peace Memorial';'miyajima'='Miyajima floating torii gate';'nara'='Nara deer park Japan';'todai-ji'='Todaiji temple Nara';'niseko'='Niseko Japan ski powder';
 'perito-moreno'='Perito Moreno glacier Argentina';'monte-fitz-roy'='Fitz Roy Patagonia';'laguna-de-los-tres'='Laguna de los Tres Fitz Roy';'ushuaia'='Ushuaia Argentina mountains';'canal-beagle'='Beagle Channel Ushuaia';'bariloche'='Bariloche Argentina lake';'cerro-catedral'='Cerro Catedral Bariloche ski';
 'jemaa-el-fna'='Jemaa el-Fna Marrakech night';'jardim-majorelle'='Majorelle Garden Marrakech';'fes'='Fes Morocco medina';'curtumes-de-fes'='Fes tannery Morocco';'chefchaouen'='Chefchaouen blue city Morocco';'ait-ben-haddou'='Ait Ben Haddou Morocco';'erg-chebbi'='Erg Chebbi Merzouga dunes';'casablanca'='Casablanca Hassan II Mosque';'mesquita-hassan-ii'='Hassan II Mosque Casablanca';
 'table-mountain'='Table Mountain Cape Town';'cabo-da-boa-esperanca'='Cape of Good Hope South Africa';'stellenbosch'='Stellenbosch winelands South Africa';'parque-kruger'='Kruger National Park elephant';'joanesburgo'='Johannesburg skyline';
 'tortuguero'='Tortuguero Costa Rica canals';'corcovado'='Corcovado rainforest Costa Rica';'tamarindo'='Tamarindo beach Costa Rica sunset';'rio-celeste'='Rio Celeste waterfall Costa Rica';
 'acropole'='Acropolis Parthenon Athens';'oia'='Oia Santorini blue domes';'lagoa-de-balos'='Balos Lagoon Crete';'mykonos'='Mykonos windmills Greece';'meteora'='Meteora monasteries Greece';'delfos'='Delphi Greece ruins';'rodes'='Rhodes old town Greece';
 'grande-palacio'='Grand Palace Bangkok';'wat-arun'='Wat Arun Bangkok temple';'doi-suthep'='Doi Suthep Chiang Mai';'chiang-rai'='Chiang Rai white temple';'templo-branco'='White Temple Chiang Rai';'ayutthaya'='Ayutthaya Thailand ruins';'railay'='Railay Beach Krabi';'ilhas-phi-phi'='Phi Phi Islands Thailand';'phuket'='Phuket Thailand beach';'koh-samui'='Koh Samui Thailand beach';
 'torre-de-belem'='Belem Tower Lisbon';'alfama'='Alfama Lisbon tram';'palacio-da-pena'='Pena Palace Sintra';'porto'='Porto Portugal Ribeira Douro';'ribeira'='Porto Ribeira Dom Luis bridge';'algarve'='Algarve Portugal cliffs beach';'gruta-de-benagil'='Benagil cave Algarve';'obidos'='Obidos Portugal medieval village';'madeira'='Madeira island Portugal cliffs';'acores'='Azores Sao Miguel crater lake';
 'matterhorn'='Matterhorn Zermatt Switzerland';'lauterbrunnen'='Lauterbrunnen waterfall Switzerland';'jungfraujoch'='Jungfraujoch Switzerland snow';'grindelwald'='Grindelwald Switzerland Eiger';'genebra'='Geneva jet eau Switzerland';'zurique'='Zurich Switzerland lake';'montreux'='Montreux Lake Geneva Switzerland';'castelo-de-chillon'='Chillon Castle Montreux';
 'paris'='Paris Eiffel Tower';'torre-eiffel'='Eiffel Tower Paris';'louvre'='Louvre Museum Paris';'notre-dame'='Notre Dame Cathedral Paris';'versalhes'='Versailles Palace France';'nice'='Nice French Riviera';'provence'='Provence lavender fields France';'mont-saint-michel'='Mont Saint Michel France';'bordeaux'='Bordeaux France city';'chamonix'='Chamonix Mont Blanc France';'vale-do-loire'='Loire Valley castle France';
 'barcelona'='Barcelona Spain Sagrada Familia';'sagrada-familia'='Sagrada Familia Barcelona';'park-guell'='Park Guell Barcelona';'madri'='Madrid Spain Gran Via';'sevilha'='Seville Spain Plaza de Espana';'alcazar-de-sevilha'='Alcazar Seville';'granada'='Granada Alhambra Spain';'alhambra'='Alhambra Granada';'ibiza'='Ibiza Spain beach';'maiorca'='Mallorca Spain cove beach';'san-sebastian'='San Sebastian Spain beach';'toledo'='Toledo Spain skyline';
 'londres'='London skyline Big Ben';'big-ben'='Big Ben London';'london-eye'='London Eye';'tower-bridge'='Tower Bridge London';'edimburgo'='Edinburgh Scotland castle';'stonehenge'='Stonehenge England';'bath'='Bath England Roman baths';'highlands'='Scottish Highlands';'oxford'='Oxford University England';
 'berlim'='Berlin Brandenburg Gate';'portao-de-brandemburgo'='Brandenburg Gate Berlin';'munique'='Munich Germany Marienplatz';'neuschwanstein'='Neuschwanstein Castle Germany';'floresta-negra'='Black Forest Germany';'hamburgo'='Hamburg Germany harbor';'colonia'='Cologne Cathedral Germany';'vale-do-reno'='Rhine Valley castle Germany';
 'viena'='Vienna Austria palace';'palacio-de-schonbrunn'='Schonbrunn Palace Vienna';'salzburgo'='Salzburg Austria';'hallstatt'='Hallstatt Austria lake village';'innsbruck'='Innsbruck Austria Alps';'tirol'='Tyrol Austria Alps';
 'amsterda'='Amsterdam canals';'museu-van-gogh'='Van Gogh Museum Amsterdam';'keukenhof'='Keukenhof tulips Netherlands';'roterda'='Rotterdam architecture';'giethoorn'='Giethoorn Netherlands canals';
 'dubrovnik'='Dubrovnik Croatia walls';'split'='Split Croatia';'plitvice'='Plitvice Lakes Croatia';'hvar'='Hvar Croatia island';'zagreb'='Zagreb Croatia';
 'istambul'='Istanbul Turkey Hagia Sophia';'hagia-sophia'='Hagia Sophia Istanbul';'mesquita-azul'='Blue Mosque Istanbul';'capadocia'='Cappadocia balloons Turkey';'pamukkale'='Pamukkale Turkey terraces';'efeso'='Ephesus Turkey ruins';'antalia'='Antalya Turkey coast';
 'cairo'='Cairo Egypt city';'piramides-de-gize'='Pyramids of Giza Egypt';'esfinge'='Sphinx Giza Egypt';'luxor'='Luxor temple Egypt';'vale-dos-reis'='Valley of the Kings Egypt';'aswan'='Aswan Nile Egypt';'abu-simbel'='Abu Simbel Egypt';'hurghada'='Hurghada Red Sea Egypt';
 'dubai'='Dubai skyline Burj Khalifa';'burj-khalifa'='Burj Khalifa Dubai';'palm-jumeirah'='Palm Jumeirah Dubai';'abu-dhabi'='Abu Dhabi skyline';'mesquita-sheikh-zayed'='Sheikh Zayed Mosque Abu Dhabi';
 'agra'='Agra Taj Mahal India';'taj-mahal'='Taj Mahal India';'jaipur'='Jaipur India palace pink';'nova-delhi'='New Delhi India Gate';'varanasi'='Varanasi Ganges India';'kerala'='Kerala backwaters houseboat';'goa'='Goa India beach';
 'pequim'='Beijing Forbidden City';'cidade-proibida'='Forbidden City Beijing';'grande-muralha'='Great Wall of China';'xangai'='Shanghai skyline Bund';'guilin'='Guilin Li river China';'xi-an'='Xian Terracotta Army';'zhangjiajie'='Zhangjiajie China pillars';'chengdu'='Chengdu panda China';
 'cidade-do-mexico'='Mexico City skyline';'cancun'='Cancun beach Mexico';'chichen-itza'='Chichen Itza pyramid';'tulum'='Tulum ruins beach Mexico';'oaxaca'='Oaxaca Mexico colorful';'guanajuato'='Guanajuato Mexico colorful';'cabo-san-lucas'='Cabo San Lucas arch Mexico';
 'banff'='Banff Moraine Lake Canada';'lago-louise'='Lake Louise Canada';'vancouver'='Vancouver Canada skyline';'toronto'='Toronto CN Tower';'cataratas-do-niagara'='Niagara Falls';'quebec'='Quebec City Canada';'whistler'='Whistler Canada ski';
 'machu-picchu'='Machu Picchu Peru';'cusco'='Cusco Peru';'vale-sagrado'='Sacred Valley Peru';'lima'='Lima Peru coast';'lago-titicaca'='Lake Titicaca Peru uros';'montanha-colorida'='Rainbow Mountain Peru';'arequipa'='Arequipa Peru';
 'buenos-aires'='Buenos Aires Argentina';'mendoza'='Mendoza Argentina vineyard Andes';'salta'='Salta Argentina mountains';'peninsula-valdes'='Peninsula Valdes whale Argentina';'cordoba'='Cordoba Argentina';
 'hanoi'='Hanoi Vietnam old quarter';'baia-de-ha-long'='Ha Long Bay Vietnam';'hoi-an'='Hoi An lanterns Vietnam';'ho-chi-minh'='Ho Chi Minh City Vietnam';'sapa'='Sapa rice terraces Vietnam';'hue'='Hue Vietnam imperial';
 'bali'='Bali Indonesia temple rice terrace';'ubud'='Ubud Bali rice terraces';'tanah-lot'='Tanah Lot Bali temple';'komodo'='Komodo island Indonesia';'borobudur'='Borobudur temple Indonesia';'monte-bromo'='Mount Bromo Indonesia sunrise';'ilhas-gili'='Gili Islands Indonesia';
 'marina-bay-sands'='Marina Bay Sands Singapore';'gardens-by-the-bay'='Gardens by the Bay Singapore';'sentosa'='Sentosa Singapore beach';'chinatown'='Singapore Chinatown';
 'seul'='Seoul South Korea skyline';'gyeongbokgung'='Gyeongbokgung Palace Seoul';'busan'='Busan South Korea beach';'jeju'='Jeju Island South Korea';'gyeongju'='Gyeongju South Korea temple';
 'sydney'='Sydney Opera House harbour';'opera-de-sydney'='Sydney Opera House';'bondi-beach'='Bondi Beach Sydney';'cairns'='Great Barrier Reef aerial Australia';'uluru'='Uluru Ayers Rock sunset';'melbourne'='Melbourne Australia laneway';'whitsundays'='Whitehaven Beach Whitsundays Australia';
 'queenstown'='Queenstown New Zealand lake mountains';'milford-sound'='Milford Sound New Zealand';'auckland'='Auckland New Zealand skyline';'rotorua'='Rotorua New Zealand geyser';'hobbiton'='Hobbiton movie set New Zealand';
 'reykjavik'='Reykjavik Iceland city colorful';'circulo-dourado'='Gullfoss waterfall Iceland';'lagoa-azul'='Blue Lagoon Iceland';'jokulsarlon'='Jokulsarlon glacier lagoon Iceland';'vik'='Vik Iceland black sand beach';
 'oslo'='Oslo Norway opera fjord';'bergen'='Bergen Norway Bryggen harbour';'geirangerfjord'='Geirangerfjord Norway';'lofoten'='Lofoten Islands Norway';'tromso'='Tromso Norway northern lights';
 'estocolmo'='Stockholm Sweden Gamla Stan old town';'gotemburgo'='Gothenburg Sweden canal';'laponia'='Swedish Lapland aurora ice hotel';'visby'='Visby Gotland Sweden medieval';
 'dublin'='Dublin Ireland Temple Bar';'penhascos-de-moher'='Cliffs of Moher Ireland';'galway'='Galway Ireland street';'anel-de-kerry'='Ring of Kerry Ireland landscape';
 'bruxelas'='Brussels Grand Place Belgium';'bruges'='Bruges Belgium canal';'gante'='Ghent Belgium canal';'antuerpia'='Antwerp Belgium station';
 'praga'='Prague old town astronomical clock';'ponte-carlos'='Charles Bridge Prague';'castelo-de-praga'='Prague Castle skyline';'cesky-krumlov'='Cesky Krumlov Czech Republic';'karlovy-vary'='Karlovy Vary Czech spa colonnade';
 'budapeste'='Budapest Hungary Danube parliament night';'parlamento'='Hungarian Parliament Budapest';'banhos-szechenyi'='Szechenyi thermal bath Budapest';'eger'='Eger Hungary castle';'lago-balaton'='Lake Balaton Hungary';
 'cracovia'='Krakow Poland old town square';'varsovia'='Warsaw Poland old town colorful';'gdansk'='Gdansk Poland colorful facades';'wieliczka'='Wieliczka Salt Mine Poland';'zakopane'='Zakopane Poland Tatra mountains';
 'petra'='Petra Jordan Treasury';'o-tesouro'='Petra Treasury Al Khazneh canyon';'wadi-rum'='Wadi Rum desert Jordan';'ama'='Amman Jordan citadel';'mar-morto'='Dead Sea float Jordan';
 'jerusalem'='Jerusalem old city dome of the rock';'muro-das-lamentacoes'='Western Wall Jerusalem';'cidade-velha'='Jerusalem old city alley';'tel-aviv'='Tel Aviv Israel beach skyline';'mar-da-galileia'='Sea of Galilee Israel';'massada'='Masada fortress Israel desert';
 'kandy'='Kandy Sri Lanka temple lake';'sigiriya'='Sigiriya rock fortress Sri Lanka';'ella'='Ella Sri Lanka nine arch bridge tea';'galle'='Galle fort Sri Lanka';'yala'='Yala leopard safari Sri Lanka';
 'kathmandu'='Kathmandu Nepal temple stupa';'pokhara'='Pokhara Nepal lake Annapurna';'everest'='Mount Everest Himalaya Nepal';'chitwan'='Chitwan Nepal rhino safari';
 'siem-reap'='Angkor Wat Siem Reap Cambodia';'angkor-wat'='Angkor Wat sunrise Cambodia';'ta-prohm'='Ta Prohm temple roots Cambodia';'phnom-penh'='Phnom Penh Cambodia royal palace';'battambang'='Battambang Cambodia bamboo train';
 'el-nido'='El Nido Palawan Philippines lagoon';'boracay'='Boracay white beach Philippines';'bohol'='Chocolate Hills Bohol Philippines';'manila'='Manila Philippines Intramuros';'banaue'='Banaue rice terraces Philippines';
 'kuala-lumpur'='Kuala Lumpur Petronas Towers Malaysia';'torres-petronas'='Petronas Towers Kuala Lumpur night';'penang'='George Town Penang Malaysia street art';'langkawi'='Langkawi Malaysia sky bridge beach';'borneu'='Borneo Malaysia orangutan rainforest';
 'masai-mara'='Masai Mara Kenya safari migration';'nairobi'='Nairobi Kenya giraffe skyline';'amboseli'='Amboseli elephants Kilimanjaro Kenya';'diani-beach'='Diani Beach Kenya turquoise';
 'serengeti'='Serengeti Tanzania wildebeest migration';'kilimanjaro'='Mount Kilimanjaro Tanzania';'zanzibar'='Zanzibar beach Stone Town';'ngorongoro'='Ngorongoro Crater Tanzania safari';
 'cartagena'='Cartagena Colombia colorful colonial';'bogota'='Bogota Colombia Monserrate';'medellin'='Medellin Colombia comuna 13';'eixo-cafeeiro'='Cocora Valley Salento Colombia palm';'tayrona'='Tayrona National Park Colombia beach';
 'santiago'='Santiago Chile Andes skyline';'atacama'='Atacama Desert Chile San Pedro';'valparaiso'='Valparaiso Chile colorful hills';'ilha-de-pascoa'='Easter Island moai statues';
 'quito'='Quito Ecuador old town';'galapagos'='Galapagos Islands wildlife';'banos'='Banos Ecuador waterfall swing';'cuenca'='Cuenca Ecuador blue domes cathedral';
 'salar-de-uyuni'='Salar de Uyuni Bolivia mirror reflection';'la-paz'='La Paz Bolivia city canyon';'isla-del-sol'='Isla del Sol Lake Titicaca Bolivia';'sucre'='Sucre Bolivia white city';
 'montevideu'='Montevideo Uruguay rambla coast';'punta-del-este'='Punta del Este Uruguay hand sculpture';'colonia-do-sacramento'='Colonia del Sacramento Uruguay street';'jose-ignacio'='Jose Ignacio Uruguay beach lighthouse';
 'assuncao'='Asuncion Paraguay city';'missoes-jesuiticas'='Trinidad Jesuit ruins Paraguay';'encarnacion'='Encarnacion Paraguay river beach';
 'salto-angel'='Angel Falls Venezuela tepui';'caracas'='Caracas Venezuela Avila mountain';'gran-sabana'='Mount Roraima Gran Sabana Venezuela';'los-roques'='Los Roques Venezuela archipelago';
 'georgetown'='Georgetown Guyana colonial wooden';'kaieteur'='Kaieteur Falls Guyana jungle';
 'paramaribo'='Paramaribo Suriname wooden architecture';'brownsberg'='Brownsberg Suriname rainforest';
 'cidade-do-panama'='Panama City skyline canal';'canal-do-panama'='Panama Canal ship locks';'bocas-del-toro'='Bocas del Toro Panama overwater';'boquete'='Boquete Panama highlands coffee';
 'antigua'='Antigua Guatemala volcano colonial street';'tikal'='Tikal Maya temple jungle Guatemala';'lago-atitlan'='Lake Atitlan Guatemala volcano';'cidade-da-guatemala'='Guatemala City';
 'great-blue-hole'='Great Blue Hole Belize aerial';'cayo-ambergris'='Ambergris Caye Belize barrier reef';'caracol'='Caracol Maya ruins Belize jungle';'placencia'='Placencia Belize beach';
 'nicaragua/granada'='Granada Nicaragua colonial lake colorful';'leon'='Leon Nicaragua cathedral';'ometepe'='Ometepe island volcano Nicaragua';'san-juan-del-sur'='San Juan del Sur Nicaragua beach sunset';
 'roatan'='Roatan Honduras island reef';'copan'='Copan Maya ruins Honduras stelae';'tegucigalpa'='Tegucigalpa Honduras city mountains';
 'san-salvador'='San Salvador El Salvador volcano';'rota-das-flores'='Ruta de las Flores El Salvador village';'el-tunco'='El Tunco El Salvador surf black sand beach';'suchitoto'='Suchitoto El Salvador colonial';
 'ilhas-mamanuca'='Mamanuca Islands Fiji aerial';'yasawa'='Yasawa Islands Fiji beach';'taveuni'='Taveuni Fiji waterfall rainforest';'suva'='Suva Fiji capital';
 'bora-bora'='Bora Bora overwater bungalow lagoon';'tahiti'='Tahiti French Polynesia mountains coast';'moorea'='Moorea French Polynesia bay';'rangiroa'='Rangiroa atoll lagoon diving';
 'rarotonga'='Rarotonga Cook Islands lagoon';'aitutaki'='Aitutaki Cook Islands lagoon aerial';
 'apia'='Apia Samoa coast';'to-sua'='To Sua Ocean Trench Samoa';'lalomanu'='Lalomanu Beach Samoa';
 'port-vila'='Port Vila Vanuatu lagoon';'vulcao-yasur'='Mount Yasur volcano Vanuatu eruption';'espiritu-santo'='Espiritu Santo Vanuatu blue hole';
 'numea'='Noumea New Caledonia beach lagoon';'ilha-dos-pinheiros'='Isle of Pines New Caledonia lagoon';
 'havana'='Havana Cuba vintage car malecon';'varadero'='Varadero Cuba beach turquoise';'trinidad'='Trinidad Cuba colonial colorful';'vinales'='Vinales Cuba tobacco valley mogotes';
 'punta-cana'='Punta Cana Dominican Republic beach palm resort';'santo-domingo'='Santo Domingo colonial zone';'samana'='Samana Dominican Republic beach whales';
 'montego-bay'='Montego Bay Jamaica beach';'negril'='Negril Jamaica seven mile beach cliff';'ocho-rios'='Dunns River Falls Ocho Rios Jamaica';
 'nassau'='Nassau Bahamas beach resort';'exuma'='Exuma Bahamas swimming pigs sandbank';'harbour-island'='Harbour Island Bahamas pink sand beach';
 'san-juan'='Old San Juan Puerto Rico colorful streets';'el-yunque'='El Yunque rainforest Puerto Rico';'culebra'='Flamenco Beach Culebra Puerto Rico';
 'oranjestad'='Oranjestad Aruba colorful dutch facades';'eagle-beach'='Eagle Beach Aruba divi divi tree';
 'bridgetown'='Bridgetown Barbados coast';'costa-de-platina'='Barbados platinum coast beach';
 'grand-cayman'='Seven Mile Beach Grand Cayman';'little-cayman'='Little Cayman Bloody Bay diving';
 'porto-de-galinhas'='Porto de Galinhas natural pools jangada Brazil';'maragogi'='Maragogi Alagoas beach turquoise Brazil';'maceio'='Maceio Alagoas beach jangada';'praia-de-pipa'='Pipa Beach Rio Grande do Norte cliffs';'morro-de-sao-paulo'='Morro de Sao Paulo Bahia beach island';'praia-do-forte'='Praia do Forte Bahia coconut beach';'trancoso'='Trancoso Bahia Quadrado beach';'sao-miguel-dos-milagres'='Sao Miguel dos Milagres Alagoas beach';'praia-dos-carneiros'='Praia dos Carneiros church beach Pernambuco';'genipabu'='Genipabu sand dunes buggy Natal Brazil';'canoa-quebrada'='Canoa Quebrada Ceara red cliffs beach';'barra-grande'='Barra Grande Marau peninsula beach Bahia'
}

$lines = [IO.File]::ReadAllText((Join-Path $proj 'js\mapa-lugares.js'),[Text.Encoding]::UTF8) -split "`n"
$cur=''; $pairs=@()
foreach($ln in $lines){
  $ms=[Regex]::Match($ln,"slug:\s*'([^']+)'"); if($ms.Success){$cur=$ms.Groups[1].Value;continue}
  $mn=[Regex]::Match($ln,"nome:\s*'([^']+)'"); if($mn.Success -and $cur){ $pairs+=[pscustomobject]@{pais=$cur;nome=$mn.Groups[1].Value} }
}

function Get-PexelsImg([string]$q){
  $u="https://api.pexels.com/v1/search?query="+[uri]::EscapeDataString($q)+"&orientation=landscape&per_page=1"
  $r=Invoke-RestMethod -Uri $u -Headers @{Authorization=$ApiKey} -TimeoutSec 30
  if($r.photos -and $r.photos.Count -ge 1){return $r.photos[0].src.medium}; return $null
}

if($DryRun){
  Write-Host "Q.Count = $($Q.Count) | tipo = $($Q.GetType().Name) | pares = $($pairs.Count)"
  $hit=0; $miss=@()
  foreach($p in $pairs){ $slug=Slugify $p.nome; if($Q["$($p.pais)/$slug"] -or $Q[$slug]){$hit++}else{$miss+=$slug} }
  Write-Host "Casam: $hit | Nao casam: $($miss.Count)"
  if($miss.Count){ Write-Host ("Faltando no Q: " + ($miss -join ', ')) }
  return
}

$ok=0;$semQuery=0;$fail=@()
foreach($p in $pairs){
  $slug = Slugify $p.nome
  $dir=Join-Path $proj "assets\mapa\$($p.pais)"; New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $out=Join-Path $dir ($slug+".jpg")
  if((Test-Path $out) -and -not $Force){ continue }
  $query = $Q["$($p.pais)/$slug"]; if(-not $query){ $query = $Q[$slug] }; if(-not $query){ $query = $p.nome; $semQuery++ }
  try{ $img=Get-PexelsImg $query; if($img){(New-Object Net.WebClient).DownloadFile($img,$out);$ok++}else{$fail+=$slug} }
  catch{ $fail+=$slug }
  Start-Sleep -Milliseconds 250
}
Write-Host "Atualizadas: $ok / $($pairs.Count)  (sem query curada: $semQuery)"
if($fail.Count){ Write-Host ("Falhas: " + ($fail -join ', ')) }
