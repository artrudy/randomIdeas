const express = require("express");

const port = 7000;

const app = express();

//body parer middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcom to th RandomeIdeas API!" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/idea", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});
