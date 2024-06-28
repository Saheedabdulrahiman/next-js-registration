const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const authRoutes = require("./route/authRoute")

const app = express()
app.use(express.json());
app.use(cors());

const mongoURI = 'mongodb+srv://saheeda342:FoGPcBlLtywa8wYN@cluster0.l6faj8y.mongodb.net/';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Atlas connected');
})
.catch((err) => {
  console.error('Error connecting to MongoDB Atlas:', err.message);
});


app.use("/api/user",authRoutes) 


const port = 3010
app.listen(port,() => { 
    console.log(`App running at ${port}...`)
 })