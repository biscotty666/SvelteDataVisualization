<script>
  // import { scaleTime, scaleLinear, extent, timeFormat } from "d3";
  import Marks from "./Marks.svelte";

  export let data;

  const { countriesData, citiesData } = data;
  const width = 960;
  const height = 500;
</script>

{#if data}
  <div class="container">
    <h1>World Cities</h1>
    <h3>Population greater than 50,000 people</h3>
        <svg {width} {height}>
      <Marks {countriesData} {citiesData} />
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
