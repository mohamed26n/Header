var header = document.querySelector("header");
let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

    menu.onclick = () =>{
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    }



window.addEventListener('scroll', function(){
if(window.pageYOffset > 0) {
header.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
} else {
header.style.backgroundColor = "transparent"; 
}
});