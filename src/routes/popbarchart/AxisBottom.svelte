<script>
  export let xScale
  export let innerHeight
</script>

{#each xScale.ticks() as tickValue}
<g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
  <line y2={innerHeight} stroke="black" />
  <text
    style="text-anchor: middle"
    dy=".71em"
    class="tick-text"
    y={innerHeight + 3}
    >{tickValue}
  </text>
</g>
{/each}
