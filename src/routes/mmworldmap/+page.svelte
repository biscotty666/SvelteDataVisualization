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
    <svg {width} {height}>
      <Marks
        {theData}
      />
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
