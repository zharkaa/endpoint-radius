const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const radius = parsedUrl.query.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Error: Please provide a radius parameter in your query string.\n");
  } else {
    const area = Math.PI * radius * 2;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Area of circle with radius ${radius} is ${area}.\n`);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});


// document.querySelector("form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const radius = document.querySelector("#inputBox").value;

//   fetch(`http://localhost:3000/?radius=${radius}`)
//     .then((response) => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         throw new Error("Something went wrong");
//       }
//     })
//     .then((data) => {
//       const resultElement = document.querySelector("#result");
//       resultElement.textContent = data;
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });
