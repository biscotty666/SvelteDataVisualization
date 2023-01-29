import { json } from "d3"
import { feature, mesh } from "topojson"

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

export const load = async () => {
  
	const prepareData = async () => {
    const data = await json(jsonUrl)
    const { countries, land } = data.objects
    const features = feature(data, countries)
  
    return {
      land: feature(data, land),
      interiors: mesh(data, countries, (a,b) => a !== b)
    }
	};

  // console.log(prepareData())

  return {
    theData: prepareData()
  }
}