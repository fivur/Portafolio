const menuBtn = d.getElementById('menuBtn');
const navMenu = d.getElementById('navMenu');


menuBtn.addEventListener('click', (e) => {
    navMenu.classList.toggle('active'); // Agrega o quita la clase "active"
});

w.addEventListener('scroll', e => {


    navMenu.classList.remove('active');

});

