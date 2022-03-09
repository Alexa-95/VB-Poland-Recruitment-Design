console.log("Load script.js");

// Instantiating the global app object
var app = {};


//HAMBURGER MENU
document.getElementById('hide-show_menu').addEventListener('click', function(){
  this.classList.toggle("active");
});

//TU DODAĆ ONLOAD
//check window width
let windowSize = function(){
  if(window.innerWidth < 760){
    document.getElementById('hide-show_menu').style.display = 'inline-flex';
    // document.getElementsByClassName('nav_conent-menu')[0].classList.add('open');
    [...document.getElementsByClassName('nav_conent-menu')].forEach(function(e){
      return e.classList.add('menu-toggle');
    });
  }
  else{
    document.getElementById('hide-show_menu').style.display = 'none';
    [...document.getElementsByClassName('nav_conent-menu')].forEach(function(e){
      return e.classList.remove('menu-toggle');
    });
  }
}

//show/hide hamburger menu on resize 
window.addEventListener("resize", windowSize());
