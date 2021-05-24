const http = require('http');
const app = require('./app');


const port = process.env.PORT || 3000;

const server = http.createServer(app);
//const server = http.createServer(http);

server.listen(port, () => {
    console.log(`Server is listening on localhost: ${port} 
    open your browser on http://localhost:${port}/`);
});