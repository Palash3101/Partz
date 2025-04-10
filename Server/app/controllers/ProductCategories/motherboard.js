const  getOutput  = require('../../utils/getOutput.js');
const { pool } = require('../../database.js');

async function GetMotherboardData(req, res){
  try{
    //Query
    const st = `SELECT
      motherboard.id, \`name\`, price, rating, \`socket\`, chipset, form_factor,
      GROUP_CONCAT(DISTINCT CONCAT(memory_amount, ' DDR', ddr_generation, ' ', max_amount, ' GB')) AS mem_slots_gen_amt,
      GROUP_CONCAT(DISTINCT CONCAT('PCIE Gen-',pcie_generation, ' ', amount, 'x', slot_type) SEPARATOR ', ') AS pcie_gen_amt_type,
      GROUP_CONCAT(DISTINCT CONCAT( ports_amount,' ',ports_type ) SEPARATOR ', ') AS ports_type_amt,
      GROUP_CONCAT(DISTINCT CONCAT(storage_type, 'x', storage_amount) SEPARATOR ', ') AS storage_gen_amt_type
    FROM
      \`PCI-e_lookup\`, motherboard, products, ports_lookup, memory_lookup, storage_lookup
    WHERE
      motherboard.id = products.id AND
      motherboard.id = memory_lookup.motherboard_id AND
      motherboard.id = storage_lookup.motherboard_id AND
      motherboard.id = \`PCI-e_lookup\`.motherboard_id AND
      motherboard.id = ports_lookup.motherboard_id
    GROUP BY
      motherboard.id;`
  
    //Process the data
    let data = await getOutput(st, pool);

    //Send response and release connection
    res.send(data)
    if (pool) pool.releaseConnection();
    
  }
  catch(err){
    console.log(err)
    res.status(500).send('Internal Server Error')
    if (pool) pool.releaseConnection();
  }}

module.exports = {
  GetMotherboardData
};