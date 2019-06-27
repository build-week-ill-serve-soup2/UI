const bookBtn = document.querySelector(".bookBtn");

bookBtn.addEventListener('click', event => {
    event.target.textContent = "Booked!";
    event.target.preventDefault();
});