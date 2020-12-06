const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27017/foodflixDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(()=>{
  console.log("DATABASE connected")
});


//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//routes
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");


//route requests
app.use("/api",authRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
// app.use("/api",orderRoutes);


//server starting
const PORT = process.env.port || 8000;
app.listen(PORT, (req, res) => {
  console.log("server is running on " + PORT);
});
