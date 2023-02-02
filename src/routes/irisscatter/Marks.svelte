<script>
  import { fade } from "svelte/transition";
  export let filteredFlowers
  export let xScale
  export let yScale
  export let xValue
  export let yValue
  export let tooltipFormat
  export let circleRadius
  export let colorScale
  export let colorValue
</script>

{#each filteredFlowers as d}
<circle
  cx={xScale(xValue(d))}
  cy={yScale(yValue(d))}
  fill={colorScale(colorValue(d))}
  r={circleRadius}
  out:fade="{{delay: 250, duration: 200}}"
  in:fade="{{delay: 100, duration: 200}}"
>
 <title>{tooltipFormat(xValue(d))}</title>
</circle>

{/each}

<style>
  /* circle {
    fill: #137B80;
  } */
</style>