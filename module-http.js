import { createServer } from 'node:http'
import 'dotenv/config'

const server = createServer((httpRequest, httpResponse) =>{
     const baseURL = httpRequest.protocol + '://' + httpRequest.headers.host + '/';
    const reqUrl = new URL(httpRequest.url, baseURL);
    console.log(reqUrl.searchParams);
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