<script>
  import { arc } from "d3";
  export let data;

  const { colors } = data;
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;

  const pieArc = arc()
    .innerRadius(0)
    .outerRadius(width)
</script>

<div class="container">
  <h1>An SVG color wheel of named CSS Colors</h1>
  <svg {width} {height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      {#each colors as color, i}
        <path fill={color["RGB hex value"]} d={pieArc({
          startAngle: i / colors.length * 2 * Math.PI,
          endAngle: (i+1) / colors.length * 2 * Math.PI
        })} />
      {/each}
    </g>
  </svg>
  <p>Demonstrates data loading with d3 and svelte as well as working with svg</p>
</div>

<style>
	.container {
		text-align: center;
		font-family: Roboto, sans-serif;
	}
</style>
