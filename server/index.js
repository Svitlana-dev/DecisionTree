/* eslint-disable no-undef */
import "dotenv/config";
import express from "express";
import cors from "cors";
import { entriesHandler } from "./api/entries.js";

const app = express();
app.use(cors());

app.get("/api/entries", entriesHandler);
app.post("/api/entries", entriesHandler);
app.delete("/api/entries", entriesHandler);

const PORT = process.env.API_PORT || 5174;
app.listen(PORT, () => {
  console.log(`API server on http://localhost:${PORT}`);
});
