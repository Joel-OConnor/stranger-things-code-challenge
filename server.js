const http = require('http');
const answers = require('./strangerThings');
const PORT = 8080;

const server = http.createServer((request, response) => {
    response.end(`hello! ${answers}`);
});

server.listen(PORT, () => console.log(`server is listening on port ${PORT}, open http://localhost:8080`));