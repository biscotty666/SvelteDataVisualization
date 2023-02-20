import { csv } from "d3"

// const csvUrl = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv'
const csvUrl = 'https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/c22144062566de911ba32509613c84af2a99e8e2/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv'

export const load = async () => {
  
	const prepareData = async () => {
    const row = d => {
      d.temperature = +d['Total Dead and Missing']
      d.timestamp = new Date(d['Reported Date'])
      return d
    }
    const data = await csv(csvUrl, row)
    console.log(data[0])
    return data
	};

  return {
    theData: prepareData()
  }
}