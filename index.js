const loader = document.querySelector('.loader');
const continueBtn = document.querySelector('#devametbutonu');

continueBtn.addEventListener('click', () => {
  loader.classList.add('active');
  setTimeout(() => {
    window.location.href = 'anasayfa.html';
  }, 3000);
});
