import data from "./data.json" with { type: "json" };

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const rootMedium = document.querySelector(':root');
if (isMobile) {
    document.getElementById("header").innerText = "yes, Mobile so seeing cards";
    rootMedium.style.setProperty( '--template-column','repeat(1,1fr)');
    rootMedium.style.setProperty( '--label-show','block');
} else {
  document.getElementById("header").innerText = "Nope, not mobile so seeing table";
}

let htmlTable = data.map(function(el){
    
   let parentDiv = `<div class='level-1'>${childrenDiv(el)}</div>`
      return parentDiv;
});

function childrenDiv(el){
    let tempDiv = '';
    for (const [key, value] of Object.entries(el)) {
        tempDiv +=`<div class="level-2"><span class="label">${key}: </span>${value}</div>`;
     }
    return tempDiv;
}

$('#table').append(htmlTable);
