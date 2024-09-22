/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, e as createAstro } from '../chunks/astro/server_uskqo4Qm.mjs';
import 'kleur/colors';
import { c as $$Icon, a as $$Link, $ as $$Section, b as $$Layout } from '../chunks/Layout_CmVumkKi.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/Image_BKUxb09p.mjs';
import { d as data, $ as $$CardWrapper, a as $$Tags } from '../chunks/data_tj6kxNsZ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "paddingYDefault": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-4"> <h3 class="titleSection">Have idea for web?</h3> <div class="flex gap-2"> <a href="/" class="flex items-center gap-2 rounded-2xl bg-white font-semibold text-black h-12 px-6"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "size": 22 })}
WhatsApp
</a> </div> <div class="flex gap-2 items-center"> ${renderComponent($$result2, "Link", $$Link, { "href": "/", "variant": "outline", "size": "icon" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "github", "size": 22 })} ` })} ${renderComponent($$result2, "Link", $$Link, { "href": "/", "variant": "outline", "size": "icon" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Icon", $$Icon, { "name": "github", "size": 22 })} ` })} </div> <code class="text-zinc-400 mt-6 text-sm">Last update — 3 September ${(/* @__PURE__ */ new Date()).getFullYear()}</code> </div> ` })}`;
}, "/home/user/coihsan/src/components/section/Contact.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "paddingYDefault": true, "borderB": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col"> <div class="flex flex-col w-full max-w-xl w-full"> <h1 class="text-3xl font-semibold pb-4 font-[clash]">˗ˏˋIhsanˎˊ</h1> <h2 class="font-[clash] text-4xl md:text-6xl font-semibold ">Frontend Dev & Digital Marketing</h2> </div> <div class="w-full flex flex-col md:flex-row justify-between items-center mt-8"> <p class="text-zinc-400 pt-3 max-w-sm">A frontend web developer and digital marketing enthusiast especially with a primary focus on SEM, SEO and Web Development using JavaScript framework.</p> ${renderComponent($$result2, "Image", $$Image, { "loading": "eager", "class": "rounded-xl mt-8", "src": "/src/assets/minion.gif", "width": 400, "height": 198, "alt": "minion gif" })} </div> </div> ` })}`;
}, "/home/user/coihsan/src/components/section/Hero.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$InfiniteText = createComponent(($$result, $$props, $$slots) => {
  const skills = ["Frontend Developer", "Backend Developer", "SEO Specialist", "UI/UX Designer", "Fullstack Developer"];
  return renderTemplate(_a || (_a = __template(["", ` <script lang="js">
    import gsap from 'gsap'
    let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});
<\/script>`])), renderComponent($$result, "Section", $$Section, { "borderB": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="services-ticker-block overflow-hidden"> <ul class="marquee__inner flex items-center justify-between h-12 flex-nowrap gap-5 w-full"> ${skills.map((skill, index) => renderTemplate`<li class="marquee__part flex-1 font-[clash] flex items-center leading-none uppercase gap-3 whitespace-nowrap text-3xl font-bold"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "linehorizontal" })} <span>${skill}</span> </li>`)} </ul> </div> ` }));
}, "/home/user/coihsan/src/components/section/InfiniteText.astro", void 0);

const $$ProjectList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "paddingYDefault": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="titleSection">Repository</h1> <div class="grid md:grid-cols-3 gap-4"> ${data.datague.slice(0, 6).map((item) => renderTemplate`${renderComponent($$result2, "CardWrapper", $$CardWrapper, { "title": item.title, "description": item.description, "urlDemo": item.urlDemo, "urlSource": item.urlSource }, { "default": ($$result3) => renderTemplate` <div class="absolute right-4 top-4"> ${renderComponent($$result3, "Tags", $$Tags, { "size": "xs", "variant": item?.tagColor }, { "default": ($$result4) => renderTemplate`${item.tagName}` })} </div> ` })}`)} </div> ` })}`;
}, "/home/user/coihsan/src/components/section/ProjectList.astro", void 0);

const $$DotLight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="grid grid-cols-18 grid-rows-5 grid-flow-col gap-3 h-[90px]"> <span class="Ellipse32 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse32 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse32 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse32 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse32 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse34 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse342 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse343 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse344 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse345 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse357 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse358 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse359 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse360 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse361 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse373 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse374 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse375 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse376 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse377 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse389 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse390 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse391 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse392 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse393 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse405 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse406 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse407 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse408 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse409 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse421 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse422 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse423 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse424 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse425 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse437 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse438 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse439 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse440 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse441 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse453 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse454 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse455 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse456 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse457 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse469 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse470 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse471 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse472 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse473 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse485 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse486 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse487 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse488 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse489 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse501 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse502 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse503 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse504 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse505 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse517 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse518 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse519 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse520 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse521 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse533 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse534 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse535 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse536 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse537 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse549 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse550 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse551 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse552 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse553 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse565 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse566 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse567 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse568 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse569 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse581 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse582 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse583 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse584 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse585 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse597 w-[1px] h-[1px] bg-neutral-500 dotHover"></span> <span class="Ellipse598 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse599 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse600 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> <span class="Ellipse601 w-[1px] h-[1px] bg-neutral-500 rounded-full"></span> </span>`;
}, "/home/user/coihsan/src/components/ui/DotLight.astro", void 0);

const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"${addAttribute(`drop-shadow-xl w-full h-72 lg:h-auto bg-zinc-950 border border-white/20 rounded-lg p-5 group mx-auto`, "class")}> ${renderComponent($$result, "DotLight", $$DotLight, {})} <div class="flex items-end justify-between mt-6"> <div class="grid"> <h2 class="text-[1.5rem] font-bold">Next.js 14</h2> <p class="text-sm text-zinc-400 w-60 textxs">
The power of full-stack to the frontend. Read the release notes.
</p> </div> <div class="flex items-center justify-center p-2 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-all ease-linear duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrowupright" })} </div> </div> </a>`;
}, "/home/user/coihsan/src/components/ui/NextJS.astro", void 0);

const $$Astro$2 = createAstro("https://coihsan.github.io");
const $$ReactJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReactJS;
  const { gridClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${gridClass} flex flex-col items-center justify-center bg-zinc-950 w-full lg:h-full h-72 relative border border-white/20 rounded-lg p-5 group mx-auto group overflow-hidden`, "class")}> <div class="flex items-center justify-center w-full"> ${renderComponent($$result, "Icon", $$Icon, { "name": "reactjs", "size": "4rem" })} </div> <span class="flex items-end justify-between mt-3"> <div class="flex flex-col items-center w-full lg:w-[80%] mx-auto"> <h2 class="text-[1.5rem] font-bold">React.js</h2> <p class="text-zinc-400 text-center">
The library for web and native user interfaces
</p> <a class="py-2 px-4 font-semibold bg-white hover:bg-zinc-200 transitionAll text-zinc-700 rounded-full mt-3" href="https://react.dev/" target="_blank" rel="noopener noreferrer">Get Started</a> </div> </span> </div>`;
}, "/home/user/coihsan/src/components/ui/ReactJS.astro", void 0);

const houston = new Proxy({"src":"/_astro/houston.lYlUGHhQ.webp","width":256,"height":256,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/user/coihsan/src/assets/houston.webp";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/user/coihsan/src/assets/houston.webp");
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://coihsan.github.io");
const $$AstroBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AstroBanner;
  return renderTemplate`${maybeRenderHead()}<a href="https://astro.build/" target="_blank"${addAttribute(`bg-zinc-950 overflow-hidden group relative w-full h-72 lg:h-auto py-5 px-9 border border-white/20 rounded-lg mx-auto flex items-center justify-center`, "class")}> <div class="flex flex-col items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "astro-logo-light", "width": 120, "height": 50 })} <span class="font-semibold text-2xl text-center textxs">Start building<br>with Astro today</span> ${renderComponent($$result, "Image", $$Image, { "loading": "eager", "src": houston, "width": 85, "height": 85, "alt": "houston logo" })} </div> </a>`;
}, "/home/user/coihsan/src/components/ui/AstroBanner.astro", void 0);

const $$Astro = createAstro("https://coihsan.github.io");
const $$TechStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TechStack;
  const skilldev = ["Portfolios", "Blog", "Web", "Saas"];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "borderB": true, "paddingYDefault": true, "borderT": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-6"> <h1 class="titleSection">The React Framework for the Web</h1> <ul class="flex items-center flex-wrap gap-2"> ${skilldev.map((items) => renderTemplate`${renderComponent($$result2, "Tags", $$Tags, { "size": "lg", "variant": "other" }, { "default": ($$result3) => renderTemplate` <span class="text-zinc-500">#</span> ${items}` })}`)} </ul> </div> <div class="grid gap-4 md:grid-flow-col md:grid-rows-2 lg:grid-flow-col h-auto"> ${renderComponent($$result2, "ReactJS", $$ReactJS, { "gridClass": "row-auto md:row-span-1 md:col-span-2 lg:row-span-2" })} ${renderComponent($$result2, "NextJS", $$NextJS, {})} ${renderComponent($$result2, "AstroBanner", $$AstroBanner, {})} </div> ` })}`;
}, "/home/user/coihsan/src/components/section/TechStack.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Muhammad Ihsan" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "InfiniteText", $$InfiniteText, {})} ${renderComponent($$result2, "ProjectList", $$ProjectList, {})} ${renderComponent($$result2, "TechStack", $$TechStack, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/home/user/coihsan/src/pages/index.astro", void 0);

const $$file = "/home/user/coihsan/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
