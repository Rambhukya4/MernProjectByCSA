const axios = require('axios');

const getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    res.json(response.data.products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product details' });
  }
};

module.exports = { getProducts, getProductById };
