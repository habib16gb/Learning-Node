// Example 1-1 Hello World in Node

// Load http module
const http = require("http");
const port = 3100;

// create http server
http
  .createServer((req, res) => {
    // content header
    res.writeHead(200, { "content-type": "text/plain" });

    // write message and signel communication is complete
    res.end("Hello World!\n");
  })
  .listen(port);

console.log(`Server running on localhost:${port}`);
