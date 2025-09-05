import * as THREE from "three"
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


    gsap.registerPlugin(ScrollTrigger);



// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1200); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);


  function basketball() {
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
            end: `+=${contents.length * 100}%`, // the scroll lenght based on the number of content sections
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
  };
  basketball()



const container = document.getElementById("about-3d");
const w = container.clientWidth;
const h = container.clientHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(w, h);
container.appendChild(renderer.domElement);

// Camera
const fov = 60;
const aspect = w / h;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Scene
const scene = new THREE.Scene();
scene.background = null; // transparent background

// Light
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);

// GLTF Loader
let model;
const loader = new GLTFLoader();
loader.load('oldpc/scene.gltf', (gltf) => {
    model = gltf.scene;

    // Scale down the model
   const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center); 
    model.scale.set(2, 2, 2); 
    scene.add(model);
   
});

// Resize handling
window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate(t) {
    requestAnimationFrame(animate);

    if(model){
        model.rotation.y = t * 0.001; // slow rotation
    }

    renderer.render(scene, camera);
}

animate();




// ABOUT DEVELOPING STUFF
function aboutBar() {
    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.stuff',
    start: 'bottom bottom',
    end: '+=600',
    scrub: 2,
  }
});

// Animate the .stuff elements in
tl.from('.stuff', {
  xPercent: 50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  stagger: 0.1 
});

// Animate the h1 inside .stuff
tl.to('.stuff-h1', {
  opacity: 1,
  duration: 0.7,
  ease: 'elastic.out(1, 1.3)',
}, "<0.3"); // start slightly before the previous animation ends

// Animate .stuff out
tl.to('.stuff', {
  xPercent: -100,
  opacity: 0,
  duration: .5,
  ease: 'power3.in',
},); // small delay after h1 animation
}
aboutBar()



function likeBar() {
    const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.like',
    start: 'bottom bottom',
    end: '+=600',
    scrub: 2,
  }
});

// Animate the .like elements in
tl.from('.like', {
  xPercent: -50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  stagger: 0.1 
});

// Animate the h1 inside .like
tl.to('.like-h1', {
  opacity: 1,
  duration: 0.7,
  ease: 'elastic.out(1, 1.3)',
}, "<0.3"); // start slightly before the previous animation ends

// Animate .like out
tl.to('.like', {
  xPercent: 100,
  opacity: 0,
  duration: .5,
  ease: 'power3.in',
},); // small delay after h1 animation
}
likeBar()















// JAPAN TIMELINE
function japan(){
    gsap.registerPlugin(ScrollTrigger)
    const photography = document.querySelector("#photography");
    const gallery = document.querySelectorAll(".gallery img");

    const tl = gsap.timeline({
    defaults: {duration: .5, ease: "power2.out"},
    scrollTrigger: {
        trigger: photography,
        start: "bottom bottom",
        end: `${gallery.length * 100}%`,
        scrub: 3, 
        pin: true
    }
    })

    gallery.forEach((_,i) => {
    if(i === gallery.length -1) return
    tl.to(gallery[i], { opacity: 1},
    )
    })
}
// japan()




// OVERLAY
function overlay(){
    const fullStack = document.querySelector(".full");
    const arrow = document.querySelector(".arrow");

    const tl = gsap.timeline({defaults: { ease: 'power4.out', duration: .7}})

    gsap.set(arrow, {
        xPercent: 80
    })
    gsap.to("svg, .dev", {
        scale: 1.2,
        duration: 2,

    })

    tl
        .from('.dev p', {
            yPercent: 200, 
            stagger: .03,
            skewX: 30,
            skewY: 60,
        
        })
        .to(fullStack, {
            xPercent: 11,
            ease: 'elastic.out(1, .5)'
        }, "1.5")
        .from(arrow, {
            xPercent: -100,
            opacity: 0,
            ease: 'elastic.out'
        }, "1.5")
        .to('.dev', {
            skewX: 30,
            x: 30,
            scaleX: 0,
            stagger: .03,
            opacity: 0,
            duration: .2
        }, "+=.5")
        .to(fullStack, {
            skewX: 30,
            x: 30,
            scaleX: 0,
            stagger: .03,
            opacity: 0,
            duration: .2
        }, "<")
        .to(arrow, {
            xPercent: 300,
            opacity: 1,
            duration:  1.3,
            ease: 'elastic.out(1, .3)',
        }, "<")
        .to(arrow, {
            rotateZ: -90,
            transformOrigin: 'center'
        }, "-=.1")
        .to(arrow, {
            yPercent: 2000,
            duration: 1.3
        }, "-=.5")
        .to(arrow, {
            yPercent: -10000,
            ease: 'back.in(1)',
            duration: .5
        }, "-=.3")
        .to('.overlay', {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 1,
            ease: 'power4.inOut',
            onComplete: () => {
        document.body.classList.remove("no-scroll");
        document.documentElement.classList.remove("no-scroll");
    }
        }, "-=.6")
    }    
    // overlay()


function skills() {
    const tl = gsap.timeline({
        defaults: {duration: 1, ease: 'elastic.inOut'},
        scrollTrigger: {
            trigger: '.svg-skills',
            start: 'top center',   
            end: '+=200',
        }
    })
   tl.to('.svg-skills, path, g', {
    scale: 1.1,
    opacity: 1,
    duration: 1,
    stagger: .01, // animate one after another
  });
}
skills()


 // Disable automatic scroll restoration
 window.onbeforeunload = function () {
    window.scrollTo(0,0);
};




    