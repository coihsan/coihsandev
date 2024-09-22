/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, d as renderTransition } from '../chunks/astro/server_uskqo4Qm.mjs';
import 'kleur/colors';
import { $ as $$Section, c as $$Icon, b as $$Layout } from '../chunks/Layout_CmVumkKi.mjs';
import { $ as $$BackButton } from '../chunks/BackButton_CG4RkHnB.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const stack = [
	{
		icon: "html",
		name: "HTML 5",
		target: "_blank",
		url: "#"
	},
	{
		icon: "css",
		name: "CSS 3",
		target: "_blank",
		url: "#"
	},
	{
		icon: "javascript",
		name: "Javascript",
		target: "_blank",
		url: "https://javascript.info/"
	},
	{
		icon: "reactjs",
		name: "React.js",
		target: "_blank",
		url: "https://react.dev/"
	},
	{
		icon: "typescript",
		name: "Typescript",
		target: "_blank",
		url: "https://www.typescriptlang.org/"
	},
	{
		icon: "tailwind",
		name: "Tailwind",
		target: "_blank",
		url: "https://tailwindcss.com/"
	},
	{
		icon: "next",
		name: "Next.js",
		target: "_blank",
		url: "https://nextjs.org/"
	},
	{
		icon: "astro",
		name: "Astro.js",
		target: "_blank",
		url: "https://astro.build/"
	},
	{
		icon: "prisma",
		name: "Prisma",
		target: "_blank",
		url: "https://prisma.io/"
	},
	{
		icon: "jest",
		name: "Jest",
		target: "_blank",
		url: "https://jestjs.io/"
	},
	{
		icon: "redux",
		name: "Redux",
		target: "_blank",
		url: "https://redux.js.org/"
	},
	{
		icon: "figma",
		name: "Figma",
		target: "_blank",
		url: "https://figma.com/"
	},
	{
		icon: "photoshop",
		name: "Photoshop",
		target: "_blank",
		url: "https:adobe.com"
	},
	{
		icon: "googleanalytics",
		name: "Analytics",
		target: "_blank",
		url: "https://analytics.google.com/"
	},
	{
		icon: "googleads",
		name: "Ads",
		target: "_blank",
		url: "https://ads.google.com/"
	},
	{
		icon: "github",
		name: "GitHub",
		target: "_blank",
		url: "https://github.com/"
	}
];
const data = {
	stack: stack
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "paddingYCustom": "py-4 lg:py-12 xl:py-12" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BackButton", $$BackButton, { "label": "About" })} ${maybeRenderHead()}<article class="prose"${addAttribute(renderTransition($$result3, "6n4ujmqy", "", "swap"), "data-astro-transition-scope")}> <h1>Hello! I'm Muhammad Ihsan</h1> <p>I'm a frontend web developer and digital marketing enthusiast especially with a primary focus on SEM, SEO and Web Development using JavaScript framework.</p> <h3>What I'm doing now</h3> <ul> <li>Working full time</li> <li>Building a replica of our home out of Lego</li> <li>Trying for the nth time to get into shape</li> <li>Tweaking this website</li> </ul> <h3>Popular technologies I'm using</h3> <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8 not-prose"> ${data.stack.map((item) => renderTemplate`<a${addAttribute(`${item.url}`, "href")} class="not-prose flex flex-col items-center justify-center gap-2 border border-zinc-800 rounded-2xl p-4 hover:bg-zinc-900 transitionSetting"> ${renderComponent($$result3, "Icon", $$Icon, { "name": item.icon, "size": 25 })} <span class="whitespace-nowrap">${item.name}</span> </a>`)} </div> </article> ` })} ` })}`;
}, "/home/user/coihsan/src/pages/about.astro", "self");

const $$file = "/home/user/coihsan/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
