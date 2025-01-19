gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
// I have to write the CDN and here the plugin

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    // tablink is a collection of tab-links and iterates over all tabs
    
    for(i=0; i<tablinks.length; i++){
        tablinks[i].classList.remove("active-link")
    }

    for(i = 0; i < tabcontents.length; i++){
        tabcontents[i].classList.remove("active-tab")
    }
// Add the 'active-link' class to the clicked tab - refers to the element that triggered the event
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


document.querySelector(".control-1").addEventListener("click", () => {
    gsap.to(window, { duration: 2, scrollTo: "#header" });
});
document.querySelector(".control-2").addEventListener("click", () => {
    gsap.to(window, { duration: 2, scrollTo: "#about" });
});
document.querySelector(".control-3").addEventListener("click", () => {
    gsap.to(window, { duration: 2, scrollTo: "#services" });
});
document.querySelector(".control-5").addEventListener('click', () =>{
    gsap.to(window, {duration: 2, scrollTo: "#contact"})
})

// ScrollTriger Basics
gsap.to(".about-col-1", {duration: 2.5, x: 900, scrollTrigger: ".about-col-1"})
gsap.to(".about-col-2", {duration: 2, y: -50 ,x: -600, scrollTrigger: ".about-col-2"})
gsap.to(".c", { 
    scrollTrigger: {
        trigger:".c",
        start: "0px 92%",
        markers: true,
        toggleActions: "restart pause resume pause", 
        // toggleActions: "restart pause reverse none", 

        // play, pause, resume, reverse, restart, reset, complete, none
}, 
    duration: 2, 
    rotation: 360,
    x: 100,
});

// Toogle Actions