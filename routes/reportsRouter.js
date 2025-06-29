import express from "express";
import { getByCategory, getReports } from "../models/reports.js";

const reportsRouter = express.Router();

reportsRouter.get("/", async function (req, res) {
    try {
      const reports = await getReports();
      res.status(200).json({ success: true, payload: reports });
      console.log("these are the results", reports);
      console.log(id);
    
    } catch (error) {
      
      res.status(400).json({ error: error.message });
      
    }
});

reportsRouter.get("/:category", async function (req, res) {
  const category = req.params.category;
  const categories = await getByCategory(category);
  console.log(categories)
  res.status(200).json({ success: true, payload: categories });
});
  

export { reportsRouter as default };
