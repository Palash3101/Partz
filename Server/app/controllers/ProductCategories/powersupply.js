const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetPowerSupplyData(req, res) {
  try{
    const st = `
    SELECT 
      products.id, \`name\`, price, rating, P.product_type_name,
      concat(wattage, " W") as 'power',
        certification,
        modular,
        form_factor as 'from factor'
    FROM
      \`power_supply\`, products , product_type_lookup as P
    WHERE
      \`power_supply\`.id = products.id AND
      products.product_type_id = P.product_type_id;;
    `

    let data = await getOutput(st, pool)
    res.send(data)
    if (pool) pool.releaseConnection();

  }
  catch(err){
    console.log(err);
    res.status(500).send('Internal Server Error');
    if (pool) pool.releaseConnection();
    return 
  }
}


module.exports = {
  GetPowerSupplyData
};