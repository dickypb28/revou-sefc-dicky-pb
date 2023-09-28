


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

const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const interest = document.getElementById('interest');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const interestValue = interest.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    }
    else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    }
    else {
        setSuccess(email);
    }

    if(interestValue === '') {
        setError(interest, 'Interest is required');
    }
    else {
        setSuccess(interest);
    }
};


