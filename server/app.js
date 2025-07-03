require('dotenv').config();
const express=require("express")
const app=express();
const mongoose=require("mongoose")
const apiRouter=require("./routes/api")
const cors = require("cors")

app.use(cors())

app.use(express.json())

const mongoURI = process.env.MONGO_URI;
//console.log(mongoURI)

mongoose.connect(mongoURI)
.then(( ) => { 
    console.log("Successfully connect DB...")
 }).catch((err) => { 
    console.log("Error in database connection...")
    process.exit(1);
  })

app.use("/api",apiRouter);



let PORT = process.env.PORT || 5000;
app.listen(PORT,() => { 
    console.log("Running on port ",PORT)
 })

 process.on('SIGINT', async () => {
    console.log('\nServer shutting down...');
    await mongoose.disconnect();
    console.log('MongoDB Mongoose connection closed.');
    process.exit(0);
});