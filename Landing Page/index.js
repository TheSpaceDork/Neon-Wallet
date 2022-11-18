// hamburger menu animation
 let menu = document.getElementById('menu');
    let navMenu = document.getElementById('menu-mobile');
function openNew() {
   
    menu.classList.toggle('openmenu');
    navMenu.classList.toggle('open');
    
    navMenu.style.transition="visibility 0.5s ";
}

// const menu = document.getElementById('menu');
// const navMenu = document.getElementById('menu-mobile');

// menu.addEventListener("click", () => {
    
//         menu.classList.toggle('openmenu');
//         navMenu.classList.toggle('navMobile');
// })

