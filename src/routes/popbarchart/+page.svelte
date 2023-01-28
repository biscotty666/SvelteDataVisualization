<script>
  import { scaleBand, scaleLinear, max } from "d3";
  export let data;

  const { pop } = data;
  const width = 960;
  const height = 500;
  const yScale = scaleBand()
    .domain(pop.map(pop => pop.Country))
    .range([0, height])

  const xScale = scaleLinear()
    .domain([0, max(pop, d => d.Population)])
    .range([0, width])

</script>

<div class="container">
  <svg {width} {height}>
    {#each pop as country}
      <rect 
        x={0} 
        y={yScale(country.Country)} 
        width={xScale(country.Population)}
        height= {yScale.bandwidth()}/>
    {/each}
  </svg>
</div>

<style>
</style>
