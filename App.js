const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

// ----------------mongodb atlas start---------------------------------
mongoose
  .connect(process.env.MONGO_URI || 3000, { useNewUrlParser: true,useUnifiedTopology: true  } )
  .then(() => console.log("DB Connected"));
mongoose.connection.on("error", err => {
  console.log("DB connection error: ${err.message}");
});
// -----------------mongodb atlas end----------------------------------

const rolesRoutes = require("./routes");

//middleware
app.use(logger("dev"));
app.use(bodyparser.json());
app.use("/", rolesRoutes);


//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
