let selectField = document.querySelector('.select__field');
let selectOptions = document.querySelector('.select__options');
let options = document.getElementsByClassName('option');
let languageSelect = document.querySelector('.language-select');
let selectIcon = document.querySelector('.select__icon');
let mobile__menu = document.querySelector('.mobile__menu');

selectField.prepend(options[0].firstElementChild.cloneNode(true));

for (let option of options) {
  option.addEventListener('click', () => {
    let fch = option.firstElementChild;
    let clone = fch.cloneNode(true);
    selectField.firstElementChild.replaceWith(clone);
    selectOptions.classList.toggle('hidden');
    selectIcon.classList.toggle('rotate');
  });
}
selectField.addEventListener('click', () => {
  selectOptions.classList.toggle('hidden');
  selectIcon.classList.toggle('rotate');
});

document.addEventListener('mouseup', function (e) {
  if (!languageSelect.contains(e.target)) {
    selectOptions.classList.add('hidden');
    selectIcon.classList.toggle('rotate');
  }
});

// menu

function toggleMenu() {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
}
const hamburger = document.querySelector('.mobile__hamburger');
hamburger.addEventListener('click', toggleMenu);

const navList = document.querySelector('.navList');
navList.addEventListener('click', toggleMenu);

document.addEventListener('mouseup', function (e) {
  if (!hamburger.contains(e.target)) {
    hamburger.classList.remove('open');
    navList.classList.remove('open');
  }
});
