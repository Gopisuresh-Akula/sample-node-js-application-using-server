const mongoose = require("mongoose");


const roleSchema = new mongoose.Schema({


    UserName:{
        type:String,
        required:true
    },

    phonenumber:{
        type:String,
        required:true
    }


  

},  {versionKey: false, timestamps: true});


module.exports = mongoose.model("role", roleSchema);


    