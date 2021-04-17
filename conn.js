const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Car',{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
mongoose.connect("mongodb+srv://pranav:12345@cluster0.mnb30.mongodb.net/Car?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err)
    {
        console.log("mongodb connection is succeded.");
    }else{
        console.log("error in DB connection :"+JSON.stringify(err,undefined,2));
    }
});
module.exports=mongoose;


// mongoose.connect("mongodb://localhost:27017/UserApi",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    //  mongodb+srv://pranav:<password>@cluster0.mnb30.mongodb.net/<dbname>?retryWrites=true&w=majority
    // mongoose.connect("mongodb+srv://pranav:12345@cluster0.mnb30.mongodb.net/UserApi?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    