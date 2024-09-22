import "@styles/lenis.css";
import Lenis from "lenis";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

lenis.on("scroll", (e) => {
console.log(e);
});

function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}

requestAnimationFrame(raf);