#!/usr/bin/env python3
# Fase 1 do reposicionamento Tropicco: substitui frases de marca recorrentes.
# Não toca em corpo de texto contextual (Sobre, Filosofia, destinos) — isso é Fase 2/3.

import os, glob

ROOT = os.path.dirname(os.path.abspath(__file__))

# Find/replace global — strings de marca que aparecem em múltiplos arquivos
SUBS = [
    # Footer brand tag
    (
        "Curadoria familiar de viagens.<br>Lagoa Vermelha, RS.",
        "Curadoria de viagens com profundidade.<br>Lagoa Vermelha, RS."
    ),
    # Title tag genérico (algumas páginas usam)
    (
        "Curadoria Familiar Tropicco",
        "Curadoria Tropicco"
    ),
    # Site title da home
    (
        "Tropicco · Curadoria Familiar de Viagens",
        "Tropicco · Curadoria de Viagens com Profundidade"
    ),
    # Tagline antiga em todas as variações
    (
        "Não vendemos destinos. Construímos memórias que resistem ao tempo.",
        "Viagens que continuam acontecendo depois do retorno."
    ),
    # Variação no manifesto/quote
    (
        "Não vendemos destinos.<br>Construímos memórias que resistem ao tempo.",
        "Viagens que continuam<br>acontecendo depois do retorno."
    ),
    # Meta description home
    (
        "Arquitetamos experiências que sua família lembrará para sempre. Curadoria familiar exclusiva de viagens — Lagoa Vermelha, RS.",
        "Arquitetamos viagens com profundidade. Curadoria boutique para quem busca memória, não cobertura — Lagoa Vermelha, RS."
    ),
    # Footer copyright
    (
        "© 2025 Tropicco · Curadoria familiar exclusiva",
        "© 2026 Tropicco · Todos os direitos reservados"
    ),
    (
        "© 2026 Tropicco · Curadoria familiar exclusiva",
        "© 2026 Tropicco · Todos os direitos reservados"
    ),
]

# Páginas a processar (exclui demo-*)
TARGETS = (
    glob.glob(os.path.join(ROOT, "*.html"))
    + glob.glob(os.path.join(ROOT, "destinos", "*.html"))
)
TARGETS = [t for t in TARGETS if "demo-" not in os.path.basename(t)]

total_changes = 0
for path in TARGETS:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    file_changes = 0
    for old, new in SUBS:
        if old in content:
            count = content.count(old)
            content = content.replace(old, new)
            file_changes += count
    if file_changes:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        rel = os.path.relpath(path, ROOT)
        print(f"  [{file_changes:>2}x] {rel}")
        total_changes += file_changes

print(f"\nTotal: {total_changes} substituicoes em {len(TARGETS)} arquivos varridos.")
