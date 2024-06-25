const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    discount: {
        type:Number,
        default:0
    },
    bgcolor: String ,
    planelcolor: String ,
    textcolor: String ,

})
module.exports = mongoose.model("products", productSchema)