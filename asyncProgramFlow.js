// Example 1-3 New service that prints out a sequance of numbers and then the contents of a file

const http = require("http");
const fs = require("fs");
const port = 3100;

// write out numbers
const writeNumbers = (res) => {
  let counter = 0;

  // increment global, write to client
  for (let i = 0; i < 100; i++) {
    counter++;
    res.write(counter.toString() + "\n");
  }
};

// Create http server
http
  .createServer((req, res) => {
    const query = require("url").parse(req.url).query;
    const app = require("querystring").parse(query).file + ".txt";

    // content header
    res.writeHead(200, { "Content-Type": "text/plain" });

    // write numbers
    writeNumbers(res);

    // timer to open file and read contents
    setTimeout(() => {
      console.log(`opening ${app}`);
      // open and read in file contents
      fs.readFile(app, "utf-8", (err, data) => {
        if (err) res.write("could open or find file");
        else res.write(data);
        res.end();
      });
    }, 2000);
  })
  .listen(port, console.log(`server running at locahost:${port}`));
