<script>
  export let theData
  export let xScale
  export let yScale
  export let xValue
  export let yValue
  export let tooltipFormat
  export let circleRadius
</script>

{#each theData as d}
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
</style>