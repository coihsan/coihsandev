import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, f as renderSlot, s as spreadAttributes } from './astro/server_uskqo4Qm.mjs';
import 'kleur/colors';
import { c as $$Icon, a as $$Link } from './Layout_CmVumkKi.mjs';
import { cva } from 'class-variance-authority';
import 'clsx';

const $$Astro$1 = createAstro("https://coihsan.github.io");
const $$CardWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardWrapper;
  const { title, description, urlDemo, urlSource } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-zinc-950 rounded-lg border border-white/20 p-6 w-full relative"> <div class="flex flex-col gap-2 pb-4"> <a class="text-xl font-semibold hover:underline w-max"${addAttribute(urlDemo, "href")} target="_blank" rel="noopener noreferrer">${title}</a> <p class="text-sm text-zinc-400 min-h-12">${description}</p> </div> <div class="w-max flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "variant": "default", "size": "sm", "href": `${urlSource}` }, { "default": ($$result2) => renderTemplate`
Source
${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowupright" })} ` })} ${renderComponent($$result, "Link", $$Link, { "variant": "default", "size": "sm", "href": `${urlDemo}` }, { "default": ($$result2) => renderTemplate`
Demo
${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowupright" })} ` })} </div> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/user/coihsan/src/components/ui/CardWrapper.astro", void 0);

const $$Astro = createAstro("https://coihsan.github.io");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const colorVariants = cva(
    "inline-flex items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 font-semibold whitespace-nowrap",
    {
      variants: {
        variant: {
          zinc: "border-zinc-500 bg-zinc-900 text-zinc-400",
          purple: "border-purple-500 bg-purple-950 text-purple-400",
          fuchsia: "border-fuchsia-500 bg-fuchsia-950 text-fuchsia-300",
          sky: "border-sky-500 bg-sky-950 text-sky-400",
          teal: "border-teal-500 bg-teal-950 text-teal-400",
          indigo: "border-indigo-500 bg-indigo-950 text-indigo-400",
          emerald: "border-emerald-500 bg-emerald-950 text-emerald-400",
          other: "border-zinc-800 bg-zinc-950 text-zinc-400"
        },
        size: {
          sm: "text-sm",
          xs: "text-xs",
          lg: "h-8 px-4 py-2 text-sm",
          default: "text-base"
        },
        defaultVariants: {
          variant: "zinc",
          size: "default"
        }
      }
    }
  );
  const { variant, size, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(colorVariants({ variant, size }), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/user/coihsan/src/components/ui/Tags.astro", void 0);

const datague = [
	{
		title: "TaskyApp",
		description: "A free, open source kanban app for the web.",
		urlDemo: "https://github.com/",
		urlSource: "https://github.com/coihsan/taskyapp-demo",
		tagColor: "sky",
		tagName: "Saas",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	},
	{
		title: "coihsan",
		description: "The source of this website.",
		urlDemo: "https://github.com/",
		urlSource: "https://github.com/",
		tagColor: "zinc",
		tagName: "Template",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	},
	{
		title: "yourgrandpa",
		description: "A Task Manager for free and public source code",
		urlDemo: "https://github.com/",
		urlSource: "https://github.com/",
		tagColor: "fuchsia",
		tagName: "Blog",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	},
	{
		title: "authjs-starter",
		description: "Auth.js v5 Starter for credentials, google & github",
		urlSource: "https://github.com/",
		tagColor: "zinc",
		tagName: "Template",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	},
	{
		title: "karsa-mahasura-template",
		description: "Template for personal potfolios",
		urlDemo: "https://github.com/",
		urlSource: "https://github.com/",
		tagColor: "zinc",
		tagName: "Template",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	},
	{
		title: "bhadrika-cipta-template",
		description: "Template for personal potfolios",
		urlDemo: "https://github.com/",
		urlSource: "https://github.com/",
		tagColor: "zinc",
		tagName: "Template",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	},
	{
		title: "zinc-starters-rgkhtp",
		description: "Template for landing page",
		urlDemo: "https://zinc-starter.vercel.app/",
		urlSource: "https://github.com/",
		tagColor: "zinc",
		tagName: "Template",
		techStack: [
			"nextjs",
			"prisma",
			"nextAuth",
			"redux"
		]
	}
];
const data = {
	datague: datague
};

export { $$CardWrapper as $, $$Tags as a, data as d };
