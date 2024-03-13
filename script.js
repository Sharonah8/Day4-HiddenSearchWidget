const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    // toggles the class, adds or removes it
    search.classList.toggle('active');
    input.focus();
})