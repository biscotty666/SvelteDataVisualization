<script>
  import { scaleBand, scaleLinear, max, min, extent, format } from "d3";
  import AxisBottom from "./AxisBottom.svelte";
  import AxisLeft from "./AxisLeft.svelte";
  import Marks from "./Marks.svelte";

  export let data;

  const { flowers } = data;
  const width = 960;
  const height = 500;
  const margin = { top: 30, right: 10, bottom: 65, left: 100 };
  const xAxisLabelOffset = 50;
  const yAxisLabelOffset = 250
  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (flowers) => flowers.sepal_length;
  const xAxisLabel = "Sepal Length";

  const yValue = (flowers) => flowers.sepal_width;
  const yAxisLabel = "Sepal Width";

  const xScale = scaleLinear()
    .domain(extent(flowers, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(flowers, yValue))
    .range([0, innerHeight])
</script>

{#if data}
  <div class="container">
    <svg {width} {height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          {xScale} 
          {innerHeight} 
          tickFormat={xAxisTickFormat} 
          tickOffset={5}
        />
        <text
          x={yAxisLabelOffset}
          y={innerHeight / 2}
          text-anchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft 
          {yScale} 
          {innerWidth} 
          tickOffset={7}
        />
        <text
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          text-anchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks
          {flowers}
          {yScale}
          {xScale}
          {yValue}
          {xValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={7}
        />
      </g>
    </svg>
  </div>
{:else}
  <p>Loading...</p>
{/if}

<style>
  h1,
  h3 {
    text-align: center;
    font-family: Roboto, sans-serif;
    color: #005d6e;
  }
  a {
    text-decoration: none;
  }
  text {
    font-size: 2.5em;
    fill: #005d6e;
    font-family: Roboto;
  }
</style>
