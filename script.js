(function () {
  // === GRID DE CURADORIA (renderiza os 12 destinos) ===
  const grid = document.getElementById('curadoriaGrid');
  if (grid && Array.isArray(window.DESTINOS)) {
    const frag = document.createDocumentFragment();
    window.DESTINOS.forEach((d, i) => {
      const card = document.createElement('a');
      card.className = 'dest-card';
      card.href = `destinos/${d.slug}.html`;
      const grad = gradientePor(d.slug);
      const cover = `assets/destinos/${d.slug}/cover.jpg`;
      card.innerHTML = `
        <div class="dest-img" style="background-image: url('${cover}'), ${grad};"></div>
        <div class="dest-meta">
          <h3>${d.nome}</h3>
          <span class="dest-arrow">→</span>
        </div>
      `;
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  // === FADE-IN ON SCROLL ===
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  const targets = document.querySelectorAll(
    '.intro-inner, .section-header, .dest-card, .article-card, .designer-card, .newsletter-inner, .consultant-inner, .cta-inner, .section-footer'
  );
  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // === PAUSA VÍDEO DO HERO QUANDO FORA DO VIEWPORT (libera GPU) ===
  const heroVideo = document.querySelector('.hero-video-bg');
  if (heroVideo && 'IntersectionObserver' in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          heroVideo.play().catch(() => {});
        } else {
          heroVideo.pause();
        }
      });
    }, { threshold: 0.1 });
    vio.observe(heroVideo);
  }

  // === HEADER SCROLLED STATE (transparente sobre vídeo, opaco depois) ===
  if (document.body.classList.contains('has-hero-video')) {
    const onScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // === SMOOTH ANCHOR SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // === PAINEL LATERAL DO DESTINO (chamado pelo globe.js) ===
  const panel       = document.getElementById('infoPanel');
  const closeBtn    = document.getElementById('infoClose');
  const elNome      = document.getElementById('infoNome');
  const elTag       = document.getElementById('infoTag');
  const elSubtitulo = document.getElementById('infoSubtitulo');
  const elPreview   = document.getElementById('infoPreview');
  const elRegioes   = document.getElementById('infoRegioes');
  const elLink      = document.getElementById('infoLinkCompleto');
  const elImg       = document.getElementById('infoImg');

  let pinAtivo = null;

  if (panel && closeBtn) {
    closeBtn.addEventListener('click', fecharPainel);

    // Fecha ao clicar fora do painel (no globo)
    document.getElementById('globe')?.addEventListener('click', (e) => {
      // Só fecha se o click não foi num pino
      if (!e.target.closest('.globe-pin')) fecharPainel();
    });

    // Esc fecha
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('visible')) fecharPainel();
    });
  }

  // Botão "Visão geral" — reseta câmera + fecha painel
  const resetBtn = document.getElementById('globeReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      fecharPainel();
      if (typeof window.globoResetarVista === 'function') {
        window.globoResetarVista();
      }
    });
  }

  window.abrirPainelDestino = function (destino, pinEl) {
    if (!panel) return;

    elTag.textContent       = destino.tag || '';
    elNome.textContent      = destino.nomeCompleto || destino.nome || '';
    elSubtitulo.textContent = destino.subtitulo || '';
    elPreview.textContent   = destino.preview || '';

    elRegioes.innerHTML = '';
    if (Array.isArray(destino.regioes)) {
      destino.regioes.forEach(r => {
        const chip = document.createElement('span');
        chip.className = 'info-regiao-chip';
        chip.textContent = r;
        elRegioes.appendChild(chip);
      });
    }

    if (elLink) elLink.setAttribute('href', `destinos/${destino.slug}.html`);

    // Imagem do destino — foto real com fallback pro gradiente
    if (elImg) {
      const cover = `assets/destinos/${destino.slug}/cover.jpg`;
      elImg.style.backgroundImage = `url('${cover}'), ${gradientePor(destino.slug)}`;
    }

    panel.classList.add('visible');
    panel.setAttribute('aria-hidden', 'false');

    // Marca pino ativo
    if (pinAtivo) pinAtivo.classList.remove('active');
    if (pinEl) {
      pinEl.classList.add('active');
      pinAtivo = pinEl;
    }

    // Foca câmera no destino
    if (typeof window.globoFocarDestino === 'function') {
      window.globoFocarDestino(destino);
    }
  };

  function fecharPainel() {
    if (!panel) return;
    panel.classList.remove('visible');
    panel.setAttribute('aria-hidden', 'true');
    if (pinAtivo) pinAtivo.classList.remove('active');
    pinAtivo = null;
    if (typeof window.globoRetomarRotacao === 'function') {
      window.globoRetomarRotacao();
    }
  }

  // Gradientes únicos para cada destino (placeholder até fotos reais)
  function gradientePor(slug) {
    const gradientes = {
      'italia':        'linear-gradient(135deg, #2f6bb3, #aac4e0)',
      'japao':         'linear-gradient(135deg, #1f4f8c, #6b9bd1)',
      'patagonia':     'linear-gradient(135deg, #4a7ab8, #d9e4f1)',
      'marrocos':      'linear-gradient(135deg, #2f6bb3, #5e85b3)',
      'africa-do-sul': 'linear-gradient(135deg, #1f4f8c, #4a7ab8)',
      'costa-rica':    'linear-gradient(135deg, #3a72b8, #aac4e0)',
      'grecia':        'linear-gradient(135deg, #5a8bc4, #d9e4f1)',
      'tailandia':     'linear-gradient(135deg, #2f6bb3, #6b9bd1)',
      'portugal':      'linear-gradient(135deg, #4a7ab8, #aac4e0)',
      'suica':         'linear-gradient(135deg, #284b75, #8eb4d9)',
      'eua-parques':   'linear-gradient(135deg, #1f4f8c, #5a8bc4)',
      'brasil':        'linear-gradient(135deg, #2f6bb3, #d9e4f1)',
    };
    return gradientes[slug] || 'linear-gradient(135deg, #2f6bb3, #aac4e0)';
  }
})();
