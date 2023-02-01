import { json, csv } from "d3"
import { mesh } from "topojson-client"
import { feature } from "topojson-client"

const countriesUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'
const citiesUrl = 'https://gist.githubusercontent.com/biscotty666/5ba7671e8c72b3147d387035bb5624a9/raw/b10d3742b41d28def93466fbce80a4f0a5a0a71d/WorldCities'

export const load = async () => {
  
	const prepareCountries = async () => {
    const data = await json(countriesUrl)
    const { countries, land } = data.objects
    const features = feature(data, countries)
  
    return {
      land: feature(data, land),
      interiors: mesh(data, countries, (a,b) => a !== b)
    }
	};

  const row = d => {
    d.lat = +d.lat
    d.lng = +d.lng
    return d
  }

	const prepareCities = async () => {
    const data = await csv(citiesUrl, row)
    console.log(data)
  
    return {
      cities: data,
    }
	};

  // console.log(prepareData())

  return {
    countriesData: prepareCountries(), 
    citiesData: prepareCities()
  }
}