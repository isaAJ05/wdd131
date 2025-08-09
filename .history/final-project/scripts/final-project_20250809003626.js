const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('.title');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    title.classList.toggle('open');
});
const container = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.arrow.left');
const next = document.querySelector('.arrow.right');

let index = 0;

next.addEventListener('click', () => {
  if (index < cards.length - 1) {
    index++;
    container.style.transform = `translateX(-${index * 90}%)`;
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    container.style.transform = `translateX(-${index * 90}%)`;
  }
});
