const {Schema} = require("monngoose");
const OrdersSchema = new Schema({
    name:String,
    qty:Number,
    price:Number,
    mode:String, // buy and sell thats mode
});
module.exports = {OrdersSchema};