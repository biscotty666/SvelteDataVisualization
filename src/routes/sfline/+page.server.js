import { csv } from "d3"

const csvUrl = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv'

export const load = async () => {
  
	const prepareData = async () => {
    const row = d => {
      d.temperature = +d.temperature
      d.timestamp = new Date(d.timestamp)
      return d
    }
    const data = await csv(csvUrl, row)
    console.log(data)
    return data
	};

  return {
    theData: prepareData()
  }
}