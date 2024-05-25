/* ===== Turns the menu hamburguer into a X ===== */
const menuHamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-responsive');

menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('change');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
