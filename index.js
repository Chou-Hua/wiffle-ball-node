const express = require("express");
const mongoose = require("mongoose");
const routes = require("./server/routes/apiRoutes.js");
const app = express();
const port = process.env.PORT || 3000;

let connectStatus = false;

async function connectMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://wiffle:jdiZsBws4EBDth2H@cluster0.oxuddxd.mongodb.net/wiffle-ball?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB...");
    connectStatus = true;
  } catch (error) {
    console.log(error);
  }
}

connectMongoDB();

app.use(express.json()); //make sure it comes back as json

app.use((req, res, next) => {
  if (connectStatus) {
    next();
  } else {
    res.status(503).send({
      status: false,
      message: "Server is not ready",
    });
  }
});
app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
