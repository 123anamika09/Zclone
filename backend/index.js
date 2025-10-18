require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // body doesnot parse the data so use this 
const cors = require("cors") ; /// for secure data fetch

const { HoldingsModel } = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionModels");
const {OrdersModel} = require("./model/OrdersModel");


const port = process.env.PORT || 3302; // at time of deployment port gets changes 
const url = process.env.MONGO_URL;
const app = express(); 
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // middleware to parse JSON


// const connectDB = async () => {
//   try {
//     await mongoose.connect(url); // ⏳ 10 seconds timeout
//     console.log("✅ MongoDB connected successfully!");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };




mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));



// app.get("/addHoldings", async (req, res) => {
  
//     let tempHoldings = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//         isLoss: false,
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//         isLoss: false,
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//         isLoss: false,
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//         isLoss: false,
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//         isLoss: false,
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//         isLoss: true,
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//         isLoss: true,
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//         isLoss: false,
//       },
//     ];
//     tempHoldings.forEach((item)=>{
//       let newHolding = new HoldingsModel({
//          name: item.name,
//         qty:item.qty,
//         avg: item.avg,
//         price: item.price,
//         net:item.net,
//         day: item.day,
//       });
      
//       newHolding.save(); // method to insert in database
//     });
//     res.send("Done!")

// });



//  addPositions
// app.get("/addPositions", async(req,res)=>{
//   let tempPositions = [
//     {
//       product:"CNC", 
//       name:"EveryDay",
//       qty:2,
//       avg:316.27,
//       price:312.35,
//       net:"+0.58%",
//       day:"-1.24",
//       isLoss:true,
//     },
//      {
//       product:"CNC", 
//       name:"JumbleFood",
//       qty:2,
//       avg:316.27,
//       price:312.35,
//       net:"+0.88%",
//       day:"-1.04",
//       isLoss:true,
//     }
//   ];
//   tempPositions.forEach((item)=>{
//     let newPositions = new PositionsModel({
//       product:item.product, 
//       name:item.name,
//       qty:item.qty,
//       avg:item.avg,
//       price:item.price,
//       net:item.net,
//       day:item.day,
//       isLoss:item.isLoss,
//     })

//     newPositions.save();
//   });
//   res.send("Done!");

// });


// fetch data from database
app.get("/allHoldings",async(req,res)=>{
  let allHoldings = await HoldingsModel.find({}); //mongodb command to fetch data 
  res.json(allHoldings);
})

app.get("/allPositions",async(req,res)=>{
  let allPositions = await PositionsModel.find({}); //mongodb command to fetch data 
  res.json(allPositions);
})

app.post("/newOrder",async(req,res)=>{
   let newOrder = new OrdersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode

   });
   await newOrder.save();
    res.send("Order saved");
   
}) //insert into dataBase and read by user

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
