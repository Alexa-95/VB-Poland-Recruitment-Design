

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
  setBodyClass = (value) => {
    document.body.removeAttribute("class");
    if(value){
      document.body.classList.add(value.split('/').pop())
    }
    else{
      if(this.dir == '/'){
        document.body.classList.add('main');
      }
      else{
        let path = this.dir.split("/").pop().split(".").shift();
        document.body.classList.add(path);
      }
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

  loadDoc = (value) => {
    let target = value.path[0].value;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main_content").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", `/${target}.html`, true);
    xhttp.send();
  
    window.history.pushState("", "", `${target.split("/").pop()}`);
  };

  run(){
    this.getPathname();
    this.setBodyClass();
    this.windowSize();

    //event listeners
    window.addEventListener("resize", this.windowSize);
    document.getElementById('hide-show_menu').addEventListener('click', this.toggleClassActive);

    Array.from(this.redirectButton).forEach((element) => {
      element.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(this.pathname)
        let target = this.pathname;
      
        var httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function () {
          document.getElementById("main_content").innerHTML = this.responseText;
          console.log(this);
          history.pushState({foo:'bar'}, target, target);
        }
        httpRequest.open('GET', this.href);
        httpRequest.send();
      });
    });

  }
};

const app = new App({
  dir: window.location.pathname,
  hamburgerButton: document.getElementById('hide-show_menu'),
  redirectButton: document.getElementsByClassName('redirectCollection')
});

app.run();
