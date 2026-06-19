// ════════════════════════════════════════════════════════════════════════════
// Contato Tropicco — fonte ÚNICA do WhatsApp/e-mail (mapa + páginas de país)
// ════════════════════════════════════════════════════════════════════════════
// Para ativar o WhatsApp, preencha `whatsapp` com o número real (só dígitos, com
// o DDI 55). Enquanto estiver vazio, todos os botões caem no e-mail de contato.
// Ex.: whatsapp: '5554999998888'
window.TROPICCO = {
  whatsapp: '',
  email: 'contato@tropicco.com.br',

  // Monta o link de contato com uma mensagem pré-preenchida.
  link: function (assunto, mensagem) {
    if (this.whatsapp) {
      return 'https://wa.me/' + this.whatsapp + '?text=' + encodeURIComponent(mensagem);
    }
    return 'mailto:' + this.email +
           '?subject=' + encodeURIComponent(assunto) +
           '&body='    + encodeURIComponent(mensagem);
  }
};
