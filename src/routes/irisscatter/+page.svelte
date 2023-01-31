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
  const yAxisLabelOffset = 250;
  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const options = [
    { value: "sepal_length", label: "Sepal Length" },
    { value: "sepal_width", label: "Sepal Width" },
    { value: "petal_length", label: "Petal Length" },
    { value: "petal_width", label: "Petal Width" },
  ];

  const getLabel = (value) => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        return options[i].label;
      }
    }
  };
  let xSelectedValue = "sepal_length";
  let xAxisLabel = getLabel(xSelectedValue);
  let isChangedX = false;
  let xValue = (flowers) => flowers[xSelectedValue];
  let colorValue = (flowers) => flowers['species'];
  let xScale = scaleLinear()
    .domain(extent(flowers, xValue))
    .range([0, innerWidth])
    .nice();

  $: {
    if (isChangedX) {
      xValue = (flowers) => flowers[xSelectedValue];
      xScale = scaleLinear()
        .domain(extent(flowers, xValue))
        .range([0, innerWidth])
        .nice();
      xAxisLabel = getLabel(xSelectedValue)
      isChangedX = false;
      console.log(xValue);
      console.log(xSelectedValue);
      console.log(options[0]);
    }
  }

  let ySelectedValue = "sepal_width";
  let yAxisLabel = getLabel(ySelectedValue);
  let yValue = (flowers) => flowers[ySelectedValue];
  let isChangedY = false;
  let yScale = scaleLinear()
    .domain(extent(flowers, yValue))
    .range([0, innerHeight]);

  $: {
    if (isChangedY) {
      yValue = (flowers) => flowers[ySelectedValue];
      yScale = scaleLinear()
        .domain(extent(flowers, yValue))
        .range([0, innerHeight]);
      yAxisLabel = getLabel(ySelectedValue);
      isChangedY = false;
    }
  }

  console.log(xValue);

</script>

{#if data}
  <div class="container">
    <div class="menus">
      <p>{colorValue}</p>
      <label for="x-select">X Axis:</label>
      <select
        id="x-select"
        bind:value={xSelectedValue}
        on:change={() => (isChangedX = true)}
      >
        {#each options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
      <label for="y-select">Y Axis:</label>
      <select
        id="y-select"
        bind:value={ySelectedValue}
        on:change={() => (isChangedY = true)}
      >
        {#each options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>
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
        <AxisLeft {yScale} {innerWidth} tickOffset={7} />
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
  .container {
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
  .menus {
    align-items: center;
    width: 100%;
    font-size: 2em;
  }
  select {
    font-size: 1em;
  }
</style>
