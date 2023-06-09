import mongoose from 'mongoose'; 

const Schema = mongoose.Schema;
const staffSchema = new Schema({
  role:{
    type:String,
    required:true
  },

  stfn: {
    type:String,
    required: true
  },

  name: {
    type:String,
    required: true
  },

  date:Date

},{timestamps:true});

const Staff = mongoose.model('staff',staffSchema);
export default Staff;