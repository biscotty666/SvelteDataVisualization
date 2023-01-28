import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const width = 960;
const height = 500;
const circleRadius = 30;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mousePosition;
  mousePosition = { x: width / 2, y: height / 2 };
  return `<div class="${"container"}"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><circle${add_attribute("cx", mousePosition.x, 0)}${add_attribute("cy", mousePosition.y, 0)}${add_attribute("r", circleRadius, 0)}></circle></svg>
</div>`;
});
export {
  Page as default
};
