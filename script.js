import * as THREE from "three";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1200); // Convert time from seconds to milliseconds
});
// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(500);


// OVERLAY
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

function overlay() {

  const fullStack = document.querySelector(".full");
  const arrow = document.querySelector(".arrow");

  const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 0.7 } });

  gsap.set(arrow, {
    xPercent: 80,
  });
  gsap.to(".intro, .dev", {
    scale: 1.2,
    duration: 1.2,
  });
  tl.from(".dev p", {
    yPercent: 200,
    stagger: 0.03,
    skewX: 30,
    skewY: 60,
  })
    .to(
      fullStack,
      {
        xPercent: 11,
        ease: "elastic.out(1, .5)",
      },
      "1.5"
    )
    .from(
      arrow,
      {
        xPercent: -100,
        opacity: 0,
        ease: "elastic.out",
      },
      "1.5"
    )
    .to(
      ".dev",
      {
        skewX: 30,
        x: 30,
        scaleX: 0,
        stagger: 0.03,
        opacity: 0,
        duration: 0.2,
      },
      "+=.5"
    )
    .to(
      fullStack,
      {
        skewX: 30,
        x: 30,
        scaleX: 0,
        stagger: 0.03,
        opacity: 0,
        duration: 0.2,
      },
      "<"
    )
    .to(
      arrow,
      {
        xPercent: 300,
        opacity: 1,
        duration: 1.3,
        ease: "elastic.out(1, .3)",
      },
      "<"
    )
    .to(
      arrow,
      {
        rotateZ: -90,
        transformOrigin: "center",
      },
      "-=.1"
    )
    .to(
      arrow,
      {
        yPercent: 2000,
        duration: 1.3,
      },
      "-=.5"
    )
    .to(
      arrow,
      {
        yPercent: -10000,
        ease: "back.in(1)",
        duration: 0.5,
      },
      "-=.3"
    )
    .to(
      ".overlay",
      {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1,
        ease: "power4.inOut",
       
      },
      "-=.6"
    )
    .from(
      ".tsiou",
      {
        duration: 1,
        yPercent: 100,
        ease: "elastic.inOut(1, 1.3)",
        opacity: 1,
      },
      "-=.5"
    );
    
}
overlay()

function about() {
    gsap.set(".about-table img", {
    opacity: 0,
  });
    gsap.to(".about-table img", {
      duration: 0.1,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".about-table img",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(".languages img", {
      opacity: 0,
    });
    gsap.to(".languages img", {
      yPercent: 30,
      opacity: 1,
      duration: 0.1,
      stagger: 0.03,
      scrollTrigger: {
        trigger: ".lang",
        start: "top 65%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
}
about()

function photography() {
  const contents = gsap.utils.toArray(".content");

  // Move first text slightly upwards
  gsap.set(contents[0].querySelector(".text"), { y: -100 });

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      start: "top top",
      end: `+=${contents.length * 150}%`, // scroll length based on number of contents
      scrub: 3,
    },
  });

  // Animate first image rotation
  const firstImage = contents[0].querySelector(".img-wrapper");
  tl.to(firstImage, { rotate: -3, scale: 1.1, delay: 0.2 });

  // Loop through each content block except the last one
  contents.forEach((content, i) => {
    if (i === contents.length - 1) return;

    const text = content.querySelector(".text");
    
    const camera = content.querySelector(".camera");
    const nextContent = contents[i + 1];
    const nextText = nextContent.querySelector(".text");
    const nextCamera = nextContent.querySelector(".camera");
    const nextImage = nextContent.querySelector(".img-wrapper");

    tl.to(text, { opacity: 0, duration: 2 }, "+=0.5");
    tl.to(camera, { opacity: 0, duration: 1 }, "-=1.2");

    if (nextImage) {
      tl.to(
        nextImage,
        {
          scale: 1,
          duration: 2,
          y: (i + 1) * 5,
          x: (i + 1) * -5,
          opacity: 1,
          rotate: (i + 1) * 1 * (i % 2 === 0 ? 1 : -1),
        },
        "<"
      );
    }
    tl.to(nextText, { opacity: 1, y: -50, duration: 2 }, "<+=0.5");
    tl.to(nextCamera, { opacity: 1, y: -50, duration: 2 }, "<+=0.1");
  });
}

photography();

// 3d pc
const container = document.getElementById("about-3d");
const w = container.clientWidth;
const h = container.clientHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(w, h);
container.appendChild(renderer.domElement);

// Camera
const fov = 120;
const aspect = w / h;
const near = 0.2;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Scene
const scene = new THREE.Scene();
scene.background = null; // transparent background

// Light
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// GLTF Loader
let model, mixer;
const clock = new THREE.Clock();

const loader = new GLTFLoader();
loader.load(
  "programmer/scene.gltf",
  (gltf) => {
    console.log("Model loaded", gltf);
    model = gltf.scene;
    model.scale.set(1.7, 1.5, 1);

    scene.add(model);

    // 🔑 Play animations if they exist
    if (gltf.animations && gltf.animations.length > 0) {
      mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
      });
    }
  },
  undefined,
  (error) => {
    console.error("Error loading model:", error);
  }
);

// Resize handling
window.addEventListener("resize", () => {
  const w = container.clientWidth;
  const h = container.clientHeight;
  renderer.setSize(w, h);

  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  // 🔑 Update animations if mixer exists
  if (mixer) mixer.update(delta);
  if (model) {
    model.rotation.y = -0.3; 
  }

  renderer.render(scene, camera);
}

animate();

// ABOUT DEVELOPING STUFF
function aboutBar() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".stuff",
      start: "top center",
      end: "+=150",
      scrub: 2,
    },
  });
  tl.to(
    ".stuff-h1",
    {
      opacity: 1,
      duration: 0.7,
      ease: "elastic.out(1, 1.3)",
    },
    "<0.3"
  );

  tl.to(".stuff", {
    xPercent: -100,
    opacity: 0,
    duration: 0.5,
    ease: "power3.in",
  }); 
}
aboutBar();

function likeBar() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".like",
      start: "top center",
      end: "+=700",
      scrub: 2,
    },
  });
  tl.to(
    ".like-h1",
    {
      opacity: 1,
      duration: 0.7,
      ease: "elastic.out(1, 1.3)",
    },
    "<0.3"
  ); 

  tl.to(".like", {
    xPercent: -100,
    opacity: 0,
    duration: 0.5,
    ease: "power3.in",
  }); 
}
likeBar();

// JAPAN TIMELINE
// function japan() {
//   gsap.registerPlugin(ScrollTrigger);
//   const photography = document.querySelector("#photography");
//   const gallery = document.querySelectorAll(".gallery img");

//   const tl = gsap.timeline({
//     defaults: { duration: 0.5, ease: "power2.out" },
//     scrollTrigger: {
//       trigger: photography,
//       start: "bottom bottom",
//       end: `${gallery.length * 100}%`,
//       scrub: 1,
//       pin: true,
//     },
//   });

//   gallery.forEach((_, i) => {
//     if (i === gallery.length - 1) return;
//     tl.to(gallery[i], { opacity: 1 });
//   });
// }
// japan()

// Disable automatic scroll restoration+




// ----------------------PLANETS-------------------------
gsap.registerPlugin(MotionPathPlugin);
gsap.set(".tsiou", {
  rotate: "-10px",
});
gsap.set(".circle-inner, .circle-outer", {
  duration: 1,
  skewX: 50,
  xPercent: -50,
});

gsap.set(".planet2", {
  xPercent: 100,
});
gsap.to(".planet1", {
  duration: 10, // how long one full path traversal takes
  repeat: -1, // loop forever
  ease: "none", // constant speed
  motionPath: {
    path: ".circle-outer", // path to follow
    align: ".circle-outer", // align rotation to the path
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
});
gsap.to(".ball-outer", {
  duration: 9, // how long one full path traversal takes
  repeat: -1, // loop forever
  ease: "none", // constant speed
  motionPath: {
    path: ".circle-outer", // path to follow
    align: ".circle-outer", // align rotation to the path
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
});

gsap.to(".planet2", {
  duration: 8, // how long one full path traversal takes
  repeat: -1, // loop forever
  ease: "none", // constant speed
  motionPath: {
    path: ".circle-inner", // path to follow
    align: ".circle-inner", // align rotation to the path
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
});

gsap.to(".ball-inner", {
  duration: 6, // how long one full path traversal takes
  repeat: -1, // loop forever
  ease: "none", // constant speed
  motionPath: {
    path: ".circle-inner", // path to follow
    align: ".circle-inner", // align rotation to the path
    alignOrigin: [0.5, 0.5],
    autoRotate: true,
  },
});

function contact() {
  const inputs = document.querySelectorAll(".contact-input");

  inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
      ipt.parentNode.classList.add("focus");
      ipt.parentNode.classList.add("not-empty");
    });
    ipt.addEventListener("blur", () => {
      if (ipt.value == "") {
        ipt.parentNode.classList.remove("not-empty");
      }
      ipt.parentNode.classList.remove("focus");
    });
  });
}
contact();

gsap.registerPlugin(ScrollToPlugin);
function navClick() {
  const navLinkProjects = document.querySelector(".nav-link-projects");
  const projects = document.querySelector("#projects");

  navLinkProjects.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: projects },
      ease: "elastic.inOut(1, 1.3)",
      duration: 1,
    });
  });
  const navLinkContact = document.querySelector(".nav-link-contact");
  const contactMain = document.querySelector(".contact-container-main");

  navLinkContact.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: contactMain },
      ease: "elastic.inOut(1, 1.3)",
      duration: 1,
    });
  });
}
navClick();
