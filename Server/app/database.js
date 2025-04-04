import mysql from 'mysql2';

export const pool = mysql.createPool({
  host: '127.0.0.1',
  waitForConnections: true,
  port: 3306,
  user:"root",
  password:"root",
  database:"Partz_data"}
).promise();

