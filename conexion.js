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

// Execute the query to create the table
pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table "users" has been created successfully');
  }
  // Close the pool to end the connection
  pool.end();
});