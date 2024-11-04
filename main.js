import data from "./data.json" with { type: "json" };

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const rootMedium = document.querySelector(':root');
if (isMobile) {
    document.getElementById("header").innerText = "Mobile; Loads with a Card view";
    rootMedium.style.setProperty( '--template-column','repeat(1,1fr)');
    rootMedium.style.setProperty( '--label-show','block');
    rootMedium.style.setProperty( '--isMobile','true');
} else {
  document.getElementById("header").innerText = "Desktop; Loads with a Table view";
}

let htmlTable = data.map(function(el, index){
    let headerDiv = '';
   if(index==1 && isMobile == false){
    headerDiv = `<div class='header'>${childrenDiv(el,true)}</div>`;
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
        if(key === 'Name'){
            tempDiv +=`<div class="row-card-details"><span class="label">${key}: </span><a href="#" onclick="openPanel('${value}')">${value}</a></div>`;
        }
        else{
            tempDiv +=`<div class="row-card-details"><span class="label">${key}: </span>${value}</div>`;
        }
     }
    return tempDiv;
}

$('#table').append(htmlTable);
