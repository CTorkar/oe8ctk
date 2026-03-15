/*
========================================
AUTOMATIC PROJECT SLIDER
Uses first 3 projects
========================================
*/
let slideIndex = 0;

function buildSlider(){
    let slider = document.getElementById("slider");
    projects.slice(0,3).forEach(p => {
        slider.innerHTML += `
        <div class="slide">
            <img src="${p.image}">
            <div class="caption">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
            </div>
        </div>
        `;
    });
}
buildSlider();

function showSlides(){
    let slides = document.getElementsByClassName("slide");
    for(let i=0;i<slides.length;i++) slides[i].style.display="none";
    slideIndex++;
    if(slideIndex>slides.length) slideIndex=1;
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,10000);
}
showSlides();
