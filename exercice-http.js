import { createServer } from 'node:http'
import 'dotenv/config'

const server = createServer((httpRequest, httpResponse) =>{
     const baseURL = httpRequest.protocol + '://' + httpRequest.headers.host + '/';
    const reqUrl = new URL(httpRequest.url, baseURL);
    console.log(reqUrl.searchParams.get('a'));

    let a = Number(reqUrl.searchParams.get('a'))
    let b = Number(reqUrl.searchParams.get('b'))
    
    if(reqUrl.pathname ==='/plus'){
        let sum = sum(a,b)
        console.log(sum);
    }else if (reqUrl.pathname ==='/moins'){
       console.log(a-b); 
    }else if(reqUrl.pathname ==='/fois'){
      console.log(a*b)
    }else if(reqUrl.pathname ==='/div'){
        console.log(a*b)
    }
    
    console.log(reqUrl.port);
    console.log(reqUrl.pathname);
    console.log(reqUrl.hostname);
    console.log(reqUrl.protocol);

    

    httpResponse.write("hello World !")
    httpResponse.end()
})

// (ProcessingInstruction.env.PORT
const port = process.env.PORT || 5555
server.listen(port,()=>{
    console.log(`Le serveur écoute les requêtes sur le port ${port}`);
    
})


// import { createServer } from 'node:http'
// import 'dotenv/config'


// const server = createServer((httpRequest, httpResponse) => {
//     if (httpRequest.url === '/favicon.ico') {
//         httpResponse.end();
//         console.log('favicon requested');
//         return;
//     }
//     const baseURL = 'http://' + httpRequest.headers.host + '/';
//     const reqUrl = new URL(httpRequest.url, baseURL);
//     const op = reqUrl.pathname
//     const values = reqUrl.searchParams
//     const a = Number(values.get('a'))
//     const b = Number(values.get('b'))
//     console.log(op, a, b);
//     const mapping = {
//         '/plus': '+',
//         '/moins': '-',
//         '/fois': '*',
//         '/div': '/'
//     }
//     console.log(op, mapping[op]);

//     const operator = mapping[op]
//     const resultat = eval(`${a} ${operator} ${b}`)
//     httpResponse.write(`${a} ${operator} ${b} = ${resultat}`)
//     httpResponse.end()
// })

// const port = process.env.PORT || 5555
// server.listen(port, () => {
//     console.log(`Le serveur écoute les requêtes sur le port ${port}`);

// })