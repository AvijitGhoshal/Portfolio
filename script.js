/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const form=document.querySelector("form");
form.addEventListener("submit",()=>{
    alert("Your massage has been sent successfully!!!");
});


 const toggleBtn = document.getElementById("themeToggle");

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Toggle icon
      if (document.body.classList.contains("dark-mode")) {
        toggleBtn.classList.remove("fa-moon");
        toggleBtn.classList.add("fa-sun");
      } else {
        toggleBtn.classList.remove("fa-sun");
        toggleBtn.classList.add("fa-moon");
      }
    });


const scrollBtn=document.getElementById("scrollToTopBtn");
window.onscroll=function(){
    if(document.body.scrollTop>200||document.documentElement.scrollTop>250){
        scrollBtn.style.display="block";
    }else{
        scrollBtn.style.display="none";
    }
};
scrollBtn.onclick=function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

