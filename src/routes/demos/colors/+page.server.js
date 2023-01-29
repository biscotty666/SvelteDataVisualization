import { csv } from "d3"

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'

export const load = async () => {
  
	const getColors = async () => {
    // const row = d => {
    //   d.sepal_length = +d.sepal_length
    //   d.sepal_width = +d.sepal_width
    //   d.petal_length = +d.petal_length
    //   d.petal_width = +d.petal_width
    //   return d
    // }
    const data = await csv(csvUrl)
    console.log(data)
    return data
	};

  return {
    colors: getColors()
  }
}