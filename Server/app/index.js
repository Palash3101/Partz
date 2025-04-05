const express = require('express');
const { pool } = require('./database');
const cors = require('cors');
const app =  express();
const PORT = 3100;


const products_routes = require('./routes/products');

app.use(cors());
app.use('/products', products_routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res)=>{
  res.send('Hello World!');
})
