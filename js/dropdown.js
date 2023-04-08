const navigation = document.querySelector('.navigation');
const navOpener = document.querySelector('.navigation__opener');

navOpener.addEventListener('click', () => {
    navigation.classList.toggle('isOpen');
})