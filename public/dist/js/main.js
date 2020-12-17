// Promotion msg
const promo = document.querySelector("#promotion");
// Ndro Promo msg
promo.childNodes[1].textContent =
  "Free domain name for 1 year with our annual hosting plans.  *JS change me* ";



const menuTarget = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

menuTarget.addEventListener('click', event => {
  event.preventDefault()
  menu.classList.toggle('hidden')
})