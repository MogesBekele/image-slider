const carouselSlide = document.querySelector('.carousel-slide')
const carouselImage = document.querySelectorAll('.carousel-slide img')

const prev = document.querySelector('#pre-button')
const next = document.querySelector('#next-button')


let counter =1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter)+ 'px)';

next.addEventListener('click', ()=>{
  if(counter>=carouselImage.length-1) return;
  carouselSlide.style.transform = 'transform 0.4s ease-in-out'
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size*counter)+ 'px)';

})

prev.addEventListener('click', ()=>{
  if(counter<=0) return;
  carouselSlide.style.transform = 'transform 0.4s ease-in-out'
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size*counter)+ 'px)';

})

carouselSlide.addEventListener('transitionend', ()=>{
  if (carouselImage[counter].id==='lastclone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImage.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size*counter)+ 'px)';

  }
  if (carouselImage[counter].id==='firstclone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImage.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size*counter)+ 'px)';

  }
});
























