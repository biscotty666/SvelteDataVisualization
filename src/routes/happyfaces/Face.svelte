<script>
  import Eyes from "./Eyes.svelte";
  import Mouth from "./Mouth.svelte";
  import BackgroundCircle from "./BackgroundCircle.svelte";

  export let width
  export let height
  export let centerX
  export let centerY
  export let strokeWidth
  export let eyeOffsetX
  export let eyeOffsetY
  export let eyeRadius
  export let mouthRadius
  export let mouthWidth
</script>

<svg {width} {height}>
  <g transform={`translate(${centerX},${centerY})`}>
    <BackgroundCircle {centerY} {strokeWidth}/>
    <Eyes {eyeOffsetX} {eyeOffsetY} {eyeRadius} />
    <Mouth {mouthRadius} {mouthWidth} />
  </g>
</svg>