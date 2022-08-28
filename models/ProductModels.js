const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    productName: { type: String, require: true, default: "" },
    title: { type: String, require: true, default: "" },
    sortTitle: { type: String, require: true, default: "" },
    price: { type: Number, require: true, default: 0 },
    description: { type: String, require: true, default: "" },
    image1: { type: String, require: true, default: "" },
    image2: { type: String, default: "" },
    image3: { type: String, default: "" },
    image4: { type: String, default: "" },
    condition: { type: String, default: "new" },
    category: { type: String, require: true, default: "" },
    shippingCost: { type: Number, default: 0 },
    place: { type: String, default: "" },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);
const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
