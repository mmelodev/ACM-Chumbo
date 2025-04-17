const toggleButton = document.querySelector('.toggle-button')
const dropdown = document.querySelector('.dropdown-menu')

toggleButton.addEventListener('click', () => {
  dropdown.classList.toggle('top-16')
})

//--------------------

const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slider img')).filter(img => img.offsetParent !== null);

let currentIndex = 0;

function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  const slideWidth = slides[0].clientWidth;
  slider.scrollTo({
    left: slideWidth * currentIndex,
    behavior: 'smooth'
  });
}

setInterval(autoSlide, 4000);

