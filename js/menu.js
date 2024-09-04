
const menuItems = document.querySelectorAll('#mes-menu li');
const mesContents = document.querySelectorAll('.mes');


menuItems.forEach(item => {
  item.addEventListener('click', function () {

    menuItems.forEach(i => i.classList.remove('active'));

    this.classList.add('active');


    if (this.getAttribute('data-target') === 'todos') {
      mesContents.forEach(content => content.style.display = 'block');
    } else {

      mesContents.forEach(content => content.style.display = 'none');


      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).style.display = 'block';
    }
  });
});


mesContents.forEach(content => content.style.display = 'block');
