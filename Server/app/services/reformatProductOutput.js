export default function reformatProductOutput(data) {
  let product = {
    "id": data.id,
    "name": data.name,
    "price": data.price,
    "rating": data.rating,
  }

  delete data.id;
  delete data.name;
  delete data.price;
  delete data.rating;

  product.specs = {...data}

  return product;
}