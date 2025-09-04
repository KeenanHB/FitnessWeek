import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg"; // change to mysql2 if you’re using MySQL

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Example route
app.get("/api/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
