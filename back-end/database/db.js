const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/Notary-Services");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model("user",userSchema);
const Admin = mongoose.model("admin",adminSchema);

module.exports = {
    User,
    Admin
}