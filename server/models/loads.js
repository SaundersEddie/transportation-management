const mongoose = require("mongoose");
const strategy = require("../passport/localStrategy");
const Schema = mongoose.Schema;

const loadsSchema = new Schema({
  shipperDetails: ({
      shipperName: {
          type: String,
          required: true},
      shipperAddress1: {
          type: String,
          required: true},
      shipperAddress2:{
          type: String,
          required: false},
      shipperCity:{
          type: String,
          required: true},
      shipperState:{
          type: String,
          required: true},
      shipperZip:{
          type: String,
          required: true},
  }),
  consigneeDetails: {
    type: String,
    required: true
  },
  thirdPartDetails: {
    type: String,
    required: true
  },
  shipmentDetails: {
    type: String,
    required: false
  }
});

const Loads = mongoose.model("Loads", loadsSchema);

module.exports = Loads;