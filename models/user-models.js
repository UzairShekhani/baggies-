const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/baggie")

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    Isadmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String

})
mongoose.model("user", userSchema)