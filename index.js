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

const url = process.env.URL
// console.log(uri);

mongoose.connect(url,{
    dbName: 'JobPortalRTK',
}).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});



app.use("/jobs",require('./Routes/jobRouter'))


app.get("/", async (req, res) => {
  res.send(`Job Server running on ${port} `);
});

app.listen(port, () => {
  console.log(`server connected with ${port}`);
});
