const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    accountId: {
        type: String,
        required: [true, "accountId is required"],
        trim: true,
        unique: true,  // Ensure the accountId is unique
    },
    token: {
        type: Number,
    },
    currentPayment: {
        type: String,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('User', userSchema)