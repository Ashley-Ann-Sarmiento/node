const http = require('node:http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/page1.html`);
  console.log(`Server running at http://${hostname}:${port}/page2.html`);
  console.log(`Server running at http://${hostname}:${port}/page3.html`);
  console.log(`Server running at http://${hostname}:${port}/page4.html`);
  console.log(`Server running at http://${hostname}:${port}/page5.html`);

});