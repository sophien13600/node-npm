import * as fs from 'node:fs';

const filename ='content.txt'
const data = 'hello'
const contenu =fs.readFileSync(filename)
fs.writeFileSync(filename, data) 
console.log(contenu.toString());
console.log('Fin');
