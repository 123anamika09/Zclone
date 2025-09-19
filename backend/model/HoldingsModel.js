// model is used by mongodb to create a collection


const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingsSchema");
const HoldingsModel =  model("Holding",HoldingsSchema);
module.exports = {HoldingsModel};