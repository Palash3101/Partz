export default function sorter(sortby, data_to_sort, setData){
  let a = sort_function_finder(sortby);
  switch(a[0]){
    case 'price':
      console.log('price', a[1]===1?'High':'Low')
      return data_to_sort.sort((x,y)=>a[1]===1?
          y.price-x.price
          :
          x.price-y.price  
        )
        

    case 'rating':
      console.log('rating', a[1]===1?'High':'Low')
      return data_to_sort.sort((x,y)=>a[1]===1?
        y.rating-x.rating
        :
        x.rating-y.rating 
      )

    default:
      break
  }

  data_to_sort.sort((x,y)=>y.price-x.price)

  return data_to_sort
}


function sort_function_finder(sortby){
  sortby = sortby.split(":")
  sortby = sortby.map((x)=>{return x.trim()})

  return [sortby[0].toLowerCase(),sortby[1][0].toUpperCase()==='H'?1:0]
}