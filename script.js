let hamburger = document.querySelector('.fa-bars');
let cross = document.querySelector('.fa-times');
let menu = document.querySelector('.menu');
hamburger.onclick = () =>{
    menu.style.right = '0';
    cross.classList.remove('hide');
    hamburger.classList.add('hide');
}
cross.onclick = () =>{
    menu.style.right = '-100vw';
    cross.classList.add('hide');
    hamburger.classList.remove('hide');
}