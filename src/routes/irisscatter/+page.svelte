<script>
  import { scaleOrdinal, scaleLinear, max, min, extent, format } from "d3";
  import AxisBottom from "./AxisBottom.svelte";
  import AxisLeft from "./AxisLeft.svelte";
  import Marks from "./Marks.svelte";

  export let data;

  const { flowers } = data;
  const width = 860;
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
      xAxisLabel = getLabel(xSelectedValue);
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

  let colorValue = (flowers) => flowers["species"];
  const colors = ["#E6842A", "#137B80", "#8E6C8A"];
  const colorMap = {
    '#E6842A': 'setosa',
    "#137B80": 'versicolor',
    "#8E6C8A": "virginica"
  }
  console.log(colorMap['#137B80']);

  const colorScale = scaleOrdinal()
    .domain(flowers.map(colorValue))
    .range(colors);

  let filteredFlowers = flowers
  let searchTerm = "";
  const colorDomain = colorScale.domain();
  let isFiltered = false
  $: {
    if (isFiltered) {
      filteredFlowers = filterHandler(flowers, searchTerm);
      isFiltered = false
    }
  }
  const filterHandler = (flowers, color) => {
    return flowers.filter((flower) => flower.species === color);
  };

  const unFilter = () => {
    filteredFlowers = flowers
  }

  const filter = (colorValue) => {
    searchTerm = colorMap[colorValue]
    isFiltered = true
  }

</script>

<h1>The Iris Dataset</h1>
{#if data}
  <div class="container">
    <div class="plot">
      <div class="menus">
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
            {filteredFlowers}
            {yScale}
            {xScale}
            {yValue}
            {xValue}
            {colorScale}
            {colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={7}
          />
        </g>
      </svg>
    </div>
      {#if flowers}
        <div class="legend" >
          <div class="legend-title">
            <h3 class="legend_title"><b>Species</b></h3>
          </div>
          <div 
            class="legend-items" 
          >
            {#each colorDomain as color, i}
              <!-- <div class="scatter_legend_info" > -->
              <div
                class="scatter_legend"
                on:mouseenter={() => {filter(colors[i])}}
                on:mouseleave={() => {unFilter()}}
                  >
                <span 
                  class="scatter_legend_span" 
                  style="color: {colors[i]};"
                  on:click={() => reactiveFilter(colors[i])}
                  >&#8226;</span
                >
                {color}
              </div>
            {/each}
            <p>Hover to view species</p>
          </div>
        </div>
      {/if}
  </div>
{:else}
  <p>Loading...</p>
{/if}

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr, 80px;
    grid-auto-rows: auto;
    align-items: center;
    row-gap: 0px;
    column-gap: 0px;
    width: 100%;
    text-align: center;
    font-family: Roboto, sans-serif;
    color: #005d6e;
  }
  .plot {
    grid-row: 1;
  }
  .legend {
    /* background-color: cyan; */
    grid-row: 1;
    width: 100px;
    height: 100px;
    border: 1px black solid;
    margin: 0px;
  }
  a {
    text-decoration: none;
  }
  text {
    font-size: 2.5em;
    fill: #005d6e;
    font-family: Roboto;
  }
  p {
    font-size: .8em;
  }
  .menus {
    align-items: center;
    width: 100%;
    font-size: 1.5em;
  }
  select {
    font-size: 0.75em;
  }
  .scatter_legend {
    font-size: 1em;
  }
  .scatter_legend_span {
    font-size: 1.5em;
    line-height: 0.5em;
  }
  .legend_title {
    padding-bottom: 3px;
    margin-top: 2px;
    margin-bottom: 3px;
  }
  .legend-items {
    padding-bottom: 3px;
  }
  h1 {
    text-align: center;
  }
</style>
