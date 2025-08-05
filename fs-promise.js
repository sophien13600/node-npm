import * as fs from 'node:fs/promises';

const data = "ciao"

const filename = 'content.txt'
// fs.writeFile(filename, data)
fs.appendFile(filename, data)
    .catch(() => console.log(`Problème rencontré lors de l'écriture dans ${filename}`))
    .then(() => console.log("Ecriture effectuée avec succès"))

// const filename = 'content.txt'
// fs.readFile(filename)
//     .catch(() => console.log(`Problème rencontré lors de la lecture de ${filename}`))
//     .then(res => console.log(res.toString()))


console.log('Fin');


