<script>
  import { geoPath, geoNaturalEarth1, geoGraticule } from "d3";

  export let theData

  const projection = geoNaturalEarth1()
  const path = geoPath(projection)
  const { land, interiors} = theData
  const graticule = geoGraticule()

</script>

<path class='sphere' d={path({ type: 'Sphere'})} />
<path class="graticules" d={path(graticule())} />
{#each land.features as feature}
<path
  class="country"
  d={path(feature)} 
/>
{/each}
<path class="interiors" d={path(interiors)} />

<style>
  .country {
    fill: #137B80;
  }
  .interiors {
    fill: none;
    stroke: #339498;
  }
  .sphere {
    fill: #ececec;
  }
  .graticules {
    fill: none;
    stroke: #dadada;
  }
</style>