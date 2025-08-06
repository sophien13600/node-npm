import * as readline from 'node:readline/promises'


const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const nombre1 = await scanner.question("Votre premier nombre : ")
const nombre2 = await scanner.question("Votre premier nombre : ")


// scanner.question("Votre premier nombre : ")
//     .then(nombre1 => {
//         scanner.question("Votre deuxième nombre : ")
//             .then(nombre2 => {
//                 console.log(`${nombre1} + ${nombre2} = ${Number(nombre1) + Number(nombre2)}`);
//             })
//     })
console.log(`${nombre1} + ${nombre2} = ${Number(nombre1) + Number(nombre2)}`);
scanner.close()