const express = require('express');
const cors = require('cors');
const PORT = 3100;

const app =  express();
app.use(cors());

const products_routes = require('./routes/products');

//Routes
app.use('/products', products_routes);


//Testing
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

