// En este script se muestra la ruta actual del proyecto
const path = require('path')
const filename = 'file1.txt';
const fullPath = path.join(__dirname,  filename);
console.log('LA NUEVA RUTA ES:', fullPath)
console.log(path.dirname(fullPath))