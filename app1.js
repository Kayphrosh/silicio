const scrollUpbtn = document.getElementById('scroll-up-btn');

window.addEventListener('scroll', runEvent)

function runEvent (e) {
    scrollUpbtn.classList.toggle('active', window.scrollY > 100 )


    e.preventDefault();
}
function scrollToTop(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    e.preventDefault()
}


const faqToggle = document.querySelectorAll('.faq-toggle')

faqToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle ('faq-active')
  })
})
const readmoreToggle = document.querySelectorAll('.read-more-btn')

readmoreToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle ('read-active')
  })
})



const TypeWriter = function(txtElement, words, wait=3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 3000);
  this.type();
  this.isDeleting = false;
  this.offset = 320;
}

// TYPE METHOD

TypeWriter.prototype.type = function() {
  
  // Current Index Words 
  const current = this.wordIndex % this.words.length;

  // // Get full text of current word
  const fullTxt = this.words[current]

  // Check if deleting
  if(this.isDeleting){
      //Remove Character
      this.txt = fullTxt.substring(0, this.txt.length - 14)
  }
  else {
      //Add Character
      this.txt = fullTxt.substring(0, this.txt.length + 1)
  }
  // Insert text into an element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Type Speed
  let typeSpeed = 1000;

  if(this.isDeleting) {
      typeSpeed /= 2;
  }

  // If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      // typeSpeed = this.wait;
      //Set delete to true
      // this.isDeleting = true;
  }
  else if (this.isDeleting && this.txt === '' ){
      this.isDeleting = false;
      //Move to the Next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 200;
  }
      
  setTimeout(() => this.type(), 50)
}


// INIT on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  //Init Typewriter
  new TypeWriter(txtElement, words, wait);
}




let toggleNavstatus = false;

let toggleNav = function() {
    let getNavcontainer = document.querySelector(".nav-container")
    let getNavbar = document.querySelector(".nav-active")
    let getNavbars = document.querySelector(".nav-active-bottom")
    let getNavbarLinks = document.querySelectorAll(".nav-bar ul")
    let getLogo = document.querySelector(".logo-main")
    if (window.innerWidth > 768 || toggleNavstatus === false) {
        getNavbar.style.visibility = "visible";
        getNavbars.style.visibility = "visible";
        getNavbar.style.display = "block"
        getNavbars.style.display = "block"
        getNavcontainer.style.height = "430px";
        getNavcontainer.style.background = "#f4f4f4";
        getNavcontainer.style.paddingTop = "2rem"
        getNavcontainer.style.overflow = "hidden"
        getLogo.style.top = "2.2rem"
        toggleNavstatus = true;
        getNavbarLinks.style.display = "block";
    }
    else if (toggleNavstatus === true) {
        getNavbar.style.visibility = "hidden";
        getNavbars.style.visibility = "hidden";
        getNavbar.style.display = "none"
        getNavbars.style.display = "none"
        getNavcontainer.style.height = "0";
        getNavcontainer.style.background = "transparent";
        getNavcontainer.style.paddingTop = "0rem"
        toggleNavstatus = false;
        getNavbarLinks.style.display = "block";
    }
}


