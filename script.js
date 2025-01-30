
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
// I have to write the CDN and here the plugin

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let control = document.querySelectorAll(".control");
let sections = ['#header',  ".fidi", '#about', '#services', '#contact']

function opentab(tabname){
    
    for(i=0; i<tablinks.length; i++){
        tablinks[i].classList.remove("active-link")
    }

    for(i = 0; i < tabcontents.length; i++){
        tabcontents[i].classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// Select the control for the #header section
const headerControl = document.querySelector(".control-1");
const aboutControl = document.querySelector(".control-2");
const journeyControl = document.querySelector(".control-3")
const servicesControl = document.querySelector(".control-4")
const contactControl = document.querySelector(".control-5")


// Add click event for smooth scrolling to #header
headerControl.addEventListener("click", () => {
    headerControl.classList.add("active-control");
    gsap.to(window, { duration: 1, scrollTo: sections[0], ease:'back.inOut'});
});
aboutControl.addEventListener("click", () => {
    aboutControl.classList.add("active-control"); // Add active class when entering
    gsap.to(window, { duration: 1, scrollTo: sections[1], ease:'elastic.inOut'});
});
journeyControl.addEventListener("click", () =>{
    journeyControl.classList.add("active-control");
    gsap.to(window, {duration: 1, scrollTo: sections[2], ease: 'power2.in'})
})
servicesControl.addEventListener("click", () =>{
    servicesControl.classList.add("active-control");
    gsap.to(window, {duration: 1, scrollTo: sections[3]})
})
contactControl.addEventListener("click", () =>{
    contactControl.classList.add("active-control");
    gsap.to(window, {duration: 1, scrollTo: sections[4]})
})

// Use ScrollTrigger to update the control dynamically on scroll
ScrollTrigger.create({
  trigger: sections[0], 
  start: "top center", 
  end: "bottom center", 
  onEnter: () =>{
    headerControl.classList.add("active-control"); 
  },
  onLeave: () => {
    headerControl.classList.remove("active-control"); 
  },
  onEnterBack: () => {
    headerControl.classList.add("active-control"); 
  },
  onLeaveBack: () => {
    headerControl.classList.remove("active-control"); 
  },
});
ScrollTrigger.create({
    trigger: sections[1], 
    start: "top center", 
    end: "bottom center", 
    onEnter: () =>{
        aboutControl.classList.add("active-control"); 
      },
    onLeave: () => {
        aboutControl.classList.remove("active-control"); 
    },
    onEnterBack: () => {
        aboutControl.classList.add("active-control"); 
    },
    onLeaveBack: () => {
        aboutControl.classList.remove("active-control"); 
    },
  });

  ScrollTrigger.create({
    trigger: sections[2],
    start: "top center",
    end: "bottom center",
    onEnter: () => {
        journeyControl.classList.add("active-control");
    },
    onLeave: () => {
        journeyControl.classList.remove("active-control");
    },
    onEnterBack: () => {
        journeyControl.classList.add("active-control");
    },
    onLeaveBack: () => {
        journeyControl.classList.remove("active-control");
    }
  });

  ScrollTrigger.create({
    trigger: sections[3],
    start: "top center",
    end: "bottom center",
    onEnter: () => {
        servicesControl.classList.add("active-control");
    },
    onLeave: () => {
        servicesControl.classList.remove("active-control");
    },
    onEnterBack: () => {
        servicesControl.classList.add("active-control");
    },
    onLeaveBack: () => {
        servicesControl.classList.remove("active-control");
    }
  });

    ScrollTrigger.create({
        trigger: sections[4],
        start: "top center",
        end: "bottom center",
        onEnter: () => {
            contactControl.classList.add("active-control");
        },
        onLeave: () => {
            contactControl.classList.remove("active-control");
        },
        onEnterBack: () =>{
            contactControl.classList.add("active-control");
        },
        onLeaveBack: () => {
            contactControl.classList.remove("active-control");
        }
    })
// Refresh ScrollTrigger for proper alignment
ScrollTrigger.refresh();

// Active-Control Function
// function switchControls(){
//     control.forEach(ctr => {
//         ctr.addEventListener("click", () =>{
//             control.forEach(ctr2 => ctr2.classList.remove("active-control"));
//             ctr.classList.add("active-control");
            
//         });
//     });
// }
// switchControls()

// // Scroll to a specific section from Controls
// document.querySelector(".control-1").addEventListener("click", () => {
//     gsap.to(window, { duration: 2, scrollTo: "#header" });
// });
// document.querySelector(".control-2").addEventListener("click", () => {
//     gsap.to(window, { duration: 2, scrollTo: "#about" });
// });
// document.querySelector(".control-3").addEventListener("click", () => {
//     gsap.to(window, { duration: 2, scrollTo: "#services" });
// });
// document.querySelector(".control-5").addEventListener('click', () =>{
//     gsap.to(window, {duration: 2, scrollTo: "#contact"})
// })

// // ScrollTriger Basics
// gsap.from(".about-col-1, .about-col-2", {duration: 1, opacity: 0, y:"500px", scrollTrigger: ".about-col-1"})
// gsap.to(".about-col-1, .about-col-2", {duration: 1, opacity: 1, scrollTrigger: ".about-col-1"})
// gsap.to(".c", { 
//     scrollTrigger: {
//         trigger:".c",
//         start: "0px 92%",
//         markers: true,
//         toggleActions: "restart pause resume pause", 
//         // toggleActions: "restart pause reverse none", 

//         // play, pause, resume, reverse, restart, reset, complete, none
// }, 
//     duration: 2, 
//     rotation: 360,
//     x: 100,
// });
// Toogle Actions
// gsap.from(".myJourney", {duration: 1, y:"200px", opacity: 0, scrollTrigger: ".myJourney" })
// gsap.to(".myJourney", {duration: 1, opacity: 1, scrollTrigger: ".myJourney"})

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

// gsap.to('.number', {duration: 2, opacity: 0, delay: 2});
// gsap.to('.bar', {duration:1.5, x:2500, delay:4, opacity: 0})
// gsap.from('.control', {duration: 1, x:200, stagger: 0.2, ease: "power2.out", delay:5})



const tl = gsap.timeline();
tl.from(".orange",  {xPercent: -200, opacity: 0})
    .from(".myJourney", {duration: 2, yPercent: 600, opacity: 0, })
    .from(".a1", {yPercent: 600, opacity: 0, duration: 5})
    .from(".b1", {yPercent: 200, opacity: 0, duration: 3},)
    .from(".c1", {yPercent: 200, opacity: 0, duration: 4}, )
    .to(".myJourney", {duration: 2, yPercent: -200, opacity: 0, })

    .to(".a1", {xPercent: -200, opacity: 0, duration: 1})
    .to(".b1", {xPercent: -200, opacity: 0, duration: 2}, '<')
    .to(".c1", {xPercent: -200, opacity: 0, duration: 3}, '<')

    .from(".purple", {xPercent: -200, duration: 5})
    .from(".a2", {yPercent: 200, opacity: 0, duration: 5})
    .from(".b2", {yPercent: 200, opacity: 0, duration: 3},)
    .from(".c2", {yPercent: 200, opacity: 0, duration: 4}, )
    .to(".a2", {xPercent: -200, opacity: 0, duration: 1})
    .to(".b2", {xPercent: -200, opacity: 0, duration: 2}, '<')
    .to(".c2", {xPercent: -200, opacity: 0, duration: 3}, '<')

    

    .from(".green", {xPercent: -200, duration: 5})
    .from(".a3", {yPercent: 200, opacity: 0, duration: 5})
    .from(".b3", {yPercent: 200, opacity: 0, duration: 3},)
    .from(".c3", {yPercent: 200, opacity: 0, duration: 4}, )
    .to(".a3", {xPercent: -200, opacity: 0, duration: 1})
    .to(".b3", {xPercent: -200, opacity: 0, duration: 2}, '<')
    .to(".c3", {xPercent: -200, opacity: 0, duration: 3}, '<')
    
     
  

  ScrollTrigger.create({
    animation: tl,
    trigger: ".color",
    start: "top top",
    end: "+=12000",
    scrub: 1,
    pin: true,
    anticipatePin: 3,
  })

// const getY = (e) => {
//     const height = e.clientHeight;
//     const maxScrollSpeed = -300;
//     const minScrollSpeed = -30;
//     const referenceHeight = 500;

//     const speedfactor = 
//      maxScrollSpeed + (height / referenceHeight) * (maxScrollSpeed - minScrollSpeed);
//      return speedfactor;
// }

// let waterfall = document.querySelectorAll(".waterfall-images div img").forEach((image) => {
//     gsap.to(image, {
//         y: getY(image),
//         scrollTriger: {
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 3,
//             pin: true,
//             trigger: image,
//         }
//     })
// })