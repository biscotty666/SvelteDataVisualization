<script>
    import { scaleSqrt, max } from "d3";

  // import { scaleTime, scaleLinear, extent, timeFormat } from "d3";
  import Marks from "./Marks.svelte";

  export let data;

  const { countriesData, citiesData } = data;
  const width = 960;
  const height = 500;
  const maxRadius = 15

</script>

{#if data}
  <div class="container">
    <h1>World Cities</h1>
    <h3>Population greater than 50,000 people</h3>
    <p>City Size shown by size of the dots.</p>
        <svg {width} {height}>
      <Marks {countriesData} {citiesData} {maxRadius} />
    </svg>
  </div>
{:else}
  <p>Loading...</p>
{/if}

<style>
	.container {
		text-align: center;
		font-family: Roboto, sans-serif;
	}
</style>
