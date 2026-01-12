const mongoose=require('mongoose');

const PizzaSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    quantity:{
        type:Number,
        default:0
    },
    type:{
        type:String
    },
    price:{
        type:Number
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    ingredients:{
        type:[{
            id:{type:Number},
            iname:{type:String}
        }]
    },
    isSelected:{
        type:Boolean,
        default:true
    }
})
module.exports=mongoose.model('Pizza',PizzaSchema);