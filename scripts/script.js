const botao = document.getElementById('botao-tema');
const body = document.body;

// Garantir que comece em modo escuro por padrão
body.classList.remove('claro');
botao.innerHTML = '<i class="fa-solid fa-moon"></i>';

// Aplicar tema claro apenas se estiver salvo no localStorage
if (localStorage.getItem('tema') === 'claro') {
  body.classList.add('claro');
  botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('claro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('claro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isclaro = body.classList.toggle('claro');
  temaEscuro(isclaro);
  localStorage.setItem('tema', isclaro ? 'claro' : 'escuro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

document.querySelectorAll('.projeto').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        window.open(link, '_blank');
    });
});

document.querySelectorAll('.descricao').forEach(el => {
    el.addEventListener('click', e => e.stopPropagation());
});