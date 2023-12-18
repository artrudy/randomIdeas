const path = require("path");
const cors = require("cors");

const express = require("express");

require("dotenv").config();

const port = process.env.PORT || 7000;

const connectDB = require("./config/db");

connectDB();

const app = express();

//static folder
app.use(express.static(path.join(__dirname, "public")));

//body parer middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors middleware
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcom to th RandomeIdeas API!" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/idea", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});
