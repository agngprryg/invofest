import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
  },
  total_price: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  customer: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
  },
  items: [ItemSchema],
  payment_status: {
    type: String,
    enum: ["pending", "paid", "cancelled"],
    default: "pending",
  },
  payment_method: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.models.orders || mongoose.model("orders", OrderSchema);

export default Order;
