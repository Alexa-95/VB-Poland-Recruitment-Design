

// Instantiating the global app object
class App {
  constructor({dir, hamburgerButton}){
    this.dir = dir;
    this.hamburgerButton = hamburgerButton;
  }

  //open hamburger menu, toggle class active
  toggleClassActive(){
    this.classList.toggle("active");
  };

  //navigation url
  getPathname = () => {

    let path = this.dir.split('/').filter(e => {return e !== '' && e != 'pages'}).join('/');
    let newPath = path.split('/').map((e) => {
      return e = `<a href="/${e}">${e}</a>`
    }).join(" ").split('.').slice(0, -1).join('.');

    [...document.getElementsByClassName('navigation-bar')].forEach(function(e){
      e.innerHTML = `<a href="/">HOME</a> ${newPath}`; 
    });
    
  }

  //change style depends on window width
  windowSize = () => {
    if(window.innerWidth < 760){
      this.hamburgerButton.style.display = 'inline-flex';
      [...document.getElementsByClassName('nav_conent-menu')].forEach(function(e){
        e.classList.add('menu-toggle');
      });
    }
    else{
      this.hamburgerButton.style.display = 'none';
      [...document.getElementsByClassName('nav_conent-menu')].forEach(function(e){
        e.classList.remove('menu-toggle');
      });
    }
  };

  run(){
    this.getPathname();
    this.windowSize();

    window.addEventListener("resize", this.windowSize);

    document.getElementById('hide-show_menu').addEventListener('click', this.toggleClassActive);
  }
};

const app = new App({
  dir: window.location.pathname,
  hamburgerButton: document.getElementById('hide-show_menu')
});

app.run();
