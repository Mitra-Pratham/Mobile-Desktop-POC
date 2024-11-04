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

let htmlTable = data.map(function(el, index){
    let headerDiv = '';
   if(index==1 && isMobile == false){
    headerDiv = `<div class='level-1 header'>${childrenDiv(el,true)}</div>`;
    $('#table').prepend(headerDiv);
   }
   let parentDiv = `<div class='level-1'>${childrenDiv(el, false)}</div>`;
   
     return parentDiv;
});

function childrenDiv(el, header){

    let tempDiv = '';
    let headerChildDiv = '';

    if(header == true){
        for (const [key] of Object.entries(el)) {
            headerChildDiv +=`<div class="level-2">${key}</div>`;
         }
         
         return headerChildDiv
    }
    for (const [key, value] of Object.entries(el)) {
        tempDiv +=`<div class="level-2"><span class="label">${key}: </span>${value}</div>`;
     }
    return tempDiv;
}

$('#table').append(htmlTable);
