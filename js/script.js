document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        document
        .querySelector(link.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});



/* HERO SLIDER */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 4000);



/* TOUR ACCORDION */

document.querySelectorAll(".tour-card").forEach(card => {

    card.addEventListener("click", function(e){

        if(e.target.tagName === "A"){
            return;
        }

        this.classList.toggle("active");

        const arrow =
        this.querySelector(".tour-arrow");

        arrow.textContent =
        this.classList.contains("active")
        ? "+"
        : "+";

    });

});