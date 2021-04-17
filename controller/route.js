const express = require("express")
const Car = require("../models/carschema")
const User = require("../models/user")

const bcrypt=require('bcryptjs') 
const jwt=require('jsonwebtoken')

const auth=require('./verifytoken')

const router = express.Router()

router.get('/cars',auth, async (req, res) => {

    const posts = await Car.find()

    setTimeout(()=>{

    res.send(posts)

},5000)

})


router.get("/cars/:id", async (req, res) => {

    console.log(req.params.id)

    const data = await Car.findOne({ _id: req.params.id })

    console.log(data)

})

router.post("/cars", async (req, res) => {

    const data = new Car({

        title : req.body.title,
        content : req.body.content,

    })

    await data.save()

    res.send(data)

})
router.patch("/cars/:id", async (req, res) => {

    try {
        console.log(req.params.id)

        const data = await Car.findOne({ _id: req.params.id })

        console.log(data)


        if (req.body.title) {

            data.title = req.body.title

        }


        if (req.body.content) {

            data.content = req.body.content

        }
        await data.save()

        res.send(data)

    } catch {

        res.status(404)

        res.send({ error: "Post doesn't exist!" })

    }

})


router.delete("/cars/:id", async (req, res) => {

    try {

        console.log(req.params.id)


     
        const data = await Car.deleteOne({ _id: req.params.id })
        console.log(data)

        res.status(204).send()

    } catch {

        res.status(404)

        res.send({ error: "Post doesn't exist!" })

    }

})


router.post("/register",async(req,res)=>{

    const salt=await bcrypt.genSalt(10)
    const hashpass=await bcrypt.hash(req.body.password,salt);

    const user=new User({
        uname:req.body.uname,
        password:hashpass
    })
    await user.save();
    res.send(user).status(200);
});


router.post('/login',async(req,res)=>{
    try {
        const user=await User.findOne({uname:req.body.uname});
    if(!user){
        return res.send('user dosent exist');
    }else{
        const isvalid=await bcrypt.compare(req.body.password,user.password);
        if(!isvalid){
            res.send("password incorrect");
        }else{
            const token=jwt.sign({_id:user._id},'privatekey')
            res.send({token})
            // res.header('access-token', token);
            // console.log(res.send(token)) 
        }
    }
    } catch (error) {
        res.send(error);
    }
    
});


module.exports = router