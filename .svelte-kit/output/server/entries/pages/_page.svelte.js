import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><h1>Data Visualizations</h1>
<p>A Svelte recasting of the <a href="${"https://www.youtube.com/channel/UCSwd_9jyX4YtDYm9p9MxQqw"}">Excellent Series</a> by Curran Kelleher using D3 with React.</p>
</div>`;
});
export {
  Page as default
};
