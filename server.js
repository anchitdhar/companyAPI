require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database Connection
const mongoose  = require("mongoose");

const mongoURL = process.env.MONGODB_URI;
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology:true})
  .then(() => {
    console.log("Successfully connected to Mongo DB.");
  })
  .catch((err) => {
    console.log(`Error connecting to Mongo DB: ${err}`)
  });

// Define API routes here
require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!`);
});
