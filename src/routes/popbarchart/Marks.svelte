<script>
  export let pop
  export let xScale
  export let yScale
  export let xValue
  export let yValue
</script>

{#each pop as d}
<rect
  x={0}
  y={yScale(yValue(d))}
  width={xScale(xValue(d))}
  height={yScale.bandwidth()}
/>
{/each}

