const express = require("express")
// const mongoose = require("mongoose")
// var db=require('./conn')
const routes = require("./controller/route")
const bodyparser=require('body-parser');

var cors = require('cors')

const app = express()


var port = process.env.PORT || 3010;


app.use(cors())
app.use(bodyparser.json());
app.use("/api", routes)

app.listen(port, () => {

    console.log("Server has start!"+port)

})