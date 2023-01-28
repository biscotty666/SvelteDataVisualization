import { csv } from "d3";
const csvUrl = "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";
const load = async () => {
  const getColors = async () => {
    const data = await csv(csvUrl);
    console.log(data);
    return data;
  };
  return {
    colors: getColors()
  };
};
export {
  load
};
