const express = require("express")
const connect = require("./configs/db");


const app = express();


const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error);
  }
});