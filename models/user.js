const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    uname: { type: String },
    password: { type: String },
}, { timestamps: true });
module.exports = mongoose.model("User", usersSchema);