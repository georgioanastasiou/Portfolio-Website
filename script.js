import * as THREE from "three"
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// document.addEventListener("DOMContentLoaded", () => {
//     gsap.registerPlugin(ScrollTrigger);

//     const contents = gsap.utils.toArray(".content");
//     const text = gsap.utils.toArray(".text");
//     const imageWrappers = gsap.utils.toArray(".img-wrapper");

//     // move first child text slightly upwards
//     gsap.set(".content:first-child .text", { y: -50 }); 

//     const tl = gsap.timeline({
//         defaults: {ease: "power2.out"},
//            scrollTrigger: {
//             trigger: ".container",
//             pin: true,
//             start: "top top",
//             end: `+=${contents.length * 100}%`, // the scroll lenght based on the number of content sections
//             scrub: 3, // control animation speed: increasing the value -> slower animation 
//         },
//     });

//     tl.to(imageWrappers[0], { rotate: -3 }, 0);
    
//     contents.forEach((_,i) => {
//         if(i === contents.length -1 ) return;

//         tl.to(text[i], { opacity: 0, duration: 2}, "+=0.5")
//           .to(
//             imageWrappers[i + 1],
//             {
//                 scale: 1,
//                 duration: 2,
//                 y: (i + 1) * 5,
//                 x: (i + 1) * -5,
//                 opacity: 1,
//                 rotate: (i + 1) * 2 * ( i % 2 === 0 ? 1 : -1), // if element from array is mona then rotate from the other side
//             },
//             "<"
//           )
//           .to(text[i + 1], { opacity: 1, y: -50, duration: 2 }, "<+=0.5");
//     })
// });


// const container = document.getElementById("about-3d");
// const w = container.clientWidth;
// const h = container.clientHeight;

// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setSize(w, h);
// container.appendChild(renderer.domElement);

// // Camera
// const fov = 60;
// const aspect = w / h;
// const near = 0.1;
// const far = 100;
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.z = 2;

// // Scene
// const scene = new THREE.Scene();
// scene.background = null; // transparent background

// // Light
// const light = new THREE.AmbientLight(0xffffff, 2);
// scene.add(light);

// // GLTF Loader
// let model;
// const loader = new GLTFLoader();
// loader.load('oldpc/scene.gltf', (gltf) => {
//     model = gltf.scene;

//     // Scale down the model
//    const box = new THREE.Box3().setFromObject(model);
//     const center = box.getCenter(new THREE.Vector3());
//     model.position.sub(center); 
//     model.scale.set(2, 2, 2); 
//     scene.add(model);
   
// });

// // Resize handling
// window.addEventListener('resize', () => {
//     const w = container.clientWidth;
//     const h = container.clientHeight;
//     renderer.setSize(w, h);
//     camera.aspect = w / h;
//     camera.updateProjectionMatrix();
// });

// // Animation loop
// function animate(t) {
//     requestAnimationFrame(animate);

//     if(model){
//         model.rotation.y = t * 0.0005; // slow rotation
//     }

//     renderer.render(scene, camera);
// }

// animate();




// JAPAN TIMELINE
gsap.registerPlugin(ScrollTrigger)
const photography = document.querySelector("#photography");
const gallery = document.querySelectorAll(".gallery img");
const japan = document.querySelector(".japan");

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