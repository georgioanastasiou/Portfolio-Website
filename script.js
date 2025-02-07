
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
// I have to write the CDN and here the plugin

gsap.from(".scrollBtn-container", {duration: 1, y: -10, yoyo: true, repeat: -1, })

let control = document.querySelectorAll(".control");
let sections = ['#header',  "#journey", '#skills', '#contact']


// Select the control for the #header section
const headerControl = document.querySelector(".control-1");
const aboutControl = document.querySelector(".control-2");
const journeyControl = document.querySelector(".control-3")
const contactControl = document.querySelector(".control-4")
// const contactControl = document.querySelector(".control-5")


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
contactControl.addEventListener("click", () =>{
  contactControl.classList.add("active-control");
    gsap.to(window, {duration: 1, scrollTo: sections[3]})
})
// contactControl.addEventListener("click", () =>{
//     contactControl.classList.add("active-control");
//     gsap.to(window, {duration: 1, scrollTo: sections[4]})
// })

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
      contactControl.classList.add("active-control");
    },
    onLeave: () => {
      contactControl.classList.remove("active-control");
    },
    onEnterBack: () => {
      contactControl.classList.add("active-control");
    },
    onLeaveBack: () => {
      contactControl.classList.remove("active-control");
    }
  });

    // ScrollTrigger.create({
    //     trigger: sections[4],
    //     start: "top center",
    //     end: "bottom center",
    //     onEnter: () => {
    //         contactControl.classList.add("active-control");
    //     },
    //     onLeave: () => {
    //         contactControl.classList.remove("active-control");
    //     },
    //     onEnterBack: () =>{
    //         contactControl.classList.add("active-control");
    //     },
    //     onLeaveBack: () => {
    //         contactControl.classList.remove("active-control");
    //     }
    // })
ScrollTrigger.refresh();



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
// gsap.to('.bar', {duration:1.5, x:2500, delay:4, opacity: 0});
// gsap.to('.overlay', {
//     duration: 1,
//     opacity: 0,
//     delay: 5,
//     onComplete: () => {
//         document.querySelector('.overlay').style.display = 'none';
//         document.body.style.overflow = 'auto';  
//     }
// });



// const tl = gsap.timeline();
// tl.from(".journey-left",  {xPercent: -200, opacity: 0, duration: 2})
//     .from(".education", {xPercent: -100, opacity:0, duration: 2})
//     .from(".a1", {yPercent: 100, opacity: 0, duration: 5})
//     .from(".b1", {yPercent: 100, opacity: 0, duration: 3},)
//     .from(".c1", {yPercent: 100, opacity: 0, duration: 4},)
//     .from(".work", {xPercent: 100, opacity:0, duration: 2})
//     .from(".a2", {yPercent: 100, opacity: 0, duration: 5})
//     .from(".b2", {yPercent: 100, opacity: 0, duration: 3},)
//     .from(".c2", {yPercent: 100, opacity: 0, duration: 4}, )

//     .to(".myJourney", {duration: 2, yPercent: -200, opacity: 0,})
//     .to(".education", {xPercent: -200, opacity: 0, duration: 4},'<')
//     .to(".a1", {xPercent: -200, opacity: 0, duration: 4},'<')
//     .to(".b1", {xPercent: -200, opacity: 0, duration: 4}, '<')
//     .to(".c1", {xPercent: -200, opacity: 0, duration: 4}, '<')
//     .to(".work", {xPercent: 200, opacity: 0, duration: 4},'<')
//     .to(".a2", {xPercent: 200, opacity: 0, duration: 4},'<')
//     .to(".b2", {xPercent: 200, opacity: 0, duration: 4},'<')
//     .to(".c2", {xPercent: 200, opacity: 0, duration: 4},'<')

//   ScrollTrigger.create({
//     animation: tl,
//     trigger: ".color1",
//     start: "top top",
//     end: "=+4200",
//     scrub: 2,
//     pin: true,
//     anticipatePin: true,

//   })


//   const tl2 = gsap.timeline();
// tl2.from(".skills-left",  {xPercent: -100, opacity: 0, duration: 2})
//     .from(".skills-right", {xPercent: 100, opacity:0, duration: 2})


//   ScrollTrigger.create({
//     animation: tl2,
//     trigger: ".color2",
//     start: "top top",
//     end: "=+3000",
//     scrub: 2,
//     pin: true,
//     anticipatePin: true,
//   })
