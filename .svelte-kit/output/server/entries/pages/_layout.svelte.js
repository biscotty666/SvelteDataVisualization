import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1mun0q1{background-color:#212529;color:white}.container.svelte-1mun0q1{display:flex;align-items:center}a.svelte-1mun0q1{color:#aaa;text-decoration:none;padding-left:5px}.active.svelte-1mun0q1{color:white}ul.svelte-1mun0q1{display:flex;list-style:none;margin-left:auto;font-size:1em}li.svelte-1mun0q1{margin-right:20px}h1.svelte-1mun0q1{margin:0;font-size:1.1em;font-weight:normal}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<nav class="${"svelte-1mun0q1"}"><div class="${"container svelte-1mun0q1"}"><h1 class="${"svelte-1mun0q1"}"><a href="${"/"}" class="${"active svelte-1mun0q1"}">Data Visualizations</a></h1>
		<ul class="${"svelte-1mun0q1"}"><li class="${"svelte-1mun0q1"}"><a href="${"/happyfaces"}" class="${["svelte-1mun0q1", routeId == "/happyfaces" ? "active" : ""].join(" ").trim()}">Happy Faces</a>
				<a href="${"/stickycircle"}" class="${["svelte-1mun0q1", routeId == "/stickycircle" ? "active" : ""].join(" ").trim()}">Sticky Circle</a>
				<a href="${"/colors"}" class="${["svelte-1mun0q1", routeId == "/colors" ? "active" : ""].join(" ").trim()}">Colors</a></li></ul></div>
</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
