  
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const numOfConts = document.getElementsByClassName("landing__container").length;


//create the navigation list
const buildNavList = () => {
       let sectionName = '';
    sections.forEach(section =>{
        let sectionNameId = section.id;
        let sectionNavName = section.dataset.nav;
        sectionName += `<li><a class="menu__link" href="#${sectionNameId}">${sectionNavName}</a></li>`; 
    });

    navList.innerHTML = sectionName;
    
};

//calls the buildList function to build the navigation list
buildNavList();

//function to smooth scroll but I couldn't get it to work, any advice?
/**function scrollFunc(){
    const numOfSections = document.querySelectorAll('menu__link');
    numOfSections.forEach (link => {
        link.addEventListener('click', () => {
            for (i = 0; i < numOfSections; ++i ){
        numOfSections[i].scrollIntoView({behavior:'smooth'}); 
            };
        });
    });        
        
};*/

//event listener to find active section
window.addEventListener('scroll', isActive); 

//function adds/removes active section based upon return of isInView function
 function isActive() { 
     for (i = 0; i < sections.length; i++) {
         if(!isInView(sections[i])){
             sections[i].classList.remove('active');
         } else {
             sections[i].classList.add('active');
         }
     }
 }

//returns location on screen to isActive function in order to set active section
 const isInView = function (element) {
    let margins = element.getBoundingClientRect();
    return ( margins.top >= 0 && margins.bottom <= (window.innerHeight || document.documentElement.clientHeight));
};


