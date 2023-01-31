import { csv } from "d3"

const csvUrl = 'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv'

export const load = async () => {
  
	const getFlowers = async () => {
    const row = d => {
      d.sepal_length = +d.sepal_length
      d.sepal_width = +d.sepal_width
      d.petal_length = +d.petal_length
      d.petal_width = +d.petal_width
      return d
    }
    const data = await csv(csvUrl, row)
    // console.log(data)
    return data
	};

  return {
    flowers: getFlowers()
  }
}