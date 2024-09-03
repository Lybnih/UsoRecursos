const monthMenu = document.getElementById('mes-menu');
const monthSections = document.querySelectorAll('.mes');

monthMenu.addEventListener('click', (event) => {
  document.getElementById('junho').classList.add('active'); 
  event.preventDefault();
 
  const targetMonth = event.target.dataset.target;

  if (targetMonth) { 
    monthMenu.querySelectorAll('li').forEach(item => {
      item.classList.remove('active');
    });
    monthSections.forEach(section => {
      section.classList.remove('active');
    });

    // Adiciona a classe 'active' ao item clicado e à seção correspondente
    event.target.classList.add('active');
    document.getElementById(targetMonth).classList.add('active');
  }
});