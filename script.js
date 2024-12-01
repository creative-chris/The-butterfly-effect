import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const $background = document.querySelector("[data-component='background']");
const $canvas = $background.querySelector("[data-select='canvas']");

const width = $background.offsetWidth;
const height = $background.offsetHeight;

const renderer = new THREE.WebGLRenderer({ canvas: $canvas, antialias: true });
renderer.setClearColor(0xffffff);
renderer.setClearAlpha(0.0);
renderer.setSize(width, height);

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// cube.rotation.z = 10;

// gsap.to(cube.rotation, {x: Math.PI*2, duration: 2, repeat: -1, ease: "none"});

gsap.to(cube.rotation, {
  x: Math.PI*2,
  y: Math.PI*1,
  ScrollTrigger: {
    trigger: document.querySelector("main"),
    scrub: true,
    start: "top top",
    end: "bottom bottom",
  }
});

/**
 *
 * Render loop
 */
const handleTick = () => {
  // cube.rotation.x += 0.01;
  renderer.render(scene, camera);
};
gsap.ticker.add(handleTick);
