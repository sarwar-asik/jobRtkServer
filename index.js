const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 30002;

// middleware //

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);

// mongoose connect
const url = process.env.URL;
// console.log(url);
mongoose
  .connect(url, {
    dbName: "JobPortalRTK",
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    const { name, message, stack } = err;
    console.log("Not Connected to Database ERROR! ", { name, message, stack });
  });

app.use("/jobs", require("./Routes/jobRouter"));
app.use("/register", require("./Routes/employeeRouter"));

// Creating controller ////
const job2Route = require("./system2/route2/job2.route");

app.use("/api/v1/jobs", job2Route);

app.get("/", async (req, res) => {
  res.send(`Job Server running on ${port} `);
});

app.listen(port, () => {
  console.log(`server connected with ${port}`);
});
