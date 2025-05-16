function getTypeQuery(type, product_id) {
  console.log(type.toUpperCase(), product_id)
  switch (type.toUpperCase()){
    case 'CPU':
      return `SELECT * FROM cpu, products WHERE cpu.id = products.id AND products.id = "${product_id}";`
    case 'GPU':
      return `SELECT * FROM gpu, products WHERE gpu.id = products.id AND products.id = "${product_id}";`
    case 'MOTHERBOARD':
      return `SELECT * FROM motherboard, products WHERE motherboard.id = products.id AND products.id = "${product_id}";`
    case 'MEMORY':
      return `SELECT * FROM memory, products WHERE memory.id = products.id AND products.id = "${product_id}";`
    case 'POWER SUPPLY':
      return `SELECT * FROM power_supply, products WHERE power_supply.id = products.id AND products.id = "${product_id}";`
    case 'STORAGE':
      return `SELECT * FROM storage, products WHERE storage.id = products.id AND products.id = "${product_id}";`
    default:
      throw new Error('OI tf');
  }
}

module.exports = { getTypeQuery };