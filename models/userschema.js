const mongoose = require('mongoose');
const schema = mongoose.Schema({
    uname: { type: String },
    password: { type: String }
}, { timestamps: true });
module.exports = mongoose.model("User", schema);