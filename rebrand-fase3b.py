#!/usr/bin/env python3
# Fase 3b: reescreve narrativa completa das 12 paginas de destino.
# Tom: voce (singular, intimo), publico adulto sofisticado, sem familia como protagonista.
# Substitui: meta desc, OG, JSON-LD, hero subtitle, angulo, regions, day, diff, perfil, CTA.

import os, re

ROOT = os.path.dirname(os.path.abspath(__file__))

DESTINOS = {
    "italia": {
        "meta_desc": "Toscana, Costa Amalfitana e Roma com curadoria Tropicco. Vinhedos, costa mediterranea e cidade-aula em uma viagem arquitetada com tempo, lentidao e detalhe.",
        "og_desc": "A Italia que se absorve sem pressa.",
        "jsonld_desc": "Toscana, Costa Amalfitana e Roma com curadoria sob medida. Agroturismo selecionado, cooking class em fazenda, barco privado e reservas que nao estao online.",
        "hero_sub": "A Itália que se absorve sem pressa.",
        "angle": "Itália é o destino onde quase tudo conspira a favor de quem viaja devagar. Distâncias curtas entre paisagens distintas. Comida que dispensa explicação. Cultura que se absorve sem esforço — você não precisa procurar a Itália em museus; ela acontece quando para num café em frente ao Duomo, quando o vinho da casa chega sem você ter pedido, quando o caseiro da fazenda te ensina o nome de cada erva do quintal. Para quem está encontrando a Europa pela primeira vez, é a porta de entrada de mais alta gratificação e mais baixo atrito. Para quem volta, é o destino em que sempre falta um vilarejo.",
        "regions_h2": "Onde a Itália acontece de verdade.",
        "regions": [
            ("Toscana", "O ritmo da fazenda", "Base em vila de pedra entre vinhedos. Piscina, cozinha aberta, jantares longos. Os cachorros do caseiro circulam pela varanda. Daqui partem os dias para Siena, Florença e cidades menores que ninguém comenta — Pienza, Montalcino, Cortona — onde se descobre o que é uma praça italiana ao entardecer."),
            ("Costa Amalfitana", "O Mediterrâneo de verdade", "Casa de penhasco em Praiano ou Ravello — não Positano, lotada demais para o estilo Tropicco. Dia de barco privado entre Capri e a costa, com grutas e restaurantes só acessíveis pelo mar. Gelato em Amalfi à tarde, jantar com vista sobre o golfo enquanto o céu vai do azul ao rosa."),
            ("Roma", "A cidade-aula", "Três dias finais. Não a Roma de checklist; a Roma de bairros: Trastevere, Monti, Testaccio. Coliseu com guia que transforma ruína em narrativa. Pizza de pé na via, gelato no Giolitti, tarde no Villa Borghese — uma Roma que se anda devagar e se entende com calma."),
        ],
        "day_h2": "Na Toscana, sem relógio.",
        "day": "Você acorda tarde. Café no terraço, pão recém-trazido pelo caseiro. Manhã na cooking class — enrolar tortelli é estranhamente meditativo, e descobrir isso é parte do ponto. Almoço na própria fazenda, vinho da casa, sesta. Tarde numa cidade pequena: não Florença — Pienza, Montalcino. Compra de queijo, foto na praça, gelato. Volta para a piscina antes do pôr do sol. Jantar de novo em casa. Ninguém olha o relógio. Isso é o ponto.",
        "diff": [
            ("Agroturismo selecionado pessoalmente", "Não Booking, não TripAdvisor. Casas com história, donos presentes, comida feita ali na hora. Visitamos antes de indicar."),
            ("Driver-guia bilíngue entre regiões", "Ninguém aluga carro, ninguém estaciona em vila italiana sob sol de meio-dia. Motorista que conhece os atalhos e as paragens certas de almoço."),
            ("Cooking class em fazenda real", "Cozinheira italiana ensinando na própria cozinha, não escola turística com estagiária. Ingredientes do quintal, vinho da casa."),
            ("Barco privado de meio-dia na Costa Amalfitana", "Skipper local que conhece as grutas certas e os horários sem multidão. Paradas em enseadas que não estão em nenhum guia."),
            ("Reservas em restaurantes que não aceitam reserva online", "Só por contato direto. Lugares pequenos, donos que escolhem quem entra. A gente tem esse contato."),
        ],
        "perfil": "Para quem busca uma Europa absorvida com tempo. Funciona excepcionalmente bem como primeira viagem ao continente — e como reencontro pra quem já passou pelos clichês.",
        "cta_h2": "Quer arquitetar essa Itália?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "japao": {
        "meta_desc": "Tokio, Kyoto e Hakone com curadoria Tropicco. Modernidade absurda e tradicao milenar em uma viagem arquitetada — ryokan, workshop com mestre e reservas que nao abrem online.",
        "og_desc": "O pais que se absorve em silencio.",
        "jsonld_desc": "Toquio, Kyoto e Hakone ou Hokkaido com curadoria sob medida. Ryokan tradicional, ingressos teamLab/Ghibli, driver-guia bilingue e restaurantes que so abrem porta com nome japones.",
        "hero_sub": "O país que se absorve em silêncio.",
        "angle": "Japão é o destino que mais transforma. Não pelo que tem para ver — também por isso —, mas pelo silêncio depois. Quem volta, volta diferente. A modernidade absurda de Tóquio convive com a paciência milenar de Kyoto sem contradição. Trens chegam na hora exata, banheiros surpreendem, ninguém grita. É o choque cultural mais formativo possível em duas semanas — e o mais delicado de organizar sem ajuda.",
        "regions_h2": "Onde o Japão acontece de verdade.",
        "regions": [
            ("Tóquio", "A cidade-organismo", "Quatro a cinco dias. Hotel em Aoyama ou Roppongi, não Shinjuku turistão. Bairros explorados a pé: Shimokitazawa para o vintage, Akihabara para o submundo otaku, Shibuya para o caos calculado. teamLab Planets em horário sem fila. Jantar de tonkatsu em casa pequena de bairro."),
            ("Kyoto", "A desaceleração", "Quatro dias. Ryokan tradicional duas noites, hotel boutique o resto. Fushimi Inari ao amanhecer — antes das sete da manhã, ainda há névoa entre os mil torii laranjas e nenhum turista. Workshop de caligrafia ou cerimônia do chá com mestre. Tarde de bicicleta pelo rio Kamo."),
            ("Hakone ou Hokkaido", "A natureza", "Três a quatro dias. Hakone para versão curta: ryokan com onsen privativo, vista do Fuji em dia limpo. Hokkaido para perfis aventureiros — Sapporo + Niseko (esqui no inverno) ou Furano (lavanda no verão)."),
        ],
        "day_h2": "Em Kyoto, ao amanhecer.",
        "day": "Você acorda às seis — o jet lag ajuda. Caminhada até Fushimi Inari quando ainda há névoa entre os torii. Sem turistas, só você e o silêncio molhado. Café da manhã japonês de volta no ryokan: arroz, peixe grelhado, missô, ovo cru. Você experimenta tudo, porque ninguém precisa saber. Manhã livre. À tarde, oficina de origami com mestre numa sala de tatami. Jantar em izakaya escondida numa ruela de Pontocho. Caminhada noturna pela ponte Sanjo, lanternas refletindo na água do rio.",
        "diff": [
            ("Ryokan tradicional selecionado", "Não chain. Casa familiar com kaiseki — refeições de oito etapas onde cada prato tem sua estação. A experiência mais memorável da viagem, geralmente."),
            ("Reservas em teamLab, Ghibli Museum e Kabuki", "Ingressos que abrem em janelas curtas semanas antes do mês — feitos com hora marcada por nosso parceiro local em pessoa."),
            ("Driver-guia bilíngue + JR Pass otimizado", "Transfer aeroporto-hotel com guia, depois mapa privado de bairros e JR Pass calibrado por trecho. Não pacote padrão de agência."),
            ("Workshop com artesão real", "Caligrafia, origami ou fabricação de mochi com mestre na própria sala de tatami. Não experiência turística genérica em hotel."),
            ("Restaurantes que não aceitam estrangeiros sem reserva por nome japonês", "Existem dezenas. A gente tem o contato — a porta abre."),
        ],
        "perfil": "Para quem busca silêncio, ritual e densidade cultural. Funciona melhor para quem viaja com paciência — Japão recompensa quem desacelera.",
        "cta_h2": "Quer arquitetar o Japão?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "patagonia": {
        "meta_desc": "Torres del Paine, El Calafate e El Chalten com curadoria Tropicco. Aventura controlada em lodges premium dentro do parque, com guias bilingues e logistica sem furo.",
        "og_desc": "Fim de mundo, com cama macia esperando.",
        "jsonld_desc": "Torres del Paine, El Calafate e El Chalten com curadoria sob medida. Lodges premium dentro do parque, guias certificados, vista das torres da janela do quarto.",
        "hero_sub": "Fim de mundo, com cama macia esperando.",
        "angle": "Patagônia é o destino onde a escala da paisagem reorganiza o que você considera grande. Picos de granito que parecem desenhos, geleiras que estalam ao se desprender, vento que define o ritmo do dia. Não é destino de relax — é destino de impacto. Mas com curadoria certa, o impacto vem com lodge premium dentro do parque, jantar quente na chegada e banho quente esperando depois da trilha. Isso é Tropicco aqui: aventura sem rusticidade.",
        "regions_h2": "Onde a Patagônia acontece de verdade.",
        "regions": [
            ("Torres del Paine", "O parque", "Quatro a cinco dias num lodge dentro do parque (Explora, Tierra ou Awasi) — não nos hotéis fora dos limites, que obrigam horas de transfer todo dia. Trilhas calibradas pelo seu nível, do mirador das torres ao base camp. Jantar comunal com outros hóspedes, vinho chileno, lareira."),
            ("El Calafate", "A geleira", "Dois dias para o Perito Moreno — uma das únicas geleiras do mundo que ainda avança. Caminhada com crampons sobre o gelo (sim, é seguro com guia certificado), navegação até a face frontal, almoço numa estância vizinha com cordeiro patagônico ao palo."),
            ("El Chaltén", "O trekking", "Dois dias para a base do Fitz Roy — o pico mais fotografado da Patagônia argentina. Trilha de 8h ida-volta para a Laguna de los Tres, com vista que justifica o nome. Volta para cervejaria local, descanso na pousada boutique."),
        ],
        "day_h2": "Nas Torres del Paine, sem aviso prévio.",
        "day": "Você acorda com o vento. Café no lodge — o tempo vai mudar três vezes hoje, isso é certeza. Briefing com o guia: trilha base de 6h, com plano B se virar tempestade. Saída às oito. Primeira hora de subida silenciosa, vento contra. Segunda hora, sol. Terceira, vista das torres aparecendo entre nuvens — e desaparecendo, e aparecendo de novo. Almoço de sanduíche na pedra. Volta com chuva fina e arco-íris. Banho quente, jantar de cordeiro com pisco sour. Por fim, céu absurdamente estrelado pela janela.",
        "diff": [
            ("Lodge premium dentro do parque", "Explora, Tierra ou Awasi — os três únicos com licença pra operar dentro de Torres del Paine. Vista das torres da janela. Logística inteira incluída."),
            ("Guia certificado + bilíngue", "AAGM (associação argentina de guias de montanha) ou equivalente chileno. Não guia de pacote turístico — gente que sobe Aconcágua nas folgas."),
            ("Equipamento técnico fornecido", "Crampons, capa de chuva, mochila de trilha, bastões. Você não precisa comprar nada — chega com roupa de cidade e sai equipado."),
            ("Plano B meteorológico flexível", "Patagônia troca de tempo cinco vezes por dia. Itinerário com janelas alternativas: se a trilha A fechar, vamos pra B sem você nem perceber."),
            ("Transfer entre Chile e Argentina", "Fronteira por terra, com motorista que conhece os horários certos pra fugir das filas. Documentação pré-arranjada — você só atravessa."),
        ],
        "perfil": "Para quem busca paisagem extrema com conforto premium. Bom condicionamento físico ajuda, mas não é obrigatório — temos roteiros de baixa intensidade também.",
        "cta_h2": "Quer arquitetar essa Patagônia?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "marrocos": {
        "meta_desc": "Marrakech, Vale do Atlas, Saara e Essaouira com curadoria Tropicco. Riads no coracao da medina, lodges berberes na montanha e acampamento privado nas dunas.",
        "og_desc": "O choque sensorial, com cama macia ao final.",
        "jsonld_desc": "Marrakech, Vale do Atlas, Saara e Essaouira com curadoria sob medida. Riads selecionados, motorista privado, jantar berbere na montanha e acampamento de luxo no deserto.",
        "hero_sub": "O choque sensorial, com cama macia ao final.",
        "angle": "Marrocos é o destino que mais ativa os cinco sentidos ao mesmo tempo. Cor que satura, especiarias que confundem, voz do muezzin cinco vezes por dia, calor seco do meio-dia, frio cortante da noite no deserto. Não é destino fácil — é destino intenso. Por isso a curadoria importa: sem ela, vira caos. Com ela, o caos vira coreografia. Riads no centro da medina, motorista que conhece atalhos, jantar berbere com vista pro Atlas, acampamento privado no Saara onde o silêncio é completo.",
        "regions_h2": "Onde o Marrocos acontece de verdade.",
        "regions": [
            ("Marrakech", "A imersão", "Três dias em riad selecionado dentro da medina — não hotel fora dos muros. Souks com guia (sem ele, perde-se em quinze minutos), jardim Majorelle ao amanhecer, jantar em terraço com vista da Koutoubia ao pôr do sol. Hammam tradicional na manhã do checkout."),
            ("Vale do Atlas", "A montanha", "Dois dias num lodge berbere — Kasbah du Toubkal ou similar — com vista pro pico mais alto do norte da África. Trilha leve até vilarejo, almoço com família local, chá de menta na laje. Silêncio absoluto à noite."),
            ("Saara", "O deserto", "Duas noites em acampamento privado em Erg Chigaga (não Merzouga, que é overcrowded). Camelo do entardecer, jantar à fogueira, céu sem poluição luminosa. Manhã com o silêncio mais denso da viagem."),
            ("Essaouira", "A pausa", "Dois dias na costa atlântica — vento, surfe, peixe grelhado no porto, ruelas azul-e-branco. A pausa do ritmo intenso de Marrakech antes do voo de volta."),
        ],
        "day_h2": "No Saara, com o silêncio.",
        "day": "Saída de Erg Chigaga ao amanhecer — o sol nasce em cinco minutos e a temperatura sobe vinte graus em uma hora. Camelo até a próxima duna, em silêncio. Café da manhã sob tenda berbere: pão na brasa, ovo, mel, chá de menta. Manhã livre — se quiser, sandboard nas dunas. Almoço sob tenda. Tarde de descanso, jet lag de cidade ainda saindo. Pôr do sol no topo da duna mais alta. Jantar à fogueira, música berbere ao vivo, céu absurdamente estrelado. Você dorme em tenda com cama de verdade, não saco de dormir.",
        "diff": [
            ("Riad selecionado dentro da medina", "Não hotel fora dos muros — riad de 4-8 quartos no coração da cidade velha. Pátio interno, fonte, dono presente. Visitamos cada um antes de indicar."),
            ("Motorista privado para todo o trajeto", "Carro 4x4 ou similar com motorista bilíngue do desembarque ao reembarque. Estradas de montanha não são pra alugar carro."),
            ("Acampamento privado no Saara", "Não acampamento de grupo. Tenda berbere com cama, banheiro privado, jantar à fogueira só pro seu grupo. Erg Chigaga, não Merzouga."),
            ("Hammam tradicional reservado", "Hammam de bairro, não spa de hotel. Experiência completa com ghassoul, óleo de argan e chá. Reservado pra horário sem outros clientes."),
            ("Driver-guia certificado nos souks", "Marrakech sem guia é caos garantido. Guia que conhece os artesãos certos, os ateliês legítimos, os preços justos."),
        ],
        "perfil": "Para quem busca intensidade sensorial com conforto premium. Marrocos premia quem se entrega ao ritmo dele — calor de meio-dia, jantar tarde, silêncio do deserto.",
        "cta_h2": "Quer arquitetar esse Marrocos?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "africa-do-sul": {
        "meta_desc": "Cape Town, Garden Route e Sabi Sands com curadoria Tropicco. Big Five em lodges premium, costa cinematografica e vinhedos de Stellenbosch — uma Africa do Sul desenhada com tempo.",
        "og_desc": "A Africa que esta mais proxima do que parece.",
        "jsonld_desc": "Cape Town, Garden Route e Sabi Sands com curadoria sob medida. Lodges premium em reservas privadas, rastreadores experientes e vinhedos de Stellenbosch.",
        "hero_sub": "A África que está mais próxima do que parece.",
        "angle": "África do Sul é a porta de entrada mais civilizada para o continente. Cidade cosmopolita à beira da Table Mountain, costa cinematográfica entre dois oceanos, vinhedos premiados e — o ponto alto — safári em reservas privadas onde a fauna é abundante e a logística, impecável. Não é destino de roughing it. É destino de contraste: jantar fine dining em Cape Town numa noite, leão a três metros do jipe na seguinte. Pra quem está descobrindo a África, é o melhor primeiro encontro possível.",
        "regions_h2": "Onde a África do Sul acontece de verdade.",
        "regions": [
            ("Cape Town", "A cidade-paisagem", "Quatro dias. Hotel em Camps Bay ou Bo-Kaap, com vista pra Table Mountain. Cable car ao topo logo cedo (vento depois invalida o passeio). Bo-Kaap a pé, V&amp;A Waterfront sem pressa, jantar em The Test Kitchen ou similar. Day trip pra Stellenbosch — vinhos premiados, almoço em fazenda."),
            ("Garden Route", "A costa", "Quatro dias dirigindo de Cape Town a Plettenberg Bay — uma das estradas costeiras mais bonitas do mundo. Knysna pra ostras, Tsitsikamma pra trilha entre florestas indígenas, Plett pra praia e baleias (jul-out)."),
            ("Sabi Sands", "O safári", "Quatro a cinco noites em lodge premium dentro da reserva privada vizinha ao Kruger (Singita, Londolozi ou MalaMala). Game drives matinais e noturnos com rastreador shangaan, Big Five quase garantido, suíte com piscina privativa virada pro mato."),
        ],
        "day_h2": "Em Sabi Sands, antes do amanhecer.",
        "day": "Você acorda às cinco. Café rápido na boma do lodge — geleia caseira, ovo, café forte. Saída de jipe aberto às seis, ainda escuro. Rastreador shangaan na frente, ranger ao volante. Primeira hora: rastros frescos de leoa. Segunda hora: encontro com manada de elefantes atravessando o rio. Terceira: leoa achada, com filhotes, vinte metros do jipe. Café no mato com vista da savana. Volta pro lodge, brunch farto, descanso até três da tarde. Game drive vespertino: pôr do sol num clearing com gin tonic. Caminhada de volta no escuro, lanternas. Jantar à fogueira.",
        "diff": [
            ("Lodge premium em reserva privada", "Não Kruger público — Sabi Sands ou Timbavati, reservas privadas vizinhas. Game drives sem outros jipes, off-road permitido, animais habituados a veículos."),
            ("Rastreador + ranger experientes", "Dois profissionais por jipe: ranger ao volante, rastreador shangaan na frente lendo pegadas. Combinação que muda totalmente o que você vê."),
            ("Voos internos pré-arranjados", "Cape Town → Hoedspruit (próximo a Sabi) é voo de 2h. Conexões e bagagens cuidadas, sem você gerenciar transfers."),
            ("Day trips em Stellenbosch com sommelier", "Não tour de ônibus. Carro privado com sommelier que conhece os winemakers pessoalmente — degustação na barrica, não no balcão."),
            ("Baleias na Garden Route (jul-out)", "Hermanus tem o melhor land-based whale watching do mundo. Janela de junho a outubro — fora disso, focas e golfinhos."),
        ],
        "perfil": "Para quem busca um primeiro safári premium, sem rusticidade. Funciona excepcionalmente bem como introdução à África — e como destino para quem volta querendo mais.",
        "cta_h2": "Quer arquitetar essa África do Sul?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "costa-rica": {
        "meta_desc": "Arenal, Monteverde e Pacifico com curadoria Tropicco. Vulcoes, floresta nas nuvens, surf de iniciante e fauna abundante — uma Costa Rica fora do circuito padrao.",
        "og_desc": "A natureza dos documentarios, na escala de uma viagem.",
        "jsonld_desc": "Arenal, Monteverde e Pacifico (Manuel Antonio ou Nosara) com curadoria sob medida. Lodges eco-premium, guias naturalistas certificados e fauna em densidade rara.",
        "hero_sub": "A natureza dos documentários, na escala de uma viagem.",
        "angle": "Costa Rica é o destino de natureza mais acessível das Américas. Distâncias curtas, infraestrutura turística madura, inglês falado em qualquer lodge — e fauna que nos documentários parecia exagero. Em uma semana você sobe num vulcão ativo, atravessa floresta nas nuvens em ponte suspensa e termina o dia surfando onda iniciante no Pacífico. Não é destino de adrenalina pesada — é destino de encantamento sustentado. A Tropicco aqui filtra os lodges que ainda mantêm densidade natural, longe dos resorts de massa.",
        "regions_h2": "Onde a Costa Rica acontece de verdade.",
        "regions": [
            ("Arenal", "O vulcão", "Três dias num lodge com vista direta pro Arenal — Nayara, Tabacon ou Arenal Springs. Águas termais de origem vulcânica, trilha pelo parque até bocas de lava antigas, ponte suspensa pela copa da floresta. Sloth-watching na varanda, sem mover o pescoço."),
            ("Monteverde", "A floresta nas nuvens", "Dois dias na cloud forest — ecossistema raríssimo onde nuvens permanentes alimentam musgo, samambaia e fauna específica. Trilhas com naturalista certificado, observação de quetzal (com sorte), zip line entre as árvores."),
            ("Manuel Antonio ou Nosara", "O Pacífico", "Três dias na costa: Manuel Antonio (parque nacional + surf de iniciante + lodge boutique) ou Nosara (yoga retreat-style, mais isolado, surf melhor). Macacos saguis curiosos invadem a varanda no café da manhã."),
        ],
        "day_h2": "Em Monteverde, dentro da nuvem.",
        "day": "Você acorda com névoa entrando pela janela. Café no lodge — gallo pinto, ovos, café costarriquenho forte. Saída às sete com naturalista certificado para a Reserva Biológica de Monteverde. Caminhada lenta na trilha — você não anda, você procura. Dois quetzais machos com cauda longa avistados na primeira hora. Bromélias em flor, beija-flor de duas espécies, tucano. Almoço no centro de visitantes. Tarde de zip line na copa da floresta — onze cabos, alguns com 800 metros. Volta pro lodge ao crepúsculo, jantar com queijo local de queijaria suíça (sim, em Monteverde existe). Cobertor extra na cama, faz frio à noite.",
        "diff": [
            ("Lodge eco-premium em cada região", "Não chain de praia. Lodges familiares com prática ecológica real (energia solar, água de chuva), comida local, fauna na varanda."),
            ("Naturalista certificado em todas as trilhas", "Não guia de turismo. Biólogo formado que vê o que você não vê — quetzal, preguiça, cobra inofensiva. Combinação que multiplica o que você leva pra casa."),
            ("Transfer com motorista bilíngue", "Estradas costarriquenhas são tranquilas mas estreitas. Motorista que conhece atalhos, paradas pra fauna, restaurantes locais autênticos."),
            ("Surf de iniciante em Manuel Antonio ou Nosara", "Aulas com instrutor, prancha soft top adequada, ondas de 1m em areia. Mesmo quem nunca surfou levanta na primeira aula."),
            ("Janela de avistamento de quetzal", "Quetzal só aparece em altitude e estação certa (set-fev). Lodges em Monteverde têm trilhas privadas onde é avistado em 60% das saídas matinais."),
        ],
        "perfil": "Para quem busca natureza acessível, fauna abundante e ritmo desacelerado. Não é destino de adrenalina pesada — é destino de encantamento sustentado.",
        "cta_h2": "Quer arquitetar essa Costa Rica?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "grecia": {
        "meta_desc": "Atenas, Santorini ou Naxos e Creta com curadoria Tropicco. Mediterraneo raiz, ruinas que viram aula espontanea e barco entre ilhas com tripulacao privada.",
        "og_desc": "Mediterraneo raiz — onde a historia entra pela boca.",
        "jsonld_desc": "Atenas, Santorini ou Naxos e Creta com curadoria sob medida. Hoteis boutique selecionados, barco privado entre ilhas e taverna familiar com peixe pescado pela manha.",
        "hero_sub": "Mediterrâneo raiz — onde a história entra pela boca.",
        "angle": "Grécia é o destino onde a história não está em museu — está embutida na refeição, no nome da praia, no jeito do velho do café tratar você. Atenas tem o Partenon, mas tem também ruelas de Plaka onde se come peixe grelhado num quintal de pedra. Santorini tem o pôr do sol mais fotografado do planeta, mas Naxos tem a praia mais limpa e a vila mais autêntica. Creta tem ruínas minoicas e tem queijo de cabra envelhecido em caverna. A curadoria certa escolhe entre o ícone e o autêntico — quase sempre o segundo.",
        "regions_h2": "Onde a Grécia acontece de verdade.",
        "regions": [
            ("Atenas", "A âncora", "Dois dias. Hotel boutique em Plaka ou Monastiraki, não nos mega-hotéis perto do aeroporto. Acrópole logo cedo (8h), guia que transforma pedras em narrativa. Tarde nas ruelas de Plaka, jantar de mezedakia em taverna familiar — não restaurante de turista. Visita ao Museu da Acrópole."),
            ("Santorini ou Naxos", "A ilha", "Cinco dias. Santorini se for sua primeira Grécia — pôr do sol em Oia, vinhedos vulcânicos, hotel boutique em caverna escavada na falésia. Naxos se quer mais autêntico, menos lotado — vila chora chora, praias longas e vazias, queijo de cabra na fazenda."),
            ("Creta", "O contraste", "Quatro dias. Cnossos com guia (não dá pra entender as ruínas sem contexto), Garganta de Samaria pra trilha (quem é ativo), Chania pelas ruelas venezianas. Almoço em taverna em Loutro — só acessível por barco."),
        ],
        "day_h2": "Em Naxos, sem horário.",
        "day": "Você acorda tarde. Café da manhã com iogurte grego, mel local, fruta fresca, pão recém-saído do forno. Manhã na praia de Plaka — areia fina, água translúcida, sem multidão (Naxos não é Mykonos). Almoço sem pressa em taverna à beira-mar: peixe pescado de manhã, salada greco genuína, ouzo gelado. Sesta. Tarde de exploração de vila chora chora — ruelas de pedra, gato dormindo na soleira, igreja pequena de cúpula azul. Jantar em fazenda — queijo de cabra envelhecido, cordeiro assado lento, vinho local. Caminhada noturna pela vila adormecida.",
        "diff": [
            ("Hotel boutique em ilha selecionado", "Não chain de hotel. Casas de 8-15 quartos em vila autêntica, pais e filhos na recepção, café da manhã com produto local. Visitamos antes."),
            ("Barco privado entre ilhas", "Caique tradicional ou catamarã com tripulação por meio dia. Passeio entre baías escondidas, parada em taverna só acessível pelo mar."),
            ("Guia arqueológico em Atenas e Cnossos", "Não guia de excursão. Arqueólogo formado que faz pedras virarem narrativa — diferença total no que você entende."),
            ("Reservas em tavernas familiares", "Lugares de 6-10 mesas, sem reserva online, sem inglês. A gente liga pelo grego de manhã pra reservar pra você."),
            ("Transfer e ferry calibrados", "Ferries gregos são desafio logístico — horários mudam, atrasos, embarque por nome. Cuidamos de tudo, você só desembarca."),
        ],
        "perfil": "Para quem busca Mediterrâneo de verdade, sem o circuito Mykonos-Santorini-Mykonos. Funciona melhor de maio a junho ou em setembro — fora alta temporada.",
        "cta_h2": "Quer arquitetar essa Grécia?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "tailandia": {
        "meta_desc": "Bangkok, Chiang Mai e Krabi com curadoria Tropicco. Asia facil, com praias paradisiacas, elefantes em santuario etico e cultura templo a templo.",
        "og_desc": "A primeira Asia — e talvez a mais sorridente.",
        "jsonld_desc": "Bangkok, Chiang Mai e Krabi com curadoria sob medida. Hoteis boutique selecionados, santuario etico de elefantes em Chiang Mai e barco privado entre ilhas no Mar de Andamao.",
        "hero_sub": "A primeira Ásia — e talvez a mais sorridente.",
        "angle": "Tailândia é o destino mais sorridente do mundo — não é metáfora. Tem comida boa em qualquer esquina, templos que param o tempo, praia que parece edição de Photoshop e gente que trata estranho como visita esperada. É a Ásia mais fácil — turismo maduro, inglês falado, infraestrutura sólida — sem perder a alma. Pra quem está abrindo a Ásia pela primeira vez, é a porta perfeita: mergulhar fundo sem o atrito de Vietnã ou Camboja.",
        "regions_h2": "Onde a Tailândia acontece de verdade.",
        "regions": [
            ("Bangkok", "A entrada", "Três dias. Hotel em Riverside (Mandarin Oriental, Peninsula) ou boutique em Sathorn. Templos só ao amanhecer (Wat Pho 7h, antes da multidão), refeição de rua com guia que filtra os carrinhos certos, longtail boat pelos klongs. Drink no rooftop ao pôr do sol."),
            ("Chiang Mai", "O norte", "Quatro dias. Old city com seus templos antigos, mercado noturno de domingo, cooking class numa fazenda fora da cidade. Dia inteiro em santuário ético de elefantes (Elephant Nature Park ou similar — sem cavalgada, só observação). Massagem tailandesa autêntica, não SPA de hotel."),
            ("Krabi ou Phuket", "A praia", "Quatro a cinco dias. Krabi se quer paisagem dramática (falésias calcárias saindo do mar) e menos lotado. Phuket pra base com voo direto, day trips de barco pra ilhas vizinhas. Hotel boutique de praia em ambos. Mergulho com snorkel em águas translúcidas."),
        ],
        "day_h2": "Em Chiang Mai, com elefantes.",
        "day": "Você acorda às seis. Café leve no hotel — fruta tropical, café tailandês doce. Van pega às sete, uma hora até o santuário. Briefing rápido: nada de cavalgada, só observação e alimentação. Manhã preparando comida pros elefantes (banana, abóbora, cana-de-açúcar). Tarde no rio com a manada — eles entram na água, você ajuda a banhá-los. Almoço vegetariano de comida nortista (curry de Khao Soi, papaia salgada). Volta pra cidade ao crepúsculo. Jantar em mercado noturno — pad thai numa banca, manga sticky rice de sobremesa. Massagem tailandesa de uma hora pra dormir bem.",
        "diff": [
            ("Hotel boutique em cada cidade", "Não chain de praia. Casas selecionadas com personalidade — heritage em Bangkok, lanna em Chiang Mai, beachfront discreto em Krabi."),
            ("Santuário ético de elefantes", "Sem cavalgada, sem espetáculo. Apenas observação, alimentação e banho com manada resgatada. Elephant Nature Park ou Patara Elephant Farm."),
            ("Cooking class em fazenda real", "Não escola turística. Fazenda fora da cidade, ingredientes colhidos na hora, professora que cozinha pra família dela há 30 anos."),
            ("Driver-guia bilíngue", "Tailandês-inglês com fluência. Conhece os templos no horário sem multidão, os mercados certos, as feiras à noite."),
            ("Barco privado de meio dia em Krabi", "Longtail tradicional ou catamarã pequeno. Ilhas vizinhas (Phi Phi, Bamboo, Hong) com paradas pra snorkel sem multidão."),
        ],
        "perfil": "Para quem busca uma primeira Ásia leve, com gastronomia sensorial e templos místicos. Funciona praticamente o ano inteiro fora da estação chuvosa (jul-out).",
        "cta_h2": "Quer arquitetar essa Tailândia?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "portugal": {
        "meta_desc": "Lisboa, Sintra, Alentejo e Douro ou Algarve com curadoria Tropicco. A Europa de menor barreira — em portugues, com vinho local e fado de bairro.",
        "og_desc": "A Europa em portugues, sem barreiras.",
        "jsonld_desc": "Lisboa, Sintra, Alentejo e Douro ou Algarve com curadoria sob medida. Hoteis boutique e quintas selecionadas, motorista privado e jantares em casas particulares.",
        "hero_sub": "A Europa em português, sem barreiras.",
        "angle": "Portugal é a Europa de menor barreira para o brasileiro. Idioma compartilhado (com diferenças deliciosas), comida que faz sentido, vinho de baixíssima curva de aprendizado. Mas não é a Europa fácil descartável — quando bem feita, é uma das viagens mais densas do continente. Lisboa de bairros, Sintra de palácios, Alentejo de planície e silêncio, Douro de vinhedos esculpidos no granito. Em uma viagem você atravessa três séculos e três sotaques sem mudar de país.",
        "regions_h2": "Onde Portugal acontece de verdade.",
        "regions": [
            ("Lisboa", "A capital", "Três dias. Hotel boutique em Príncipe Real ou Chiado, não em Belém turístico. Bairros a pé: Alfama no fim de tarde, Mouraria pra fado autêntico (não restaurante de show), LX Factory pro contemporâneo. Pastéis em Belém só de manhã (sem fila), bondinho 28 só ao amanhecer."),
            ("Sintra", "O conto de fadas", "Day trip ou pernoite. Pena, Quinta da Regaleira, Cabo da Roca — palácios e jardins que parecem cenários. Mas só ao amanhecer ou ao entardecer — meio-dia é multidão. Almoço em quinta familiar entre Sintra e Cascais."),
            ("Alentejo", "O silêncio", "Três dias numa herdade — vinhos brancos premiados, cavalo lusitano, jantar com porco preto e migas. Évora pelas ruínas romanas, Monsaraz pelo silêncio absoluto, Comporta pra praia de areia branca interminável."),
            ("Douro ou Algarve", "A escolha final", "Douro se quer vinho e paisagem dramática — quinta histórica entre vinhedos terraplanados, cruzeiro pelo rio. Algarve se quer praia premium — Sagres, Lagos, Tavira em hotel boutique."),
        ],
        "day_h2": "No Alentejo, sem ninguém por perto.",
        "day": "Você acorda devagar. Café da manhã na varanda da herdade — pão alentejano, queijo de ovelha, presunto pata negra, café forte. Manhã de cavalo lusitano pelos campos de oliveira, com o tratador. Volta pro almoço: porco preto bochecha estufada por seis horas, vinho da casa. Sesta longa. Tarde em Évora — capela dos ossos, ruínas romanas, café numa praça vazia. Volta pra herdade ao pôr do sol — você dirige por vinte minutos sem cruzar com nenhum carro. Jantar de migas e bacalhau, vinho branco premiado, conversa com o dono. Sem TV, sem barulho. Você dorme cedo.",
        "diff": [
            ("Quinta selecionada no Alentejo e Douro", "Não hotel de campo padrão. Quintas familiares de 6-15 quartos, dono na recepção, vinho da casa servido no jantar."),
            ("Driver-guia bilíngue", "Motorista português que conhece atalhos pelas estradas secundárias, paradas certas pra café, restaurantes que não estão em nenhum guia."),
            ("Reservas em tavernas locais", "Tasca alentejana, marisqueira lisboeta, restaurante de quinta no Douro — sem reserva online, sem inglês. Liga pra dona Maria de manhã."),
            ("Fado em casa autêntica", "Não restaurante turístico com show. Casa de fado de bairro em Alfama ou Mouraria — você janta enquanto fadistas locais cantam pra mesa do lado."),
            ("Provas de vinho em produtor pequeno", "Não tour de ônibus em adega industrial. Visita ao próprio produtor de Touriga ou Alvarinho, com winemaker pessoalmente, na barrica."),
        ],
        "perfil": "Para quem busca uma Europa próxima, com gastronomia rica e vinho memorável. Funciona o ano inteiro — verão pra praia, inverno pra cidade e adega aquecida.",
        "cta_h2": "Quer arquitetar esse Portugal?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "suica": {
        "meta_desc": "Zermatt, Lucerna e Interlaken com curadoria Tropicco. Esqui no inverno, trilhas e flores alpinas no verao, com chales boutique e trens cenicos.",
        "og_desc": "O cartao-postal que funciona como relogio.",
        "jsonld_desc": "Zermatt, Lucerna e Interlaken com curadoria sob medida. Chales boutique, esqui em pista limpa ou trilhas alpinas, trens cenicos pre-bookados e Matterhorn da janela.",
        "hero_sub": "O cartão-postal que funciona como relógio.",
        "angle": "Suíça é o destino que entrega o que promete, com pontualidade absurda. Trens chegam no segundo, paisagem é editada por algum padrão divino, queijo derrete na hora certa, vista do Matterhorn aparece quando o tempo deixa. Mas não é destino fácil — é caro, exige planejamento, premia quem sabe escolher temporada. Inverno pra esqui premium em pista impecável; verão pra trilha alpina entre lagos e flores. Tropicco aqui edita o roteiro pra evitar o circuito padrão Zurich-Genebra de turismo de massa.",
        "regions_h2": "Onde a Suíça acontece de verdade.",
        "regions": [
            ("Zermatt", "A montanha", "Três a quatro dias. Vila car-free aos pés do Matterhorn — só táxi elétrico circula, silêncio total. Esqui no inverno (37 lifts, neve garantida) ou trilhas no verão (Five Lakes Walk com Matterhorn refletido). Chalé boutique em centro, jantar de fondue ao pé da lareira."),
            ("Lucerna", "A cidade-cartão-postal", "Dois dias. Hotel boutique no centro histórico, ponte coberta de Kapellbrücke ao amanhecer, mercado às quartas, day trip de barco no lago. Subida ao Mount Pilatus pelo trem mais íngreme do mundo (48% de inclinação)."),
            ("Interlaken", "O verão", "Três dias. Base entre dois lagos pra explorar Jungfraujoch (estação mais alta da Europa), Lauterbrunnen (vila no fundo de vale glacial), Grindelwald (esqui ou trilha). Chalé boutique nos arredores, tranquilidade alpina."),
        ],
        "day_h2": "Em Zermatt, com Matterhorn.",
        "day": "Você acorda com vista. Café no chalé — pão fresco, queijo Gruyère, presunto Bündnerfleisch, café com leite quente. Manhã de trilha (verão) ou ski (inverno). Para almoço, restaurante de montanha em alta altitude — fondue de queijo ou raclette, pão preto, vinho branco gelado. Tarde mais leve: descanso, terraço com vista. Caminhada pela vila ao crepúsculo — sem carros, só sons de cascos de cavalo (tem carruagens) e silêncio. Jantar gourmet — Suíça tem mais Michelin per capita que qualquer país. Vinho local Heida ou Petite Arvine. Jacuzzi do chalé com vista do Matterhorn iluminado pela lua.",
        "diff": [
            ("Chalé boutique em vila car-free", "Zermatt e Wengen são os únicos resorts car-free de elite. Chalés de 8-12 quartos com sauna, lareira, café da manhã alpino. Visitamos antes."),
            ("Swiss Travel Pass otimizado", "Pass que cobre todos os trens, barcos, ônibus e museus. Calculamos a versão certa pro seu roteiro — pode economizar até 40%."),
            ("Trens cênicos com cabine reservada", "Glacier Express, Bernina Express, GoldenPass — sentar em cabine panorâmica precisa de reserva semanas antes. A gente garante."),
            ("Guia de montanha certificado", "Pra trilhas ou esqui fora-pista. UIAGM (associação internacional de guias) — gente que escala montanhas técnicas nas folgas."),
            ("Reservas em restaurantes de altitude", "Restaurantes em 2500m de altitude, só acessíveis por trem ou trilha, com janela limitada. Reservados pra você com horário garantido."),
        ],
        "perfil": "Para quem busca natureza dramática com infraestrutura impecável. Funciona perfeitamente em duas estações: dez/mar pra esqui premium, jun/set pra trilha alpina.",
        "cta_h2": "Quer arquitetar essa Suíça?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "eua-parques": {
        "meta_desc": "Yellowstone, Utah Big 5 ou Yosemite com curadoria Tropicco. Lodges historicos dentro dos parques, guias naturalistas e a geografia mais dramatica dos Estados Unidos.",
        "og_desc": "A geografia que parece exagero — e nao e.",
        "jsonld_desc": "Yellowstone + Grand Teton, Utah Big 5 ou Yosemite + Sequoia com curadoria sob medida. Lodges historicos, guias naturalistas certificados e logistica entre parques.",
        "hero_sub": "A geografia que parece exagero — e não é.",
        "angle": "Os parques nacionais americanos são o destino mais cinematográfico do hemisfério norte. Yellowstone tem fauna em densidade que você só viu em documentário — bisão, alce, urso, lobo. Utah tem cinco parques colados (Zion, Bryce, Capitol Reef, Arches, Canyonlands) com formações que parecem desenhos de outro planeta. Yosemite tem El Capitan e Half Dome, paredes de granito que escalonam o conceito de tamanho. A curadoria importa porque os parques americanos têm uma logística complicada — lodges esgotam um ano antes, ingressos com reserva por hora, distâncias longas. Tropicco resolve isso e te deixa só com a paisagem.",
        "regions_h2": "Onde os parques americanos acontecem de verdade.",
        "regions": [
            ("Yellowstone + Grand Teton", "O bicho", "Cinco a seis dias. Lodge histórico dentro de Yellowstone (Old Faithful Inn, Lake Hotel) — esgotam um ano antes. Game drives com naturalista logo cedo, bisão e alce em densidade quase africana, Old Faithful em horário sem multidão. Grand Teton ao lado: paisagem alpina pura."),
            ("Utah Big 5", "O deserto vermelho", "Seis a sete dias rodando entre os cinco parques de Utah. Zion (canyon vertical), Bryce (anfiteatro de hoodoos), Capitol Reef (silêncio absoluto), Arches (formações em pedra), Canyonlands (Grand Canyon em escala íntima). Lodges boutique entre parques, motorista que conhece scenic drives."),
            ("Yosemite + Sequoia", "O granito", "Cinco dias. Yosemite Valley com Half Dome e El Capitan — paredes de granito de 1000m que ainda atordoam quem viu mil fotos. Trilhas calibradas (Mist Trail, Glacier Point), lodge histórico (Ahwahnee). Sequoia ao lado: árvores mais antigas e maiores do planeta."),
        ],
        "day_h2": "Em Yellowstone, antes do amanhecer.",
        "day": "Você acorda às cinco. Café rápido no lodge — café americano forte, pão tostado. Saída em jipe com naturalista às seis, ainda escuro. Lamar Valley (a Serengeti da América) — bisões em manada de cinquenta, alce solitário ao fundo, talvez lobo (com sorte e paciência). Café da manhã num turnout, com café no termo. Old Faithful ao meio-dia — geyser que erupciona a cada 90 minutos com pontualidade absurda. Almoço em West Yellowstone. Tarde de hot springs do Mammoth — terraços minerais coloridos, vapor saindo da rocha. Volta pro lodge, jantar com bisão grelhado e cerveja local. Por fim, céu com Via Láctea visível a olho nu.",
        "diff": [
            ("Lodge histórico dentro do parque", "Os 8-10 lodges históricos dos parques americanos esgotam 12-18 meses antes. Visitamos antes pra confirmar manutenção. Vista da janela é o ponto."),
            ("Naturalista certificado em todos os game drives", "Não park ranger genérico. Biólogo formado que conhece padrões migratórios, locais de avistamento sazonal, comportamento de cada espécie."),
            ("Ingressos timed-entry pré-bookados", "Yosemite, Zion e outros agora exigem reserva por hora. Esgotam em minutos. Cuidamos de tudo com janelas múltiplas."),
            ("Driver-guia entre parques", "Distâncias americanas são reais — Utah tem 800km entre parques. Motorista que conhece scenic byways, paradas com vista, restaurantes em cidade pequena."),
            ("Equipamento técnico pra trilhas", "Mochila, bastões, capa de chuva, água. Você só leva tênis adequado — o resto a gente fornece."),
        ],
        "perfil": "Para quem busca paisagem em escala continental, com fauna abundante e infraestrutura premium. Funciona melhor de junho a setembro — fora disso, neve fecha estradas.",
        "cta_h2": "Quer arquitetar esses parques?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
    "brasil": {
        "meta_desc": "Lencois, Noronha, Amazonia ou Chapada com curadoria Tropicco. O Brasil que o brasileiro premium ainda nao viu — pousadas boutique, guias locais e logistica sem furo.",
        "og_desc": "O Brasil que esta aqui — e que ninguem viu ainda.",
        "jsonld_desc": "Lencois Maranhenses, Fernando de Noronha, Amazonia e Chapada Diamantina com curadoria sob medida. Pousadas boutique, guias locais certificados e logistica domestica complicada resolvida.",
        "hero_sub": "O Brasil que está aqui — e que ninguém viu ainda.",
        "angle": "Brasileiro premium passou férias dez vezes em Disney antes de descobrir que tem Lençóis Maranhenses. A Tropicco corrige isso. O Brasil tem alguns dos destinos naturais mais espetaculares do planeta — Lençóis, Noronha, Amazônia, Chapada — mas a logística doméstica é tão complicada que muita gente desiste. Voos atrasam, hospedagens sem padrão, guias informais. Curadoria aqui é mais crítica do que no exterior. Pousadas selecionadas, guias certificados, transporte calibrado. O Brasil que o brasileiro merece.",
        "regions_h2": "Onde o Brasil acontece de verdade.",
        "regions": [
            ("Lençóis Maranhenses", "O deserto de água", "Quatro a cinco dias. Pousada em Atins ou Caburé — não Barreirinhas turística. 4x4 até o circuito Lagoa Azul ou Lagoa Bonita ao amanhecer (sem turistas). Pôr do sol nas dunas, jantar de peixe na pousada. Único lugar do mundo onde se nada em água doce dentro de duna."),
            ("Fernando de Noronha", "O paraíso", "Cinco dias. Pousada premium (Maravilha, Solar dos Ventos) — quartos limitados por área de preservação. Trilhas até praias só acessíveis na maré baixa, mergulho com tartaruga e tubarão (inofensivo), pôr do sol no Forte do Boldró. Limite de visitantes diário — agenda com meses de antecedência."),
            ("Amazônia", "O bioma vivo", "Cinco dias. Lodge dentro da floresta (Mirante do Gavião, Anavilhanas, Juma) — só acessível por barco, energia solar, silêncio absoluto. Pesca de piranha, observação de boto cor-de-rosa, caminhada noturna com guia indígena. Encontro das águas (Negro + Solimões)."),
            ("Chapada Diamantina", "O interior", "Cinco dias. Pousada em Lençóis (cidade-base) ou Vale do Capão (mais autêntico). Trilhas pro Pati, Fumaça, Poço Encantado (água azul translúcida em caverna). Banhos em rios de pedra, jantar caseiro em fazenda."),
        ],
        "day_h2": "Em Lençóis, antes do amanhecer.",
        "day": "Você acorda às cinco em Atins. Café na pousada — frutas regionais, tapioca, suco de cajá. 4x4 sai às seis com motorista local. Uma hora de buggy pelas dunas, sol nascendo atrás. Chega na Lagoa Azul antes das oito — sem ninguém. Você nada em água doce de chuva acumulada na duna, transparente. Manhã livre nas dunas, fotos sem filtro. Almoço de peixe grelhado num rancho de pescador. Tarde na Lagoa Bonita — outra dimensão, dunas se estendendo até o horizonte. Pôr do sol no topo da duna mais alta. Volta de buggy à noite, lua iluminando o caminho. Jantar na pousada com peixe local, suco de tamarindo. Você dorme com som de vento na duna.",
        "diff": [
            ("Pousada boutique selecionada", "Não pousada padrão. Casas de 6-12 quartos, donos presentes, café da manhã regional, ambiente respeitando o entorno. Visitamos antes."),
            ("Guia local certificado", "Não freelance de praia. Guias com curso (Cadastur, Embratur), conhecimento profundo do bioma, certificação de salvamento."),
            ("Logística doméstica resolvida", "Voos domésticos brasileiros são caóticos. Cuidamos de remarcações, conexões, transfers — você só desembarca."),
            ("Acesso a praias e trilhas restritas", "Vários destinos brasileiros têm cota diária (Noronha, Pati, Fumaça). A gente garante seu lugar."),
            ("Janela climática certa", "Lençóis com lagoas cheias só de jul a set. Noronha sem chuva de set a fev. Amazônia em águas baixas (jul-out) ou altas (jan-mai). Calibramos a janela."),
        ],
        "perfil": "Para o brasileiro premium que ainda não conhece o próprio país. Também para o estrangeiro que quer Brasil além do circuito Rio-Bahia padrão.",
        "cta_h2": "Quer arquitetar esse Brasil?",
        "cta_p": "A Auscultação é uma conversa de 45 minutos, sem custo, para entender o que você busca — e descobrir se há um encontro entre você e o que fazemos.",
    },
}


def aplicar(slug, dados):
    path = os.path.join(ROOT, "destinos", f"{slug}.html")
    if not os.path.exists(path):
        print(f"  ! {slug}.html nao encontrado")
        return 0

    with open(path, "r", encoding="utf-8") as f:
        c = f.read()

    n = 0

    # Meta description (sem acentos pra evitar quebras de codificacao no source)
    nc, k = re.subn(
        r'<meta name="description" content="[^"]*"',
        f'<meta name="description" content="{dados["meta_desc"]}"',
        c, count=1
    )
    if k: c, _ = nc, n; n += k

    # OG description
    nc, k = re.subn(
        r'<meta property="og:description" content="[^"]*"',
        f'<meta property="og:description" content="{dados["og_desc"]}"',
        c, count=1
    )
    if k: c = nc; n += k

    # JSON-LD description (primeira ocorrencia)
    nc, k = re.subn(
        r'"description": "[^"]*"',
        f'"description": "{dados["jsonld_desc"]}"',
        c, count=1
    )
    if k: c = nc; n += k

    # Hero subtitle
    nc, k = re.subn(
        r'<p class="dest-subtitle">[^<]*</p>',
        f'<p class="dest-subtitle">{dados["hero_sub"]}</p>',
        c, count=1
    )
    if k: c = nc; n += k

    # Angle text
    nc, k = re.subn(
        r'<p class="dest-angle-text">\s*.*?\s*</p>',
        f'<p class="dest-angle-text">\n        {dados["angle"]}\n      </p>',
        c, count=1, flags=re.DOTALL
    )
    if k: c = nc; n += k

    # Regions h2
    nc, k = re.subn(
        r'(<section class="dest-section dest-regions">\s*<div class="dest-section-header">\s*<span class="eyebrow">As regiões</span>\s*<h2>)[^<]*(</h2>)',
        rf'\g<1>{dados["regions_h2"]}\g<2>',
        c, count=1
    )
    if k: c = nc; n += k

    # Per-region: replace tag e paragrafo (anchorado pelo h3 do nome da regiao)
    for region_h3, region_tag, region_p in dados["regions"]:
        # match: <h3>Region</h3>...<p class="dest-region-tag">OLD_TAG</p>...<p>OLD_P</p>
        pattern = (
            r'(<h3>' + re.escape(region_h3) + r'</h3>\s*'
            r'<p class="dest-region-tag">)[^<]*(</p>\s*<p>)[^<]*?(</p>)'
        )
        nc, k = re.subn(
            pattern,
            rf'\g<1>{region_tag}\g<2>{region_p}\g<3>',
            c, count=1, flags=re.DOTALL
        )
        if k: c = nc; n += k

    # Day h2 + paragrafo
    nc, k = re.subn(
        r'(<section class="dest-section dest-day">\s*<div class="dest-section-inner">\s*<span class="eyebrow">Como é um dia</span>\s*<h2>)[^<]*(</h2>\s*<p class="dest-day-text">)[^<]*?(</p>)',
        rf'\g<1>{dados["day_h2"]}\g<2>{dados["day"]}\g<3>',
        c, count=1, flags=re.DOTALL
    )
    if k: c = nc; n += k

    # Diferenciais — substitui a lista inteira
    diff_html = ""
    for h3, p in dados["diff"]:
        diff_html += f'        <li>\n          <h3>{h3}</h3>\n          <p>{p}</p>\n        </li>\n'
    nc, k = re.subn(
        r'(<ul class="dest-diff-list">)\s*.*?\s*(</ul>)',
        rf'\g<1>\n{diff_html}      \g<2>',
        c, count=1, flags=re.DOTALL
    )
    if k: c = nc; n += k

    # Perfil ideal — paragrafo apos o h3
    nc, k = re.subn(
        r'(<span class="eyebrow">Perfil ideal</span>\s*<h3>[^<]*</h3>\s*<p>)[^<]*?(</p>)',
        rf'\g<1>{dados["perfil"]}\g<2>',
        c, count=1, flags=re.DOTALL
    )
    if k: c = nc; n += k

    # CTA h2
    nc, k = re.subn(
        r'(<section class="cta-final">\s*<div class="cta-inner">\s*<span class="eyebrow">[^<]*</span>\s*<h2>)[^<]*(</h2>)',
        rf'\g<1>{dados["cta_h2"]}\g<2>',
        c, count=1
    )
    if k: c = nc; n += k

    # CTA paragrafo
    nc, k = re.subn(
        r'(<h2>[^<]*</h2>\s*<p>)A Auscultação[^<]*?(</p>\s*<a)',
        rf'\g<1>{dados["cta_p"]}\g<2>',
        c, count=1, flags=re.DOTALL
    )
    if k: c = nc; n += k

    with open(path, "w", encoding="utf-8") as f:
        f.write(c)

    return n


total = 0
for slug, dados in DESTINOS.items():
    n = aplicar(slug, dados)
    print(f"  [{n}] {slug}.html")
    total += n

print(f"\nTotal: {total} substituicoes em {len(DESTINOS)} destinos.")
