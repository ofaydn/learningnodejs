const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((istek,cevap)=>{
    cevap.statusCode = 222;
    cevap.setHeader('Content-Type', 'text/plain');
    cevap.end('server olusturma basarili, Allah oylunu acik etsin yigidim');


})

server.listen(port,host,  ()=>{
    console.log(`http://${host}:${port} adresinden gelen istekler dinleniyor...`);

})