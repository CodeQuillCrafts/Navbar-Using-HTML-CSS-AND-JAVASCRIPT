const hamburger = document.getElementsByClassName('hamburger')[0];
const ul = document.querySelector('ul');
const bars = document.querySelectorAll('.bar');

hamburger.addEventListener('click', function (event) {
    ul.classList.toggle("open");
    bars[0].classList.toggle("first");
    bars[1].classList.toggle("second");
    bars[2].classList.toggle("third");
});