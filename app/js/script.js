

// Instantiating the global app object
class App {
  constructor({dir, hamburgerButton, redirectButton}){
    this.dir = dir;
    this.hamburgerButton = hamburgerButton;
    this.redirectButton = redirectButton;
  }

  //open hamburger menu, toggle class active
  toggleClassActive(){
    this.classList.toggle("active");
  };

  //navigation url
  getPathname = () => {
    let path = this.dir.split('/').filter(e => {return e !== '' && e != 'pages'}).join('/');
    let newPath = path.split('/').map((e) => {
      if(e.split(".html").length > 1){
        return e = `  /  <a href="${this.dir}">${e}</a>`
      }
      else{
        let link = this.dir.split(e).shift();
        return e = `  /  <a href="${link}${e}.html">${e}</a>`
      }
    })
    .join(" ").split('.').slice(0, -1).join('.')
    ;

    [...document.getElementsByClassName('navigation-bar')].forEach(function(e){
      e.innerHTML = `<a href="/">HOME</a> ${newPath}`; 
    });    
  }

  //get class name by path
  setBodyClass = () => {
    document.body.removeAttribute("class");
    if(this.dir == '/'){
      document.body.classList.add('main');
    }
    else{
      let path = this.dir.split("/").pop().split(".").shift();
      document.body.classList.add(path);
    }
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
    this.setBodyClass();
    this.windowSize();

    //event listeners
    window.addEventListener("resize", this.windowSize);
    document.getElementById('hide-show_menu').addEventListener('click', this.toggleClassActive);

    Array.from(this.redirectButton).forEach((element) => {
      element.addEventListener('click', collection);
    });
    window.onload = collection;
  }
};

const app = new App({
  dir: window.location.pathname,
  hamburgerButton: document.getElementById('hide-show_menu'),
  redirectButton: document.getElementsByClassName('redirect')
});

app.run();
