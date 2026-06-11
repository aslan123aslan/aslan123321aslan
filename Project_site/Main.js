document.addEventListener('DOMContentLoaded', () => {
  let burger = document.getElementById('burgerBtn');
  let menu = document.getElementById('fullscreenMenu');
  let close = document.getElementById('menuClose');

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-open');
  });

  close.addEventListener('click', () => {
    burger.classList.remove('is-active');
    menu.classList.remove('is-open');
  });

  menu.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-active');
      menu.classList.remove('is-open');
    });
  });
});