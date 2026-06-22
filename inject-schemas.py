#!/usr/bin/env python3
# Injeta canonical + og:url + JSON-LD TouristTrip em cada página de destino.
# Idempotente: detecta se já foi injetado e ignora.

import os, re, sys

DESTINOS = {
    "japao": {
        "title": "Japão",
        "desc": "O país que reconfigura como adolescentes enxergam o mundo. Tóquio, Kyoto e Hokkaido com curadoria sob medida.",
        "country": "Japão", "iso": "JP",
        "regioes": ["Tóquio", "Kyoto", "Hakone ou Hokkaido"]
    },
    "patagonia": {
        "title": "Patagônia",
        "desc": "Fim de mundo, com banho quente esperando. Torres del Paine, El Calafate e El Chaltén com curadoria sob medida.",
        "country": "Chile e Argentina", "iso": "CL",
        "regioes": ["Torres del Paine", "El Calafate", "El Chaltén"]
    },
    "marrocos": {
        "title": "Marrocos",
        "desc": "O choque sensorial, com cama macia ao final. Marrakech, Atlas, Saara e Essaouira com curadoria sob medida.",
        "country": "Marrocos", "iso": "MA",
        "regioes": ["Marrakech", "Vale do Atlas", "Saara", "Essaouira"]
    },
    "africa-do-sul": {
        "title": "África do Sul",
        "desc": "O safári que reorganiza como crianças entendem o mundo natural. Cape Town, Garden Route e Sabi Sands.",
        "country": "África do Sul", "iso": "ZA",
        "regioes": ["Cape Town", "Garden Route", "Sabi Sands"]
    },
    "costa-rica": {
        "title": "Costa Rica",
        "desc": "A natureza dos documentários, em escala de família. Arenal, Monteverde e Pacífico com curadoria sob medida.",
        "country": "Costa Rica", "iso": "CR",
        "regioes": ["Arenal", "Monteverde", "Pacífico (Manuel Antonio ou Nosara)"]
    },
    "grecia": {
        "title": "Grécia",
        "desc": "Mediterrâneo raiz — onde a história entra pela boca. Atenas, Santorini ou Naxos e Creta.",
        "country": "Grécia", "iso": "GR",
        "regioes": ["Atenas", "Santorini, Naxos ou Paros", "Creta"]
    },
    "tailandia": {
        "title": "Tailândia",
        "desc": "A primeira Ásia — e talvez a mais sorridente. Bangkok, Chiang Mai e Krabi com curadoria sob medida.",
        "country": "Tailândia", "iso": "TH",
        "regioes": ["Bangkok", "Chiang Mai", "Krabi ou Phuket"]
    },
    "portugal": {
        "title": "Portugal",
        "desc": "A Europa em português, com avós juntos. Lisboa, Sintra, Alentejo e Douro ou Algarve.",
        "country": "Portugal", "iso": "PT",
        "regioes": ["Lisboa", "Sintra", "Alentejo", "Douro ou Algarve"]
    },
    "suica": {
        "title": "Suíça",
        "desc": "O cartão-postal que funciona como relógio. Zermatt, Lucerna e Interlaken com curadoria sob medida.",
        "country": "Suíça", "iso": "CH",
        "regioes": ["Zermatt", "Engelberg ou Interlaken", "Lucerna"]
    },
    "eua-parques": {
        "title": "Estados Unidos · Parques Nacionais",
        "desc": "A geografia que parece exagero — e não é. Yellowstone, Utah Big 5 ou Yosemite com curadoria sob medida.",
        "country": "Estados Unidos", "iso": "US",
        "regioes": ["Yellowstone + Grand Teton", "Utah Big 5", "Yosemite + Sequoia"]
    },
    "brasil": {
        "title": "Brasil · Nordeste e Amazônia",
        "desc": "O país que está aqui — e que eles ainda não viram. Lençóis, Noronha, Amazônia ou Chapada.",
        "country": "Brasil", "iso": "BR",
        "regioes": ["Lençóis Maranhenses", "Fernando de Noronha", "Amazônia", "Chapada Diamantina"]
    },
}

MARKER_OLD = '<link rel="stylesheet" href="../styles.css">\n</head>'

def build_block(slug, d):
    regs = "\n".join([
        f'        {{ "@type": "ListItem", "position": {i+1}, "name": "{r}" }}{"," if i < len(d["regioes"])-1 else ""}'
        for i, r in enumerate(d["regioes"])
    ])
    return f'''<link rel="stylesheet" href="../styles.css">

  <meta property="og:url" content="https://tropiccotravel.com/destinos/{slug}.html">
  <meta property="og:locale" content="pt_BR">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="https://tropiccotravel.com/destinos/{slug}.html">

  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "{d["title"]} · Curadoria Familiar Tropicco",
    "description": "{d["desc"]}",
    "url": "https://tropiccotravel.com/destinos/{slug}.html",
    "inLanguage": "pt-BR",
    "touristType": "Family",
    "provider": {{ "@type": "TravelAgency", "name": "Tropicco", "url": "https://tropiccotravel.com/" }},
    "subjectOf": {{ "@type": "Country", "name": "{d["country"]}", "address": {{"@type":"PostalAddress","addressCountry":"{d["iso"]}"}} }},
    "itinerary": {{
      "@type": "ItemList",
      "itemListElement": [
{regs}
      ]
    }}
  }}
  </script>
</head>'''

base = os.path.dirname(os.path.abspath(__file__))
for slug, d in DESTINOS.items():
    path = os.path.join(base, "destinos", f"{slug}.html")
    if not os.path.exists(path):
        print(f"  ! {slug}.html não encontrado")
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    if "ld+json" in content and "TouristTrip" in content:
        print(f"  · {slug}.html já tem schema — pulando")
        continue
    if MARKER_OLD not in content:
        print(f"  ! {slug}.html sem marcador esperado")
        continue
    new = content.replace(MARKER_OLD, build_block(slug, d), 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(new)
    print(f"  ✓ {slug}.html")

print("Feito.")
