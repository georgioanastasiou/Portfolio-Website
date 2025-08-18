// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// let sections = ['#header', '#journey', '#skills', '#portfolio', '#contact'];
// let control = document.querySelectorAll(".control");
// let scroll = document.getElementsByClassName("scroll-img");

// gsap.to(scroll, {duration: 1, y:10, yoyo: true, repeat: -1, ease:"power1.inOut"})

// function removeActiveClass() {
//     control.forEach(btn => btn.classList.remove("active-control"));
// }

// control.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         removeActiveClass();
//         btn.classList.add("active-control");

//         console.log("Scrolling to:", sections[index]); // Debugging

//         gsap.to(window, { duration: 1, scrollTo: sections[index], ease: 'power2.out' });
//     });
// });

// // Ensure ScrollTrigger links to correct elements
// sections.forEach((section, index) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => control[index].classList.add("active-control"),
//         onLeave: () => control[index].classList.remove("active-control"),
//         onEnterBack: () => control[index].classList.add("active-control"),
//         onLeaveBack: () => control[index].classList.remove("active-control"),
//     });
// });

// ScrollTrigger.refresh();

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const contents = gsap.utils.toArray(".content");
    const text = gsap.utils.toArray(".text");
    const imageWrappers = gsap.utils.toArray(".img-wrapper");

    // move first child text slightly upwards
    gsap.set(".content:first-child .text", { y: -50 }); 

    const tl = gsap.timeline({
        defaults: {ease: "power2.out"},
           scrollTrigger: {
            trigger: ".container",
            pin: true,
            start: "top top",
            end: `+=${contents.length * 200}%`, // the scroll lenght based on the number of content sections
            scrub: 3, // control animation speed: increasing the value -> slower animation 
        },
    });

    tl.to(imageWrappers[0], { rotate: -3 }, 0);
    
    contents.forEach((_,i) => {
        if(i === contents.length -1 ) return;

        tl.to(text[i], { opacity: 0, duration: 2}, "+=0.5")
          .to(
            imageWrappers[i + 1],
            {
                scale: 1,
                duration: 2,
                y: (i + 1) * 5,
                x: (i + 1) * -5,
                opacity: 1,
                rotate: (i + 1) * 2 * ( i % 2 === 0 ? 1 : -1), // if element from array is mona then rotate from the other side
            },
            "<"
          )
          .to(text[i + 1], { opacity: 1, y: -50, duration: 2 }, "<+=0.5");
    })
});


