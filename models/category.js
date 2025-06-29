import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { cwd } from "node:process";
const filePath = resolve(cwd(), "data", "data.json");

//console.log(filePath);

export async function getData() {
  try {
    //read the data JSON file
    const dataJSON = await readFile(filePath, "utf-8");
    //parse the Json file
    const data = JSON.parse(dataJSON);
    //return parsed Json file variable
    console.log(data);

    return data;
  } catch (err) {
    // Catch and display errors
    console.error("❌ Failed to read data.json:", err.message);
    return null;
  }
}

getData();
