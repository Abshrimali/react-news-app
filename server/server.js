import express from "express";
import axios from "axios";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=53f1001ba24e4395b0ea7ee8558103c4}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      message: "Failed to fetch news",
      error: error.response?.data || error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
