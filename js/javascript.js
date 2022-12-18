/* burger menuen */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
/* ved klik på en navigation, fjernes nav-menuen og burgermenuen */
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

/* scroll var */
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
/* for at se hvor man er i scroll */
console.log(scroll);
/* Når den når forbi 500 scroll, skal opacitry påvirkes */
if(scroll > 500){
document.getElementsByClassName("kontaktinfo").style.opacity = '100%';
document.getElementsByClassName("kontaktinfo").style.transition = '2.5s';
} else{
  document.getElementsByClassName("kontaktinfo").style.opacity = 0;
  document.getElementsByClassName("kontaktinfo").style.transition = '2.5s';
}
})
/* se flere events knap */
window.onload = function(){ 
  document.getElementById("moreBtn").onclick = function() {
    document.getElementById("more").style.display = "flex";
  }
};
/* faciliteter slideshow  */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}