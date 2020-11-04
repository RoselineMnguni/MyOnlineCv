/*----- SCROLL REVEAL ANIMATION -----*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*------ SCROLL HOME -------*/
sr.reveal('.home' ,{});  
sr.reveal('.socialmedia-handles',{ interval: 200}); 

/*------ SCROLL ABOUT --------*/
sr.reveal('.profile-img',{}); 
sr.reveal('.section-title',{delay:200});
sr.reveal('.About-subtitle',{delay: 200}); 
sr.reveal('.About-text',{delay: 400});

/*------ SCROLL Profile--------*/
sr.reveal('.profile-title',{});  
sr.reveal('.academic-timeline',{ interval: 200}); 

/*------ SCROLL Services--------*/
sr.reveal('.service-title',{});  
sr.reveal('.service-item',{ interval: 200}); 

/*------- SCROLL Interents---------*/
sr.reveal('.interest-title',{});
sr.reveal('.interest-img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact-input',{interval: 200}); 
