let users = [
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
  },
  {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    city: "San Francisco"
  },
  {
    name: "Charlie",
    age: 28,
    email: "charlie@example.com",
    city: "Los Angeles"
  }
];

const fs =require('fs')
const http = require('http') // libreria para comunicarnos con apis
const PORT = 3000 //puesto por que se comunica

const server = http.createServer((req, res) => { // request, se crea la api
    if (req.method === 'GET') {
    const nombre =req.url.split('?')[1]
    const usuario=users.filter(user=>user.name === nombre)
    //const usuario=users.filter(user=>user.name==nombre)
    //console.log(usuario)
    if(usuario.length!=0){
      res.end(JSON.stringify(usuario))
    }
    else{
      res.end("El usuario digitado no existe")
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
