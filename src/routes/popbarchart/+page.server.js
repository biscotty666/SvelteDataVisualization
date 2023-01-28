import { csv } from "d3"

const csvUrl = 'https://gist.githubusercontent.com/biscotty666/9dcc3e250f5772e16e2b5112e02aada0/raw/a37dc899e9aca6dcaf0ca21b53e6620992169f20/UNPopProj.csv'

export const load = async () => {
  
	const getPop = async () => {
    const row = d => {
      d.Population = +d['2100']
    //   d.sepal_length = +d.sepal_length
    //   d.sepal_width = +d.sepal_width
    //   d.petal_length = +d.petal_length
    //   d.petal_width = +d.petal_width
      return d
    }
    const data = await csv(csvUrl, row)
    console.log(data[0])
    return data.slice(0,10)
	};

  return {
    pop: getPop()
  }
}