<script>
  import { scaleBand, scaleLinear, max, format } from "d3";
  import AxisBottom from "./AxisBottom.svelte";
  import AxisLeft from "./AxisLeft.svelte";
  import Marks from "./Marks.svelte";

  export let data;

  const { pop } = data;
  const width = 960;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 65, left: 100 };
  const xAxisLabelOffset = 50
  const siFormat = format(".2s")
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = pop => pop.Country
  const xValue = pop => pop.Population

  const yScale = scaleBand()
    .domain(pop.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(pop, xValue)])
    .range([0, innerWidth]);

</script>
{#if data}
<div class="container">
  <h1>Top Ten Countries By Population in 2100</h1>
  <h3>From <a href='https://population.un.org/wpp/Download/Standard/MostUsed/'>UN Predictive Data</a></h3>
  <svg {width} {height}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <AxisBottom 
        {xScale} 
        {innerHeight} 
        tickFormat={xAxisTickFormat}
      />
      <AxisLeft {yScale} />
      <text 
        x={innerWidth / 2} 
        text-anchor='middle'
        y={innerHeight + xAxisLabelOffset}
      >
      Population
    </text>
      <Marks 
        {pop} 
        {yScale} 
        {xScale} 
        {yValue} 
        {xValue}
        tooltipFormat={xAxisTickFormat}
      />
    </g>
  </svg>
</div>
{:else}
  <p>Loading...</p>
{/if}
<style>
  h1, h3 {
    text-align: center;
    font-family: Roboto, sans-serif;
    color: #005D6E;
  }
  a {
    text-decoration: none;
  }
  text {
    font-size: 2.5em;
    fill: #005D6E;
    font-family: Roboto;
  }
</style>