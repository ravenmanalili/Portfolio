
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
} 

document.getElementById('light').addEventListener('click', () => {
    document.documentElement.style.setProperty('---bg-color', 'white')
    document.documentElement.style.setProperty('--text-color', 'black')
    document.getElementById("light").className = "ri-moon-fill";
    var audio = new Audio("thief.mp3");
audio.play();
})



