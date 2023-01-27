<script>
  
  export let data

  // console.log(data);

  const {flowers} = data
  console.log(flowers);
</script>

<div class="container">
  {#each flowers as item}
    <p>{item.species}</p>
  {/each}
</div>

<style>

</style>