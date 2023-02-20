<script>
  import { max, scaleSqrt, geoPath, geoNaturalEarth1, geoGraticule } from "d3";

  export let countriesData
  export let citiesData
  export let maxRadius

  const projection = geoNaturalEarth1()
  const path = geoPath(projection)
  const { land, interiors} = countriesData
  const { cities } = citiesData
  const graticule = geoGraticule()
  const citiesProjection = geoNaturalEarth1()

  const sizeValue = (d) => {
    console.log(d['population'])
    return d.population
  }

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius])


  const citiesProject = (d) => {
    let [x,y] = projection([d.lng, d.lat])
    return {
      x: x,
      y: y
    }
  }

  const citiesRadius = (d) => sizeScale(sizeValue(d))


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
  <circle cx={citiesProject(d).x} cy={citiesProject(d).y} r={citiesRadius(d)} />
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