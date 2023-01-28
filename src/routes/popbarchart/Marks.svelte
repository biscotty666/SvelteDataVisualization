<script>
  export let pop
  export let xScale
  export let yScale
  export let xValue
  export let yValue
  export let tooltipFormat
</script>

{#each pop as d}
<rect
  x={0}
  y={yScale(yValue(d))}
  width={xScale(xValue(d))}
  height={yScale.bandwidth()}
>
 <title>{tooltipFormat(xValue(d))}</title>
</rect>

{/each}

<style>
  rect {
    fill: #137B80;
  }
</style>