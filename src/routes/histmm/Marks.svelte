<script>
    import { line, curveNatural } from "d3";


  export let theData
  export let xScale
  export let yScale
  export let xValue
  export let yValue
  export let tooltipFormat
  export let circleRadius
</script>

{#each theData as d}
<path
  class="line"
  d={line()
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    .curve(curveNatural)(theData)} 
/>
<circle
  cx={xScale(xValue(d))}
  cy={yScale(yValue(d))}
  r={circleRadius}
>
 <title>{tooltipFormat(xValue(d))}</title>
</circle>

{/each}

<style>
  circle {
    fill: #137B80;
  }
  path {
    fill: none;
    stroke: #137B80;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
</style>