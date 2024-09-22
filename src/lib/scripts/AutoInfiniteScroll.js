import gsap from "gsap";

gsap.utils.toArray('.autoscroll').forEach((line, i) => {
  
    const speed = 150
    
    const links = line.querySelectorAll(".linkscroll"),
          tl = verticalLoop(links, i ? -speed : speed)
      
    links.forEach(link => {
      link.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
      link.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: 1, overwrite: true}));
    });
    
  });

  function verticalLoop(elements, speed) {
    elements = gsap.utils.toArray(elements);
    let firstBounds = elements[0].getBoundingClientRect(),
        lastBounds = elements[elements.length - 1].getBoundingClientRect(),
        left = firstBounds.left - firstBounds.right - Math.abs(elements[1].getBoundingClientRect().left - firstBounds.right),
        right = lastBounds.right,
        distance = right - left,
        duration = Math.abs(distance / speed),
        tl = gsap.timeline({repeat: -1}),
        plus = speed < 0 ? "-=" : "+=",
        minus = speed < 0 ? "+=" : "-=";
    elements.forEach(el => {
      let bounds = el.getBoundingClientRect(),
          ratio = Math.abs((right - bounds.left) / distance);
      if (speed < 1) {
        ratio = 1 - ratio;
      }
      tl.to(el, {
        x: plus + distance * ratio,
        duration: duration * ratio,
        ease: "none"
      }, 0);
      tl.fromTo(el, {
        x: minus + distance
      }, {
        x: plus + (1 - ratio) * distance,
        ease: "none",
        duration: (1 - ratio) * duration,
        immediateRender: false
      }, duration * ratio)
    });
    return tl;
  }
