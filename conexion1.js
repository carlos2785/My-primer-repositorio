const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',  // Replace with your PostgreSQL username
  host: 'localhost', // Replace with your PostgreSQL host
  database: 'mydb', // Replace with your PostgreSQL database name
  password: 'bootcamp2023', // Replace with your PostgreSQL password
  port: 5432, // Replace with your PostgreSQL port if different
});

// Example query to create a table
//el username y email deben ser únicos
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL
  )
`;
const query='SELECT 38/2 AS split'
const traertodo='SELECT *FROM users'
const crear="INSERT INTO users (id,username,email) VALUES (6,'Fonseca','fonseca@gmail.com'),(7,'Isaias','isaias@gmail.com')"//Insertar datos
//const traer="SELECT *FROM users WHERE id=5"
//const traer="SELECT *FROM users WHERE email='santiago@gmail.com'"
const traer="SELECT *FROM users WHERE id>2"
const traeruno="SELECT *FROM users WHERE username='Isaias'"
const eliminar="DELETE FROM users WHERE id=1"
const actualizar="UPDATE users SET username = 'Sarita' WHERE id = 6"
// Execute the query seleccionada
pool.query(traertodo, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log(res.rows); //res. rows solo devuelve la variable que está dentro del select y el resultado de esa operacion
  }
  // Close the pool to end the connection
  pool.end();
});