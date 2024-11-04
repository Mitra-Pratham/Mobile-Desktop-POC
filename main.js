import data from "./data.json" with { type: "json" };

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const rootMedium = document.querySelector(':root');
if (isMobile) {
    document.getElementById("header").innerText = "Mobile view loads with Cards";
    rootMedium.style.setProperty( '--template-column','repeat(1,1fr)');
    rootMedium.style.setProperty( '--label-show','block');
    rootMedium.style.setProperty( '--isMobile','true');
} else {
  document.getElementById("header").innerText = "Desktop view loads with a Table";
}

let htmlTable = data.map(function(el, index){
    let headerDiv = '';
   if(index==1 && isMobile == false){
    headerDiv = `<div class='row-card header'>${childrenDiv(el,true)}</div>`;
    $('#table').prepend(headerDiv);
   }
   let parentDiv = `<div class='row-card'>${childrenDiv(el, false)}</div>`;
   
     return parentDiv;
});

function childrenDiv(el, header){

    let tempDiv = '';
    let headerChildDiv = '';

    if(header == true){
        for (const [key] of Object.entries(el)) {
            headerChildDiv +=`<div class="row-card-details">${key}</div>`;
         }
         
         return headerChildDiv
    }
    for (const [key, value] of Object.entries(el)) {
        tempDiv +=`<div class="row-card-details"><span class="label">${key}: </span>${value}</div>`;
     }
    return tempDiv;
}

$('#table').append(htmlTable);
