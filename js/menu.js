const menuItems = document.querySelectorAll('#mes-menu li');
const mesContents = document.querySelectorAll('.mes');
const recursosSection = document.getElementById("recursos");
const recursosBtn = document.getElementById("recursos-btn");
const tituloSecao = document.querySelector('.titulo-seção');

// Função para ocultar todos os conteúdos
function hideAllContents() {
  mesContents.forEach(content => content.style.display = 'none');
  recursosSection.style.display = 'none'; // Oculta a seção de recursos
  tituloSecao.textContent = 'Dashboard';
}

// Adiciona o evento de clique aos itens do menu
menuItems.forEach(item => {
  item.addEventListener('click', function () {
    menuItems.forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    hideAllContents(); // Oculta todos os conteúdos antes de mostrar o desejado

    if (this.getAttribute('data-target') === 'todos') {
      mesContents.forEach(content => content.style.display = 'block');
    } else {
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).style.display = 'block';
    }
  });
});

// Inicializa o conteúdo para mostrar todos os meses por padrão
mesContents.forEach(content => content.style.display = 'block');

// Função para alternar a visibilidade dos meses
function toggleMeses(id) {
  const meses = document.getElementById(id);
  if (meses.classList.contains('hidden')) {
    meses.classList.remove('hidden');
  } else {
    meses.classList.add('hidden');
  }
}

// Adiciona a funcionalidade ao botão "Conheça nossos Recursos"
recursosBtn.addEventListener("click", function () {
  hideAllContents();

  // Mostra a seção de recursos
  recursosSection.style.display = "block";

  tituloSecao.textContent = 'Conheça nossos recursos';
});