import express from "express";
import { getByCategory, getReports } from "../models/reports.js";

const reportsRouter = express.Router();

reportsRouter.get("/", async function (req, res) {
  
    try {
      const reports = await getReports();

      if (!reports) {
        errors.email = "Report not found";
        res.status(404).json({ errors });
        // stop further execution in this callback
        return;
      }else{

      res.status(200).json({ success: true, payload: reports });
      console.log("these are the results", reports);
      
    }
    } catch (error) {
      
      res.status(400).json({ error: error.message });
      
    }
});

reportsRouter.get("/:category", async function (req, res) {
  try {
    const category = req.params.category;

    const categories = await getByCategory(category);

  //  console.log(categories);

    res.status(200).json({ success: true, payload: categories });
  } catch (error) {
    console.error("Error fetching category:", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Server error. Could not retrieve category.",
      });
  }
});
  

export { reportsRouter as default };
