
const afficherMenu = document.querySelector('#afficherMenu');
const disparaitreMenu = document.querySelector('#disparaitreMenu');
const barMenu = document.querySelector('#barMenu');

afficherMenu.addEventListener('click', () => {
    afficherMenu.style.display = "none";
    disparaitreMenu.style.display = "block";
    barMenu.style.display = "block";
})

disparaitreMenu.addEventListener('click', () => {
    disparaitreMenu.style.display="none"; 
    afficherMenu.style.display="block"; 
    barMenu.style.display="none";
})



