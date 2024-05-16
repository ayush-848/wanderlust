document.addEventListener('DOMContentLoaded', function () {
    const forwardArrow = document.querySelector('.next-btn');
    const backwardArrow = document.querySelector('.back-btn');
    const travelCards = document.querySelector('.travel-cards');

    forwardArrow.addEventListener('click', () => {
        travelCards.scrollBy({ left: travelCards.clientWidth / 3, behavior: 'smooth' });
    });

    backwardArrow.addEventListener('click', () => {
        travelCards.scrollBy({ left: -travelCards.clientWidth / 3, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 600) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

function submitForm() {
    let parms={
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send('service_i37mtii', 'template_dghcw1r', parms).then(alert("Email.sent!!"))
}
