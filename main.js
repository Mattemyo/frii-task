// MOBILE NAVBAR
const mobileNavLinks = document.querySelector('div.nav-links');
const hamburgerDiv = document.querySelectorAll('#hamburger')[0];
const navbarToggleIcons = document.querySelectorAll('#hamburger i');

hamburgerDiv.addEventListener('click', () => {
  [...navbarToggleIcons, mobileNavLinks].forEach((element) =>
    element.classList.toggle('hidden')
  );
});

//  PAGE 2
const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('total-price');

const price = 99;

quantity.addEventListener(
  'input',
  (e) => (totalPrice.textContent = e.target.value * price)
);
