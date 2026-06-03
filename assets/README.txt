HERO VIDEO — onde dropar o arquivo
====================================

O index.html aponta para dois arquivos nesta pasta:

  assets/hero.mp4       (formato principal, suportado por todos os navegadores)
  assets/hero.webm      (opcional, fallback mais leve)
  assets/hero-poster.jpg (frame estático que aparece enquanto o vídeo carrega)

Especificações recomendadas
---------------------------
- Resolução: 1920×1080 (Full HD) ou 2560×1440 (QHD)
- Duração: 15-30 segundos em loop perfeito (último frame ≈ primeiro)
- Codec: H.264 (mp4) — máxima compatibilidade
- Bitrate: 4-8 Mbps (equilíbrio peso/qualidade)
- Áudio: REMOVER (vídeo precisa rodar muted por exigência dos navegadores)
- Tamanho final: idealmente < 8 MB

Como obter
----------
1. Pexels Video (gratuito, sem atribuição): https://www.pexels.com/videos/
   Buscar: "travel cinematic", "drone landscape", "world destinations"
2. Coverr (gratuito): https://coverr.co/
3. Bancos pagos: Artgrid, Storyblocks, Envato Elements

Sugestão de tema
----------------
Montagem com 4-6 cortes curtos (3-5s cada) de paisagens icônicas dos destinos
da curadoria: Toscana, Patagônia, Saara, Kyoto, Cape Town, etc. Cortes lentos,
câmera estável ou drone suave — nunca cortes nervosos.

Sem o arquivo
-------------
Enquanto não houver hero.mp4, o fundo da seção fica preto-azulado (#0a1a2e)
e o texto ainda aparece sobreposto. O poster é mostrado por padrão também.
