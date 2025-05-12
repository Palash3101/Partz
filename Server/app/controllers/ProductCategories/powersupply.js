const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetPowerSupplyData(req, res) {
  try{
    const st = `
    SELECT 
      products.id, \`name\`, price, rating, 
      concat(wattage, " W") as 'power',
        certification,
        modular,
        form_factor as 'from factor'
    FROM
      \`power_supply\`, products
    WHERE
      \`power_supply\`.id = products.id;
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