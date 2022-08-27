const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRoute = require("./routes/productRoute");
var bodyParser = require('body-parser')
// const userRouter = require('./Routes/userRoute')

const app = express();

const PORT = process.env.PORT || 5000;

// app.use(cors({
//    origin:"http://localhost:5000/api/"
// }))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());

// app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


 const uri = 'mongodb://localhost:27017/Offerup'

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
// app.use("/api/auth", userRouter);





 app.listen(PORT, () => {
    console.log(`Server is running on. http://localhost:${PORT}`);
  });
  
