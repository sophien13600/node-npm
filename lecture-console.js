import * as readline  from 'node:readline'


const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

scanner.question("Votre nom : ", (nom) => {
    console.log(`Votre nom est ${nom}`);
    scanner.close()
})
