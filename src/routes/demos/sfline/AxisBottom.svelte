<script>
  export let xScale;
  export let innerHeight;
  export let tickFormat;
  export let tickOffset = 3;
</script>

{#each xScale.ticks() as tickValue}
  <g
    class="tick"
    key={tickValue}
    transform={`translate(${xScale(tickValue)}, 0)`}
  >
    <line y2={innerHeight} />
    <text style="text-anchor: middle" dy=".71em" y={innerHeight + tickOffset}>
      {tickFormat(tickValue)}
    </text>
  </g>
{/each}

<style>
  line {
    stroke: #c0c0bb;
  }
  text {
    font-family: sans-serif;
    fill: #4285b3;
  }
</style>
