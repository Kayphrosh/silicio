const tl = gsap.timeline({defaults: { ease: "power1.out"} });

tl.to('.text', {y: "0%", duration: 2.5, stagger: 0.2});
tl.to('.slider', { y: "-100%", duration: 1, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");



const TypeWriterP = function(txtElementP, wordsP, waitP = 500) {
    this.txtElementP = txtElementP;
    this.wordsP = wordsP;
    this.txtP = '';
    this.wordIndexP = 0;
    this.waitP = parseInt(waitP, 100);
    this.typeP();
    this.isDeleting = false;
    this.offset = 320;
  }
  
  // TYPE METHOD
  
  TypeWriterP.prototype.typeP = function() {
    // console.log('heloo');
    
    // Current Index Words 
    const current = this.wordIndexP % this.wordsP.length;
  
    // // Get full text of current word
    const fullTxt = this.wordsP[current]
  
    // Check if deleting
    if(this.isDeleting){
        //Remove Character
        this.txt = fullTxt.substring(0, this.txtP.length - 14)
    }
    else {
        //Add Character
        this.txtP = fullTxt.substring(0, this.txtP.length + 1)
    }
    // Insert text into an element
    this.txtElementP.innerHTML = `<span class="txt-p">${this.txtP}</span>`;
  
    // Type Speed
    let typeSpeed = 1000;
  
    if(this.isDeleting) {
        typeSpeed /= 2;
    }
  
    // If word is complete
    if(!this.isDeleting && this.txtP === fullTxt) {
        // Make pause at end
        // typeSpeed = this.wait;
        //Set delete to true
        // this.isDeleting = true;
    }
    else if (this.isDeleting && this.txtP === '' ){
        this.isDeleting = false;
        //Move to the Next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 200;
    }
        
    setTimeout(() => this.typeP(), 50)
  }
  
  
  // INIT on DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init(){
    const txtElementP = document.querySelector('.txt-type-p');
    const wordsP = JSON.parse(txtElementP.getAttribute('data-words-p'));
    const waitP = txtElementP.getAttribute('data-wait');
  
    //Init Typewriter
    new TypeWriterP(txtElementP, wordsP, waitP);
  }


function toggle() {
    var x = document.querySelector(".enroll-form")
    if( x.style.display === "block") {
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
        x.style.transform = "translateX(-50%)";
        x.style.transition = "all 1s ease-in"
    }
}




const body = document.querySelector('.showcase');
const slides = document.querySelectorAll('.slide');



let activeSlide = 0
let interval = setInterval(run, 2000)


function run(){
    activeSlide++
    changeImage()
    resetInterval()
}
function changeImage() {
    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    else if (activeSlide < 0) {
        activeSlide = slides.length - 1

    }
    setBgToBody()
    setActiveSlide()
    resetInterval()
}


function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}
function setBgToBody(){
    body.style.backgroundColor = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}

