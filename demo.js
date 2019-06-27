const bookBtn = document.querySelector(".bookBtn");
const inputs = form.querySelectorAll("input");

bookBtn.addEventListener('click', event => {
    event.target.textContent = "Booked!";
    event.preventDefault();
});