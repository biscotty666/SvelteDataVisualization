<script>
  import { scaleBand, scaleLinear, max } from "d3";
  export let data;

  const { pop } = data;
  const width = 960;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 20, left: 100 };

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(pop.map((pop) => pop.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(pop, (d) => d.Population)])
    .range([0, innerWidth]);
</script>

<div class="container">
  <svg {width} {height}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
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
      {#each pop as country}
        <rect
          key={country.Country}
          x={0}
          y={yScale(country.Country)}
          width={xScale(country.Population)}
          height={yScale.bandwidth()}
        />
      {/each}
    </g>
  </svg>
</div>

<style>
  .tick-text {
    text-anchor: "middle";
    /* font-family: sans-serif; */
  }
</style>
