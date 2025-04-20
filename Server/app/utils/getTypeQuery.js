function getTypeQuery(type, product_id) {
  switch (type.toUpperCase()){
    case 'CPU':
      return `SELECT * FROM cpu, products, retailer_links WHERE products.id = retailer_links.product_id AND cpu.id = products.id AND products.id = "${product_id}";`
    case 'GPU':
      return `SELECT * FROM gpu, products, retailer_links WHERE products.id = retailer_links.product_id AND gpu.id = products.id AND products.id = "${product_id}";`
    case 'motherboard':
      return `SELECT * FROM motherboard, products, retailer_links WHERE products.id = retailer_links.product_id AND motherboard.id = products.id AND products.id = "${product_id}";`
    default:
      throw new Error('OI tf');
  }
}

module.exports = { getTypeQuery };