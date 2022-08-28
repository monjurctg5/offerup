const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
require('dotenv').config()
var bodyParser = require('body-parser')
// const userRouter = require('./Routes/userRoute')

const app = express();

app.use("/public/uploads",express.static("/public/uploads"))


const PORT = process.env.PORT || 5000;

// app.use(cors({
//    origin:"http://localhost:5000/api/"
// }))
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


app.use(cors());
// app.use(cors({

// }))
// app.use(cors({

//    origin:"*"
// }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


 const uri = "mongodb+srv://offerup:XYQnuwzVQ8neRaXg@cluster0.ghw3k.mongodb.net/Offerup?retryWrites=true&w=majority"

 mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }).then(()=>{
    console.log("Successfully connect to MongoDB.");
 }).catch(err=>{
    console.log(err)
    process.exit();
 })

app.use('/api',productRoute)
app.use('/api',orderRoute)

// app.use("/api/auth", userRouter);





 app.listen(PORT, () => {
    console.log(`Server is running on. http://localhost:${PORT}`);
  });
  
