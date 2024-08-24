require("dotenv").config();
const express = require("express");
const logger = require("./middleware/logger");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to My Express App");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
