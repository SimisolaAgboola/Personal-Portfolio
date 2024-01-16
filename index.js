const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('change');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('change');
    })
});

document.getElementById(".nav-toggle").addEventListener("click", function() {
  document.body.classList.toggle("background-changed");
});


// JavaScript code for horizontal scrolling
const cardSection = document.querySelector('.card-section');
const cards = document.querySelectorAll('.card_port');
const scrollSpeed = 2;

let scrollPos = 0;

function scrollRight() {
  scrollPos += scrollSpeed;
  cardSection.scrollTo(scrollPos, 0);
  if (scrollPos < cardSection.scrollWidth - cardSection.clientWidth) {
    requestAnimationFrame(scrollRight);
  }
}

function scrollLeft() {
  scrollPos -= scrollSpeed;
  cardSection.scrollTo(scrollPos, 0);
  if (scrollPos > 0) {
    requestAnimationFrame(scrollLeft);
  }
}

cardSection.addEventListener('mouseenter', () => {
  cancelAnimationFrame(scrollRight);
  cancelAnimationFrame(scrollLeft);
});
    
cardSection.addEventListener('mouseleave', () => {
  if (scrollPos < cardSection.scrollWidth - cardSection.clientWidth) {
    requestAnimationFrame(scrollRight);
  }
});

scrollRight();
    

    