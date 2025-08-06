import * as fs from 'node:fs/promises';

// //lire les notes
// // calculer la moyenne de chaque ligne
// // inscrire les moyenne dans un fichier txt dans le meme ordre
// const filename = 'notes.txt'

// fs.readFile(filename).toString()
// //const line =data.split
//     .catch(() => console.log(`Problème rencontré lors de la lecture de ${filename}`))
//  .then(res => {
//      const data =res
//      console.log(data);
     
// }

// )

const inputFile = 'notes.txt'
const outputFile = 'moyennes.txt'

var data
fs.readFile(inputFile)
    .then(async (res) => {
        data =res.toString()
        const lines= data.split("\n")
        for(line of lines){
            const notes = line.split( " ")
            const sum = notes
            //.map(Number)
            .map(elt => Number(elt))
            .reduce(p, c, 0)
       await fs.appendFile(outputFile,`${sum / notes.length}\n`)
            .catch(() => `Problème d'ecriture dans ${outputFile}`)
        }
    })
    .catch(() =>console.log(`${inputFile} introuvable`));
    

//     import * as fs from 'node:fs/promises';

// const inputFile = 'notes.txt'
// const outputFile = 'moyennes.txt'


// var data
// fs.readFile(inputFile)
//     .then(async (res) => {
//         data = res.toString()
//         const lines = data.split("\n")
//         for (const line of lines) {
//             const notes = line.split(" ")
//             const sum = notes
//                 .map(Number)
//                 .reduce((p, c) => p + c, 0)
//             await fs.appendFile(outputFile, `${sum / notes.length}\n`)
//                 .catch(() => `Problème d'écriture dans ${outputFile}`)
//         }
//     })
//     .catch(() => console.log(`${inputFile} introuvable`))


