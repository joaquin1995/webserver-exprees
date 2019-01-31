
const http = require('http');

http.createServer((req,res)=>{

    res.write('hola mundo');
    res.end();

})
.listen(9090);

console.log('Escuchando el puerto 9090');