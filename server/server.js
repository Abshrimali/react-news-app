import express from "express";
import axios from "axios";
import "dotenv/config"
import cors from "cors"

const app = express();
app.use(cors())

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.news_api}`,
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch news",
    });
  }
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});