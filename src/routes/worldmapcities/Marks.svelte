<script>
  import { geoPath, geoNaturalEarth1, geoGraticule } from "d3";
    import { xlink_attr } from "svelte/internal";

  export let countriesData
  export let citiesData

  const projection = geoNaturalEarth1()
  const path = geoPath(projection)
  const { land, interiors} = countriesData
  const { cities } = citiesData
  const graticule = geoGraticule()
  const citiesProjection = geoNaturalEarth1()

  const citiesProject = (d) => {
    let [x,y] = projection([d.lng, d.lat])
    return {
      x: x,
      y: y
    }
  }

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
{#each cities as d}
  <circle cx={citiesProject(d).x} cy={citiesProject(d).y} r={1.5} />
{/each}

<style>
  .country {
    fill: #d8d8d8;
  }
  .interiors {
    fill: none;
    stroke: #c3c3c3;
  }
  .sphere {
    fill: #fbfbfb;
  }
  .graticules {
    fill: none;
    stroke: #ececec;
  }
  circle {
    fill: #137b80;
    opacity: 0.3;
  }
</style>