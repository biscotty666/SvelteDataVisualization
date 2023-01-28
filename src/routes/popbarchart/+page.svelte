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
</div>

<style>
</style>
