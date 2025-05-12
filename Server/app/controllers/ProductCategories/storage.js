const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetStorageData(req, res) {
  try{
    const st = `SELECT 
      products.id, \`name\`, price, rating, 
    form_factor AS \`form factor\`,
    interface AS \`type\`,
      capacity,
      RW_speeds
      FROM
        \`storage\`, products
      WHERE
        \`storage\`.id = products.id;
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
  GetStorageData
};