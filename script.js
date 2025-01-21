gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
// I have to write the CDN and here the plugin

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let control = document.getElementsByClassName("control");




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
gsap.from(".about-col-1, .about-col-2", {duration: 1, opacity: 0, y:"500px", scrollTrigger: ".about-col-1"})
gsap.to(".about-col-1, .about-col-2", {duration: 3, opacity: 1, scrollTrigger: ".about-col-1"})
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

function startLoader(){
    let number = document.querySelector('.number');
    let currentNumber = 0
    
    function updateCounter(){
        if(currentNumber === 100){
            return;
        }
    
        currentNumber += Math.floor(Math.random() * 10) + 1;
    
        if(currentNumber > 100){
            currentNumber = 100;
        }

        number.textContent = currentNumber;

        let delay = Math.floor(Math.random() * 500) + 100;
        setInterval(updateCounter, delay)
        
    }    
    updateCounter()
    
}
startLoader()

gsap.to('.number', {duration: 2, opacity: 0, delay: 2});
gsap.to('.bar', {duration:1.5, x:2500, delay:4, opacity: 0})
gsap.from('.control', {duration: 1, x:200, stagger: 0.2, ease: "power2.out", delay:5})

let tl = gsap.timeline({duration:2});

