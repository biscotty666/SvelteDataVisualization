<script>
  // export let colorScale
  export let flowers
  export let colors
  export let width
  

  // domainValue =  colorScale.domain().map(domainValue => {
  //   console.log(domainValue);
  // })
  $: reactiveFilters = [...colors];
  $: reactiveFilter = (color) => {
      if (reactiveFilters.includes(color)) reactiveFilters = reactiveFilters.filter((col) => col !== color);
      else reactiveFilters = [...reactiveFilters, color];
    };
</script>

<section class="scatter_legend" style="width:{width/10}px; font-size: {width/75}px">
  {#if flowers}
  <h1 class="legend_title"><b>Legend</b></h1>
  <h5 class="legend_note">Click to Filter</h5>
    {#each flowers as flower, i}  
      <!-- <div class="scatter_legend_info" on:click={() => reactiveFilter(colors[i])}> -->
        <span 
        class="scatter_legend_span" style="background-color: {colors[i]}; height:{width/50}px; width:{width/50}px; " /> -->
        {flower}
      <!-- </div> -->
    {/each}
  {/if}
</section>