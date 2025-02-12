const words = document.querySelectorAll('.words');
let currentWordIndex = 0;

function showNextWord() {
  words.forEach((word, index) => {
    if (index === currentWordIndex) {
      word.classList.add('active');
    } else {
      word.classList.remove('active');
    }
  });

  currentWordIndex = (currentWordIndex + 1) % words.length;
}

showNextWord();
setInterval(showNextWord, 2000);
const circles = document.querySelectorAll('.circle');

circles.forEach(elem => {
  const dots = parseInt(elem.getAttribute("data-dots"));
  const marked = parseInt(elem.getAttribute("data-percent"));
  const percent = Math.floor(dots * marked / 100);
  let points = "";
  const rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${i * rotate}deg"></div>`;
  }

  elem.innerHTML = points;
  
  const pointsMarked = elem.querySelectorAll('.points');
  
  const pointMarked=elem.querySelectorAll('.points');
  for( let i =0; i<percent; i++)
  pointsMarked[i].classList.add('marked')
});
// mix it up projrct setion----------------
var mixer=mixitup('.portfolio-gallery')
//active navbar----------
let menuLinks = document.querySelectorAll('header ul li a');


let sections = document.querySelectorAll('section');


function activateMenu() {
  
  let scrollPosition = window.scrollY + 97;

  sections.forEach((sec, index) => {
    if (scrollPosition >= sec.offsetTop) {
    
      menuLinks.forEach(link => link.classList.remove('active'));

      menuLinks[index].classList.add('active');
    }
  });
}
activateMenu();
window.addEventListener("scroll", activateMenu);


const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 50);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("show-items");
      } else {
          entry.target.classList.remove("show-items");
      }
  });
});

const scrollScales = document.querySelectorAll(".scroll-scale"); // Use querySelectorAll
scrollScales.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));




let menuIcon=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');
menuIcon.onclick=()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}



window.onscroll=()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}
