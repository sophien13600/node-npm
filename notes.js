import * as fs from 'node:fs/notes';


const filename = 'notes.txt'

fs.readFile(filename)
    .catch(() => console.log(`Problème rencontré lors de la lecture de ${filename}`))
 .then(res => console.log(Number(res)))
