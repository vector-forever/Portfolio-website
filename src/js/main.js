// Import all of Bootstrap's JS
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


const faders = document.querySelectorAll('.fade-in');
// const sliders = document.querySelectorAll('.slide-in');
const options = {
    threshold: 1,
    rootMargin: "0px 0px 125px 0px"

};

const appearonscroll = new IntersectionObserver
(function(
    enteries, 
    appearonscroll
    ) {
    enteries.forEach( entry => {
    if(!entry.isIntersecting){
        return;
    } else{
        entry.target.classList.add('appear');
        appearonscroll.unobserve(entry.target);
    }
});
}, 
options);

faders.forEach(fader => {
    appearonscroll.observe(fader)
});

// sliders.forEach(slider => {
//     appearonscroll.observe(slider)
// });

// const observer = new IntersectionObserver(entries =>{
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add('fade-in')

//         }
//     });
// });

// observer.observe(document.querySelector('.projects__row fade-in slide-in'));

