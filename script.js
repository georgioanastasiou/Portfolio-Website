gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

let sections = ['#header', '#journey', '#skills', '#portfolio', '#contact'];
let control = document.querySelectorAll(".control");

function removeActiveClass() {
    control.forEach(btn => btn.classList.remove("active-control"));
}

control.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        removeActiveClass();
        btn.classList.add("active-control");

        console.log("Scrolling to:", sections[index]); // Debugging

        gsap.to(window, { duration: 1, scrollTo: sections[index], ease: 'power2.out' });
    });
});

// Ensure ScrollTrigger links to correct elements
sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => control[index].classList.add("active-control"),
        onLeave: () => control[index].classList.remove("active-control"),
        onEnterBack: () => control[index].classList.add("active-control"),
        onLeaveBack: () => control[index].classList.remove("active-control"),
    });
});

ScrollTrigger.refresh();
