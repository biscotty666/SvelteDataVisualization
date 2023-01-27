<script>
  
  export let data

  const {colors} = data

</script>

<div class="container">
  {#each colors as color}
    <p>{color.Keyword}</p>
  {/each}
</div>

<style>

</style>