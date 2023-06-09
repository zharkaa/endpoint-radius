const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const radius = parsedUrl.query.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Error: Please provide a radius parameter in your query string.\n\n\nNama: Patrick Gustavo Bravy Walujan\nNIM: 20021106121\nKelas: TIK2032A\n");
  } else {
    const area = Math.PI * radius * 2;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Area of circle with radius ${radius} is ${area}.\n\n\nNama: Patrick Gustavo Bravy Walujan\nNIM: 20021106121\nKelas: TIK2032A\n`);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
