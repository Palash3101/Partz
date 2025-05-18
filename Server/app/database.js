import mysql from 'mysql2';

export const pool = mysql.createPool({
  host: '127.0.0.1',
  waitForConnections: true,
  port: 3306,
  user:"root",
  password:"root",
  database:"Partz_data"}
).promise();


pool.getConnection().then((connection) => {
  console.log("Connected to database");
  connection.release();
}).catch((err) => {
  console.error("Error connecting to database:", err);
  throw err;
});

