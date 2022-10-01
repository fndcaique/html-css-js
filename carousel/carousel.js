const btnNext = document.querySelector('.carousel-btn.next');
const slidesLI = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

slidesLI[0].classList.add('active');
slidesLI[1].classList.add('next');

const getNextIndex = (currentIndex, arrayLenght) => {
  if (currentIndex + 1 < arrayLenght) {
    return currentIndex + 1;
  }
  return 0;
};

btnNext.addEventListener('click', () => {
  const activeSlide = document.querySelector('.slide.active');
  const currentNextSlide = document.querySelector('.slide.next');

  const newIndex = getNextIndex(currentSlideIndex, slidesLI.length);
  const nextIndex = getNextIndex(newIndex, slidesLI.length);

  slidesLI[newIndex].classList.add('active');
  slidesLI[nextIndex].classList.add('next');

  activeSlide.classList.remove('active');
  currentNextSlide.classList.remove('next');

  currentSlideIndex = newIndex;
});
