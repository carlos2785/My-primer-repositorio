const fs =require('fs')
const http = require('http') // libreria para comunicarnos con apis
const PORT = 3000 //puesto por que se comunica

const server = http.createServer((req, res) => { // request, se crea la api
    if (req.method === 'GET') {
    const nombre =req.url.split('?')[1]
    const edad =req.url.split('?')[2]
    const respuesta =req.url.split('?')[3]


    if(edad<18){
      res.end('Hola: '+nombre+' Eres Menor de edad');
      //console.log('menor')
    }
    if(edad>=18){
        //console.log('mayor')
        res.end('Hola: '+nombre+' Eres Mayor de edad');
    }
    if(respuesta=='si'){
      //res.end(fs.writeFileSync('texto2.txt', 'Hola su nombre es: '+nombre+' su edad es: '+edad));
      res.end(fs.appendFileSync('texto2.txt', 'Hola su nombre es: '+nombre+' su edad es: '+edad+'\n'));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
