
loadDoc = (path) =>{
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main_content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", path, true);
  xhttp.send();
  // window.history.pushState("", "", path);
  collection;
}