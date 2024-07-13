const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    accountId: {
        type: String,
        required: [true, "accountid is required"],
        trim: true,
        text: true
    },
    token: {
        type: Number,
    },
    currentPayment: {
        type: String,
    },

}, {
    timestamps:true,
});


module.exports = mongoose.model('User', userSchema)