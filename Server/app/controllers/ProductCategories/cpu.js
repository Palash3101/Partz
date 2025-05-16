const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetCpuData(req, res){
  try{
  //Query
  const st = `SELECT 
    products.id, \`name\`, price, rating, P.product_type_name,
    concat(base_clock, ' GHZ') AS Base_Clock, 
    concat(boost_clock, ' GHZ') AS Boost_Clock, 
    concat(TDP, ' W') As TDP,
    core_count, integrated_gpu  
    FROM 
      \`cpu\`, products , product_type_lookup as P
    WHERE  
      \`cpu\`.id = products.id AND
      products.product_type_id = P.product_type_id;`
  
  //process the data
  let data = await getOutput(st, pool)

  //sent response and release connection
  res.send(data)
  if (pool) pool.releaseConnection();

} catch(err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
    if (pool) pool.releaseConnection();
    return 
}}

module.exports = {
  GetCpuData
};