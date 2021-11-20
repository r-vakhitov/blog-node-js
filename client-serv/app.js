const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'application/json');

  // res.setHeader('Content-Type', 'text/html');
  // res.write('<head><link rel="stylesheet" href="#"/></head>');
  // res.write('<h1>Hello world</h1>');
  // res.write('<h2>My name is Dude</h2>');
  const data = JSON.stringify([
    {name: 'Dude', age: 49},
    {name: 'Sonar', age: 17},
  ])

  res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
})