
const http = require('http') // libreria para comunicarnos con apis
const PORT = 3000 //puerto por que se comunica
// conexion con la bd 
const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL connection details
  const connectionData = new Pool({
  user: 'postgres',  // Replace with your PostgreSQL username
  host: 'localhost', // Replace with your PostgreSQL host
  database: 'mydb', // Replace with your PostgreSQL database name
  password: 'bootcamp2023', // Replace with your PostgreSQL password
  port: 5432, // Replace with your PostgreSQL port if different
  });
const client = new Client(connectionData)
const server = http.createServer((req, res) => { // request, se crea la api


    if (req.method === 'GET') {
    const id =req.url.split('?')[1]
    const username =req.url.split('?')[2]
    const email =req.url.split('?')[3]

    //const crear="INSERT INTO users (id,username,email) VALUES ("id,'username','email')"
    const queryConVariable=`INSERT INTO users (id,username,email) VALUES (${id},${username},${email})`
    //res.end('Hola: '+id+' '+username+' '+email);
    res.end(queryConVariable)

    
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
