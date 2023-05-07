const mongoose = require("mongoose");

const shippingSchema = mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        address1: String,
        zipcode: Number,
        city: String,
        phone: Number,
    },
    {
        versionKey: false,
    }
);

const shippingAddress = mongoose.model("address", shippingSchema);

module.exports = {
  shippingAddress,
};
