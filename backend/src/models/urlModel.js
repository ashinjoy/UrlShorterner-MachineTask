import mongoose from "mongoose";
const urlSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    longUrl: {
      type: String,
      require: true,
    },
    shortUrl: {
      type: String,
      require: true,
    },
    alias:{
    type:String,
    require:true
    } ,
    totalClicks:{
        type:Number,
        default:0
    },
    uniqueClicks:{
        type:Number,
        default:0
    } 
  },
  {
    timestamps: true,
  }
);

export const urlModel = mongoose.model('url',urlSchema)
