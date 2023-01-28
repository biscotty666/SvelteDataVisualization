<script>
  export let pop
  export let xScale
  export let yScale
</script>

{#each pop as country}
<rect
  key={country.Country}
  x={0}
  y={yScale(country.Country)}
  width={xScale(country.Population)}
  height={yScale.bandwidth()}
/>
{/each}

