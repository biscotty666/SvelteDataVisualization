import { c as create_ssr_component, d as add_attribute, f as each } from "../../../chunks/index.js";
import { arc } from "d3";
const width = 960;
const height = 500;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { colors } = data;
  const centerX = width / 2;
  const centerY = height / 2;
  const pieArc = arc().innerRadius(0).outerRadius(width);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"container"}"><svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}><g${add_attribute("transform", `translate(${centerX}, ${centerY})`, 0)}>${each(colors, (color, i) => {
    return `<path${add_attribute("fill", color["RGB hex value"], 0)}${add_attribute(
      "d",
      pieArc({
        startAngle: i / colors.length * 2 * Math.PI,
        endAngle: (i + 1) / colors.length * 2 * Math.PI
      }),
      0
    )}></path>`;
  })}</g></svg>
</div>`;
});
export {
  Page as default
};
