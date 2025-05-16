function reformatProductOutput(data) {
  let product = {
    "id": data.id,
    "name": data.name,
    "price": data.price,
    "rating": data.rating,
    "product_type": data.product_type_name,
  }

  delete data.id;
  delete data.name;
  delete data.price;
  delete data.rating;
  delete data.product_type_name;

  product.specs = {...data}

  return product;
}

async function getOutput(st, pool) {
  let data =  await pool.query(st)
  
  data = data[0].map((item) => {
    return reformatProductOutput(item)
  })

  return data;
}



module.exports = getOutput;