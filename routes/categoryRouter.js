import express from "express";
import { getData } from "../models/category.js";

const dataRouter = express.Router();

dataRouter.get("/", async function (req, res) {
    try {
      const data = await getData();
      res.status(200).json({ success: true, payload: data });
      console.log("these are the results", data);
      console.log(id);
    
    } catch (error) {
      
      res.status(400).json({ error: error.message });
      
    }
});
  

export { dataRouter as default };
