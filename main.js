import data from "./data.json" with { type: "json" };

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const rootMedium = document.querySelector(':root');
if (isMobile) {
    document.getElementById("header").innerText = "Mobile; Loads with a Card view";
    rootMedium.style.setProperty('--template-column', 'repeat(1,1fr)');
    rootMedium.style.setProperty('--label-show', 'block');
    rootMedium.style.setProperty('--isMobile', 'true');
} else {
    document.getElementById("header").innerText = "Desktop; Loads with a Table view";
}

let htmlTable = data.map(function (el, index) {
    let headerDiv = '';
    if (index == 1 && isMobile == false) {
        headerDiv = `<div class='header'>${childrenDiv(el, true)}</div>`;
        $('#table').prepend(headerDiv);
    }
    let parentDiv = `<div class='row-card'>${childrenDiv(el, false)}</div>`;

    return parentDiv;
});

function childrenDiv(el, header) {

    let tempDiv = '';
    let headerChildDiv = '';

    if (header == true) {
        for (const [key] of Object.entries(el)) {
            if (key != 'Description') {
                headerChildDiv += `<div class="row-card-details">${key}</div>`;
            }
        }
        return headerChildDiv
    }

    for (const [key, value] of Object.entries(el)) {
        if (key === 'Name') {
            tempDiv += `<div class="row-card-details"><span class="label">${key}: </span><a href="javascript:void(0)" class="name-link">${value}</a></div>`;
        }
        else if (key != 'Description') {
            tempDiv += `<div class="row-card-details"><span class="label">${key}: </span>${value}</div>`;
        }
    }
    return tempDiv;
}

$('#table').append(htmlTable);


$('.name-link').on('click', function (e) {
    $('#sidepanel').show();
    let tempObj = data.find(el => {
        return el.Name === $(this).text();
    });
    let tempDetails = '';
    $('#sidepanel h3').text(tempObj.Name);
    for (const [key, value] of Object.entries(tempObj)) {
        tempDetails += `<div class="row-card-details"><span class="label">${key}: </span>${value}</div>`;
    }
    $('#panel-details').empty();
    $('#panel-details').append(tempDetails);
})

$('#close-panel').on('click', function () {
    $('#sidepanel').hide();
})
