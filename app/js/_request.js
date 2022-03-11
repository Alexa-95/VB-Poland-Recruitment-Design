// loadDoc = (value) => {
//   let target = value.path[0].value;
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("main_content").innerHTML =
//       this.responseText;
//     }
//   };
//   xhttp.open("GET", `/${target}.html`, true);
//   xhttp.send();

//   window.history.pushState("", "", `${target.split("/").pop()}`);
//   app.setBodyClass();
// }


// document.getElementById('link').addEventListener('click', function(e) {
//   e.preventDefault();

//   var httpRequest = new XMLHttpRequest()
//   httpRequest.onreadystatechange = function () {
//     /* Kod wykonywany w przypadku powodzenia */
//     document.getElementById('content').innerHTML = this.responseText;
//     console.log(this);
//     history.pushState({foo:'bar'}, 'second page', 'page.html');
//   }
//   httpRequest.open('GET', this.href);
//   httpRequest.send();
// });