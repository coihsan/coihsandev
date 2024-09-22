/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_uskqo4Qm.mjs';
import 'kleur/colors';
import { $ as $$Section, b as $$Layout } from '../chunks/Layout_CmVumkKi.mjs';
import { d as data, $ as $$CardWrapper, a as $$Tags } from '../chunks/data_tj6kxNsZ.mjs';
import { $ as $$BackButton } from '../chunks/BackButton_CG4RkHnB.mjs';
export { renderers } from '../renderers.mjs';

const $$Repository = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Muhammad Ihsan" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "paddingYCustom": "py-4 lg:py-12 xl:py-12" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BackButton", $$BackButton, { "label": "Repository" })} ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-4"> ${data.datague.map((stack) => renderTemplate`${renderComponent($$result3, "CardWrapper", $$CardWrapper, { "title": stack.title, "description": stack.description, "urlDemo": stack.urlDemo, "urlSource": stack.urlSource }, { "default": ($$result4) => renderTemplate` <div class="absolute right-4 top-4"> ${renderComponent($$result4, "Tags", $$Tags, { "size": "xs", "variant": stack?.tagColor }, { "default": ($$result5) => renderTemplate`${stack.tagName}` })} </div> ` })}`)} </div> ` })} ` })}`;
}, "/home/user/coihsan/src/pages/repository.astro", void 0);

const $$file = "/home/user/coihsan/src/pages/repository.astro";
const $$url = "/repository";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Repository,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
