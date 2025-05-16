const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetGpuData(req, res){
  try{
    //Query
      const st = `SELECT 
      products.id, \`name\`, price, rating, P.product_type_name,
        DLSS_version, FSR_version, 

        concat(TDP,' W') AS TDP, 
        concat(boost_clock, ' GHZ') AS 'Boost Clock', 
        cuda_cores, RT_enabled, 
      concat(vram,'GB ',vram_version) AS VRAM   
      FROM 
        gpu, products , product_type_lookup as P
      WHERE 
        gpu.id = products.id AND
      products.product_type_id = P.product_type_id;
    ` 
    
    //Process the data
    let data = await getOutput(st, pool)

    //Send response and release connection
    res.send(data)
    if (pool) pool.releaseConnection();

  }
  catch(err){
    console.error(err);
    res.status(500).send('Internal Server Error');
    if (pool) pool.releaseConnection();
    return
  }}

module.exports = {
  GetGpuData
};