import mongoose from 'mongoose';

const loadSchema = mongoose.Schema({
  shipperDetails: ({
      shprName: {
          type: String,
          required: true},
      shprAddress1: {
          type: String,
          required: true},
      shprAddress2:{
          type: String,
          required: false},
      shprCity:{
          type: String,
          required: true},
      shprState:{
          type: String,
          required: true},
      shprZip:{
          type: String,
          required: true},
  }),
  consigneeDetails: ({
    cnseName: {
      type: String,
      required: true},
    cnseAddress1: {
      type: String,
      required: true},
    cnseAddress2:{
      type: String,
      required: false},
    cnseCity:{
      type: String,
      required: true},
    cnseState:{
      type: String,
      required: true},
    cnseZip:{
      type: String,
      required: true},
  }),
  thirdPartyDetails: ({
    thrdName: {
      type: String,
      required: true},
    thrdAddress1: {
      type: String,
      required: true},
    thrdAddress2:{
      type: String,
      required: false},
    thrdCity:{
      type: String,
      required: true},
    thrdState:{
      type: String,
      required: true},
    thrdZip:{
      type: String,
      required: true},
  }),
  shipmentDetails: ({
   shipDims: ({
     shipWidth: {
       type: Number,
       required: true
     },
     shipHeight: {
       type: Number,
       required: true
     },
     shipLength: {
       type: Number,
       required: true
   },
   }),
   shipCommodity: {
     type: String,
     required: true,
   },
   shipWeight: {
    type: Number,
    required: true
   },
   shipNotes: {
     type: String,
     required: false
   }
  })
});

const Load = mongoose.model("Load", loadSchema);
export default Load;