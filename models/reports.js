import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { cwd } from "node:process";
const filePath = resolve(cwd(), "data", "reports.json");

//console.log(filePath);

export async function getReports() {
  try {
    //read the reports JSON file
    const reportsJSON = await readFile(filePath, "utf-8");
    //parse the Json file
    const reports = JSON.parse(reportsJSON);
    //return parsed Json file variable
    console.log(reports);

    return reports;
  } catch (err) {
    // Catch and display errors
    console.error("❌ Failed to read reports.json:", err.message);
    return null;
  }
}

/* getReports(); */

export async function getByCategory(category) {
  try {
    const categoryReports = [];
    //read the reports JSON file
    const reportsJSON = await readFile(filePath, "utf-8");
    //parse the Json file
    const reports = JSON.parse(reportsJSON);
    //return parsed Json file variable
    for (let i = 0; i < reports.length; i++) {
      //if reports category matches argument
      if (reports[i].category.toLowerCase() === category.toLowerCase()) {
        categoryReports.push(reports[i]); // add it to the result array
      }
    }
    // if no reports were found, throw an error
    if (categoryReports.length === 0) {
      throw new Error(`No reports found for category: ${category}`);
    }
    // log and return the matching reports after loop has finished
    console.log(categoryReports);
    return categoryReports;

  } catch (err) {
    // Catch and display errors
    console.error("❌ Failed to read reports.json:", err.message);
    return null;
  }
}

/* getByCategory("marketing"); */


