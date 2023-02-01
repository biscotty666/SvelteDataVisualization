<script>
  export let yScale;
  export let innerWidth;
  export let tickOffset = 3
</script>

{#each yScale.ticks() as tickValue}
  <g transform={`translate(0, ${yScale(tickValue)})`}>
    <line x2={innerWidth} />
    <text
      key={tickValue}
      style="text-anchor: end"
      x={-tickOffset}
      dy=".32em"
    >
      {tickValue}
    </text>
  </g>
{/each}

<style>
  text {
    font-family: sans-serif;
    fill: #4285b3;
  }
  line {
    stroke: #c0c0bb;
  }
</style>
