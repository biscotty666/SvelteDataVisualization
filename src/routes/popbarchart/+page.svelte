<script>
  import { scaleBand, scaleLinear, max } from "d3";
  import AxisBottom from "./AxisBottom.svelte";
  import AxisLeft from "./AxisLeft.svelte";
  import Marks from "./Marks.svelte";

  export let data;

  const { pop } = data;
  const width = 960;
  const height = 500;
  const margin = { top: 20, right: 20, bottom: 20, left: 100 };

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = pop => pop.Country
  const xValue = pop => pop.Population

  const yScale = scaleBand()
    .domain(pop.map(yValue))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(pop, xValue)])
    .range([0, innerWidth]);
</script>

<div class="container">
  <svg {width} {height}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <AxisBottom {xScale} {innerHeight} />
      <AxisLeft {yScale} />
      <Marks {pop} {yScale} {xScale} />
    </g>
  </svg>
</div>

<style>

</style>
