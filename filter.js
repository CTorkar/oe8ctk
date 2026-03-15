/*
========================================
PROJECT GRID GENERATOR & FILTER
========================================
*/
function loadProjects(){
    let grid = document.getElementById("projectGrid");
    projects.forEach(p => {
        let tags = p.tags.join(" ");
        grid.innerHTML += `
        <a href="${p.link}">
        <div class="card" data-tags="${tags}">
            <img src="${p.image}">
            <div class="title">${p.title}</div>
            <div class="overlay">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
            </div>
        </div>
        </a>
        `;
    });
}
loadProjects();

function filterProjects(tag){
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let tags = card.getAttribute("data-tags");
        if(tag === "all" || tags.includes(tag))
            card.parentElement.style.display="block";
        else
            card.parentElement.style.display="none";
    });
}
