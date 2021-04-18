const express = require("express")
const Car = require("../models/carschema")
const User = require("../models/user")

const router = express.Router()

router.get("/cars", async (req, res) => {

    const posts = await Car.find()
    setTimeout(() => {
        res.send(posts)
    }, 5000)
})


router.get("/cars/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await Car.findOne({ _id: req.params.id })
    setTimeout(() => {
        res.send(data)
    }, 5000)
})

router.post("/cars", async (req, res) => {

    const data = new Car({
        title: req.body.title,
        content: req.body.content,
    })
    await data.save()
    res.send(data)
})

router.patch("/cars/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const data = await Car.findOne({ _id: req.params.id })

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
        const data = await Car.deleteOne({ _id: req.params.id })
        res.status(200)
        res.send({ "text": "deleted Successfully"+req.params.id });

    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!" + req.params.id })
    }
})


//login 





module.exports = router