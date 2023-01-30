<script>
  // import { scaleTime, scaleLinear, extent, timeFormat } from "d3";
  import Marks from "./Marks.svelte";

  export let data;

  const { theData } = data;
  const width = 960;
  const height = 500;
</script>

{#if data}
  <div class="container">
    <h1>A Map of the Globe</h1>
    <svg {width} {height}>
      <Marks
        {theData}
      />
    </svg>
    <p>Demonstrates working with spatial data (topojson) in d3 and Svelte using svg</p>
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
