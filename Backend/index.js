const express = require("express");
const cors = require("cors");

const app = express();
const PORT = "3003";

app.use(express.json());
app.use(cors());

app.get("/auth", (req, res) => {
  res.send("api is working");
});

app.listen(PORT, () => {
  console.log(`app is runnig to the port ${PORT}`);
});
