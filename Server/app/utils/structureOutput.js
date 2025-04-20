function checkType(data){
  switch (data.product_type.toUpperCase()){
    case 'CPU':
      return cpuStructurer(data);
    case 'GPU':
      return gpuStructurer(data);
    default:
      throw new Error('OI tf');
  }
}

function cpuStructurer(data){
  const product = {
    name: data.name,
    price: data.price,
    rating: data.rating,
    specs: {
      "Cores": data.core_count,
      "Threads": data.thread_count,
      "Base Clock": `${data.base_clock} GHz`,
      "Boost Clock": `${data.boost_clock} GHz`,
      "TDP": `${data.TDP} W`,
      "Socket": `${data.Socket}`,
      "Cache": `${data.cache} MB`,
      "PCIE Generation": data.PCIE_GEN
    },
    retailers: [
      { name: "Amazon", price: 599.99, stock: "In Stock", link:data.amazon_link },
      { name: "PrimeABGB", price: 589.99, stock: "In Stock", link:data.primeabgb_link },
      { name: "AMD", price: 619.99, stock: "In Stock", link:data.manufacturer_link }
    ]
  }

  return product;
}

function gpuStructurer(data){
  const product = {
    name: data.name,
    price: data.price,
    rating: data.rating,
    specs: {
      "Cuda Cores": data.cuda_cores,
      "RT Cores": data.rt_cores,
      "Base Clock": `${data.base_clock} GHz`,
      "Boost Clock": `${data.boost_clock} GHz`,
      "TDP": `${data.TDP} W`,
      "PCIE Generation": data.PCIE_GEN,
      "Form Factor": `${data.Form_Factor}`,
      "VRAM": `${data.vram} GB ${data.vram_version}`,
    },
    retailers: [
      { name: "Amazon", price: 599.99, stock: "In Stock", link:data.amazon_link },
      { name: "PrimeABGB", price: 589.99, stock: "In Stock", link:data.primeabgb_link },
      { name: "AMD", price: 619.99, stock: "In Stock", link:data.manufacturer_link }
    ]
  }

  return product;
}


module.exports = { checkType };