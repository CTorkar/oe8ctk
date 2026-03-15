/*
========================================
LIGHTBOX GALLERY
Add to any project page:
<div class="gallery">
    <img src="image1.jpg">
    <img src="image2.jpg">
</div>
Include this script at the end of the page.
========================================
*/
document.addEventListener("DOMContentLoaded", function(){
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function(){
            openLightbox(img.src);
        });
    });
});

function openLightbox(src){
    let lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <span class="close">&times;</span>
        <img src="${src}">
    `;
    document.body.appendChild(lightbox);
    lightbox.querySelector(".close").onclick = function(){ lightbox.remove(); }
    lightbox.onclick = function(e){ if(e.target === lightbox){ lightbox.remove(); } }
    document.addEventListener("keydown", function(e){
        if(e.key === "Escape"){ lightbox.remove(); }
    });
}
