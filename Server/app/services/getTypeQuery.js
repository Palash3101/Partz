export default function getTypeQuery(type, product_id) {
  switch (type.toUpperCase()){
    case 'CPU':
      return `SELECT * FROM cpu, products WHERE cpu.id = products.id AND products.id = "${product_id}";`
    case 'GPU':
      return `SELECT * FROM gpu, products WHERE gpu.id = products.id AND products.id = "${product_id}";`
    default:
      throw new Error('OI tf');
  }
}