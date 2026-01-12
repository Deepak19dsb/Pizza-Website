const mongoose=require('mongoose');
const ingredientsSchema=new mongoose.Schema({
    id:{
        type:Number
    },
     tname:{
        type:String
    }, 
        price:{type:Number}

    ,
     image:{
        type:String
    },
     isSelected:{
        type:Boolean,
        default:false
    }
})
module.exports=new mongoose.model('Ingredient',ingredientsSchema);