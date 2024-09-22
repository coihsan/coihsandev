import { e as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_uskqo4Qm.mjs';
import 'kleur/colors';
import { c as $$Icon, a as $$Link } from './Layout_CmVumkKi.mjs';

const $$Astro = createAstro("https://coihsan.github.io");
const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackButton;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-3 pb-6"> ${renderComponent($$result, "Link", $$Link, { "variant": "outline", "size": "icon", "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "home", "size": 22 })} ` })} <span>${label}</span> </div>`;
}, "/home/user/coihsan/src/components/ui/BackButton.astro", void 0);

export { $$BackButton as $ };
