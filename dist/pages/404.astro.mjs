/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_uskqo4Qm.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/Image_BKUxb09p.mjs';
import { $ as $$Section, a as $$Link, b as $$Layout } from '../chunks/Layout_CmVumkKi.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center h-full"> ${renderComponent($$result3, "Image", $$Image, { "loading": "eager", "class": "rounded-xl mb-8", "src": "/src/assets/ruben.gif", "width": 300, "height": 198, "alt": "minion gif" })} <h3 class="text-lg">Oooopps!</h3> <span class="text-4xl mb-3 sm:text-3xl">Sorry Not Found!</span> ${renderComponent($$result3, "Link", $$Link, { "variant": "default", "size": "lg", "href": "/" }, { "default": ($$result4) => renderTemplate`Go Back!` })} </div> ` })} ` })}`;
}, "/home/user/coihsan/src/pages/404.astro", void 0);

const $$file = "/home/user/coihsan/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
