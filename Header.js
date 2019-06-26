let navColor = document.querySelector('.hover');
navColor.addEventListener('mouseover', function(e) {
    event.target.style.color = 'black';
    event.target.style.border = '1px solid @main';
});