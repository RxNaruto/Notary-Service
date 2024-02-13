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

const documentSchema = new mongoose.Schema({
    aadharCard: String,
    panCard: String,
    user:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

const User = mongoose.model("user",userSchema);
const Admin = mongoose.model("admin",adminSchema);
const Document = mongoose.model("documents",documentSchema);

module.exports = {
    User,
    Admin,
    Document
}