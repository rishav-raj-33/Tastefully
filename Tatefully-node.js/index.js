const data = require("./Data");


const http = require('http');
const jsonData = JSON.stringify(data)
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(jsonData);
    res.end();
})

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
