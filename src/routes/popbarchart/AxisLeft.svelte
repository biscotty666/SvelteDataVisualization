<script>
  export let yScale
</script>

{#each yScale.domain() as tickValue}
<text
  key={tickValue}
  style="text-anchor: end"
  x={-5}
  dy=".32em"
  y={yScale(tickValue) + yScale.bandwidth() / 2}
  >{tickValue}
</text>
{/each}

<style>
  text {
    font-family: sans-serif;
    fill: #4285B3;
  }
</style>

