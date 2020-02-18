const http = require('http');
const port = 8080;
const baseUrl ='http://api.tvmaze.com/singlesearch/shows?q=stranger-things&amp;embed=episodes';

const server = http.createServer((request, response) => {
    response.end(`Welcome!`);
})

server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

new Promise((request, response) => {
    http.get(baseUrl, (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            response.end(JSON.parse(body))
        }
    })
});