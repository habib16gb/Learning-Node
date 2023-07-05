// Example 1-2 Asynchronously opening and writing out contents of a file

// load http module
const http = require("http");
const fs = require("fs");
const port = 3005;

// create http server
http
  .createServer((req, res) => {
    fs.readFile("./helloworld.js", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      if (err) res.write("cound open or found file");
      else res.write(data);
      res.end();
    });
  })
  .listen(port, console.log(`server running at ${port}`));
