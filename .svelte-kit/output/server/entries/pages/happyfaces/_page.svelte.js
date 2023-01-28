import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each } from "../../../chunks/index.js";
import { arc } from "d3";
const Eyes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eyeOffsetX: eyeOffsetX2 } = $$props;
  let { eyeOffsetY: eyeOffsetY2 } = $$props;
  let { eyeRadius: eyeRadius2 } = $$props;
  if ($$props.eyeOffsetX === void 0 && $$bindings.eyeOffsetX && eyeOffsetX2 !== void 0)
    $$bindings.eyeOffsetX(eyeOffsetX2);
  if ($$props.eyeOffsetY === void 0 && $$bindings.eyeOffsetY && eyeOffsetY2 !== void 0)
    $$bindings.eyeOffsetY(eyeOffsetY2);
  if ($$props.eyeRadius === void 0 && $$bindings.eyeRadius && eyeRadius2 !== void 0)
    $$bindings.eyeRadius(eyeRadius2);
  return `<circle${add_attribute("cx", eyeOffsetX2, 0)}${add_attribute("cy", -eyeOffsetY2, 0)}${add_attribute("r", eyeRadius2, 0)}></circle>
<circle${add_attribute("cx", -eyeOffsetX2, 0)}${add_attribute("cy", -eyeOffsetY2, 0)}${add_attribute("r", eyeRadius2, 0)}></circle>`;
});
const Mouth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mouthRadius: mouthRadius2 } = $$props;
  let { mouthWidth: mouthWidth2 } = $$props;
  const mouthArc = arc().innerRadius(mouthRadius2).outerRadius(mouthRadius2 + mouthWidth2).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);
  if ($$props.mouthRadius === void 0 && $$bindings.mouthRadius && mouthRadius2 !== void 0)
    $$bindings.mouthRadius(mouthRadius2);
  if ($$props.mouthWidth === void 0 && $$bindings.mouthWidth && mouthWidth2 !== void 0)
    $$bindings.mouthWidth(mouthWidth2);
  return `<path${add_attribute("d", mouthArc(), 0)}></path>`;
});
const BackgroundCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { strokeWidth: strokeWidth2 } = $$props;
  let { centerY } = $$props;
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth2 !== void 0)
    $$bindings.strokeWidth(strokeWidth2);
  if ($$props.centerY === void 0 && $$bindings.centerY && centerY !== void 0)
    $$bindings.centerY(centerY);
  return `<circle${add_attribute("r", centerY - strokeWidth2 / 2, 0)} fill="${"yellow"}" stroke="${"black"}"${add_attribute("stroke-width", strokeWidth2, 0)}></circle>`;
});
const Face = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width: width2 } = $$props;
  let { height: height2 } = $$props;
  let { centerX } = $$props;
  let { centerY } = $$props;
  let { strokeWidth: strokeWidth2 } = $$props;
  let { eyeOffsetX: eyeOffsetX2 } = $$props;
  let { eyeOffsetY: eyeOffsetY2 } = $$props;
  let { eyeRadius: eyeRadius2 } = $$props;
  let { mouthRadius: mouthRadius2 } = $$props;
  let { mouthWidth: mouthWidth2 } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width2 !== void 0)
    $$bindings.width(width2);
  if ($$props.height === void 0 && $$bindings.height && height2 !== void 0)
    $$bindings.height(height2);
  if ($$props.centerX === void 0 && $$bindings.centerX && centerX !== void 0)
    $$bindings.centerX(centerX);
  if ($$props.centerY === void 0 && $$bindings.centerY && centerY !== void 0)
    $$bindings.centerY(centerY);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth2 !== void 0)
    $$bindings.strokeWidth(strokeWidth2);
  if ($$props.eyeOffsetX === void 0 && $$bindings.eyeOffsetX && eyeOffsetX2 !== void 0)
    $$bindings.eyeOffsetX(eyeOffsetX2);
  if ($$props.eyeOffsetY === void 0 && $$bindings.eyeOffsetY && eyeOffsetY2 !== void 0)
    $$bindings.eyeOffsetY(eyeOffsetY2);
  if ($$props.eyeRadius === void 0 && $$bindings.eyeRadius && eyeRadius2 !== void 0)
    $$bindings.eyeRadius(eyeRadius2);
  if ($$props.mouthRadius === void 0 && $$bindings.mouthRadius && mouthRadius2 !== void 0)
    $$bindings.mouthRadius(mouthRadius2);
  if ($$props.mouthWidth === void 0 && $$bindings.mouthWidth && mouthWidth2 !== void 0)
    $$bindings.mouthWidth(mouthWidth2);
  return `<svg${add_attribute("width", width2, 0)}${add_attribute("height", height2, 0)}><g${add_attribute("transform", `translate(${centerX},${centerY})`, 0)}>${validate_component(BackgroundCircle, "BackgroundCircle").$$render($$result, { centerY, strokeWidth: strokeWidth2 }, {}, {})}${validate_component(Eyes, "Eyes").$$render($$result, { eyeOffsetX: eyeOffsetX2, eyeOffsetY: eyeOffsetY2, eyeRadius: eyeRadius2 }, {}, {})}${validate_component(Mouth, "Mouth").$$render($$result, { mouthRadius: mouthRadius2, mouthWidth: mouthWidth2 }, {}, {})}</g></svg>`;
});
const width = 160;
const height = 160;
const strokeWidth = 6;
const eyeOffsetX = 20;
const eyeOffsetY = 20;
const eyeRadius = 5;
const mouthWidth = 7;
const mouthRadius = 30;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const centerX = width / 2;
  const centerY = height / 2;
  return `<div class="${"container"}">${each(Array(6 * 3), (_) => {
    return `${validate_component(Face, "Face").$$render(
      $$result,
      {
        width,
        height,
        centerX,
        centerY,
        strokeWidth: strokeWidth + Math.random() * 3,
        eyeOffsetX: eyeOffsetX + Math.random() * 9,
        eyeOffsetY: eyeOffsetY + Math.random() * 15,
        eyeRadius: eyeRadius + Math.random() * 10,
        mouthWidth: mouthWidth + Math.random() * 9,
        mouthRadius: mouthRadius + Math.random() * 10
      },
      {},
      {}
    )}`;
  })}
</div>`;
});
export {
  Page as default
};
