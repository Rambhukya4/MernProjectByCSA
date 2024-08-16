const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model('Cart', cartSchema);
