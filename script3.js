
// En este script se crea un archivo .txt y se le especifica el contenido que debe llevar
// el archivo creado se llama texto.txt
const fs =require('fs')
//fs.writeFileSync('texto1.txt', 'Archivo creado desde NODE') //con el sync el script espera a ejecutar para terminar el código
fs.writeFile('texto1.txt', 'Archivo creado desde NODE', function(){ //este es asincronico por eso muestra primera ultima linea y luego si el mensaje de archivo creado
    console.log('Archivo creado')
})
console.log('Últimma Línea')