const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',  // Replace with your PostgreSQL username
  host: 'localhost', // Replace with your PostgreSQL host
  database: 'mydb', // Replace with your PostgreSQL database name
  password: 'bootcamp2023', // Replace with your PostgreSQL password
  port: 5432, // Replace with your PostgreSQL port if different
});


//////////////////////////////////////////////////
const http = require('http') // libreria para comunicarnos con apis
const PORT = 3000 //puerto por que se comunica
// conexion con la bd 
const server = http.createServer((req, res) => { // request, se crea la api

    if (req.method === 'GET') {
    const id =req.url.split('?')[0].split('/')[1]
    const username =req.url.split('?')[1]
    const email =req.url.split('?')[2]
    
    res.writeHead(200, { 'Content-Type': 'aplication/json' });
    
    //const crearUsuario=`INSERT INTO users (id,username,email) VALUES (${id},"${username}","${email}")`
    const crearUsuario=`INSERT INTO users(id,username,email) VALUES (${id},'${username}','${email}')`
    pool.query(crearUsuario, (err,res) => {
    if (err) {
      console.error('Error creating usuario:', err);
    } else {
      console.error("..."); //res. rows solo devuelve la variable que está dentro del select y el resultado de esa operacion
    }
    // Close the pool to end the connection
    //pool.end();
    
  });
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('{funcionaaaa}');

  } else {
    res.writeHead(404, { 'Content-Type': 'aplication/json' });
    res.end('{404 Not Found\n}');
    
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
