const fs = require("node:fs/promises");
const path = require("node:path");
const filePath = path.resolve(process.cwd(), "data", "data.json");

//console.log(filePath);

async function getData() {
  //read the JSON file
  const dataJSON = await fs.readFile(filePath);
  //parse the Json file
  const data = JSON.parse(dataJSON);
  //return parsed Json file variable
  console.log(data);

  return data;
}
