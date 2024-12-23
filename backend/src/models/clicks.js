import mongoose from "mongoose";

const clickSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    urlId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    osName:{
        type:String,
        require:true
    },
    deviceType:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

export const clicksModel = mongoose.model('click',clickSchema)