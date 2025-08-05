import * as fs from 'node:fs';

const filename ='content.txt'
const data ='hello'

//const filename = 'content.txt'
fs.writeFile(filename, data, (err) => {
    if (err) {
        console.log(`Problème rencontré lors de l'écriture dans ${filename}`);
    } else{
        console.log('ecriture effectué avec succés');
        
    }
})





// fs.readFile(filename, (err, res)=>{

//     if(err){
//         console.log(`Probleme rencontré lors de la lecture de ${filename}`);
//     }else{
//         console.log(res.toString());

//     }
// })


// console.log('Fin');
