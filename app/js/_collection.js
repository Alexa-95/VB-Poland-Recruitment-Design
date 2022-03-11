//CONTAINER FOR LIST OF COLLECTION
const container = document.getElementById("main_content-collection");
const containeritem = document.getElementById("item_content-page");

function collection(){

  fetch("/items.json")
  .then(res => res.json())
  .then(data => {
    const jsonArray = data.items;
    
    //LIST OF COLLECTION
    if(container){
      jsonArray.forEach((e) => {
        let item = document.createElement("div");
        item.classList.add("main_content-collection--item");
        item.innerHTML = `
        <a href="/pages/collection/item.html#${e.id}">
        <div class="item-img">
        <img src="${e.img}" alt="${e.title}" width="295" height="315">
        </div>
        <h3>${e.title}</h3>
        </a>
        `;
        container.appendChild(item);
      });  
    }
    
    if(containeritem){
      const index = parseInt(window.location.hash.split('#').pop());
      let item = document.createElement("div");
      let e = jsonArray[index - 1];
      item.classList.add("item-inner");
      item.innerHTML = `
      <h1>${e.title}</h1>
      <div class="item_content">
      <img src="${e.img}" alt="${e.title}" width="623" height="644">
      <div class="item_content-text">
      <h2>${e.sectiontitle}</h2>
      <p class="main_content-text">
      ${e.text}
      </p>
      </div>
      </div>
      `;
      containeritem.appendChild(item);
    }
  })
  .catch(e => console.error(e));
 
}