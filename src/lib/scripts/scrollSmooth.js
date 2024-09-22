import "../../styles/lenis.css";
import Lenis from "lenis";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

lenis.on("scroll", (e) => {
console.log(e);
});
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 4000)
})
gsap.ticker.lagSmoothing(0)

function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}

requestAnimationFrame(raf);