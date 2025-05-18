export default function filter(data_to_filter, price, tdp, rating){

  data_to_filter = priceFilter(data_to_filter, price)
  data_to_filter = tdpFilter(data_to_filter, tdp)
  data_to_filter = ratingFilter(data_to_filter, rating)
  return data_to_filter
}


function priceFilter(data, price){
  data = data.filter((item)=>{
    return item.price >= price[0] && item.price <= price[1]
  })

  return data
}

function tdpFilter(data, tdp){

  if (data[0].specs.TDP===undefined){
    return data
  }
  else{
    data = data.filter((item)=>{
      return item.specs.TDP >= tdp[0] && item.specs.TDP <= tdp[1]
    })
    return data;
  }

}

function ratingFilter(data, rating){
  data=data.filter((item)=>{
    return item.rating>=rating
  })
  return data
}