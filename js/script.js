

// document.getElementById("submit-btn").addEventListener("click", function() {
//     console.log(name);
//     console.log(email);
//     console.log(interest);
// });
// document.getElementById("next-btn").addEventListener("click", function() {
//     nextSlide();
// })

// CAROUSEL JS
const carouselSlides = document.querySelectorAll(".item");
let currentIndex = 0;
let interval = 3500;



function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add("active");
}

function startSlide() {
    setInterval(nextSlide, interval);
}

(function() {
    startSlide();
})()

function validateForm() {
    let nameValue = document.forms["contact-form"]["name"].value;

    // if(!nameValue) {
    //     document.getElementsByClassName("nameErrMsg").innerHTML = "Error";
    // }
    // else {
    //     document.getElementsByClassName("nameErrMsg").innerHTML = "Error";
    // }
    
    console.log(nameValue);
   
}


