const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1 = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    h1.classList.toggle('open');
});