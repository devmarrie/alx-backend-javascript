const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const path = process.argv[2].toString();
    countStudents(path)
      .then((data) => {
        res.write('This is the list of our students\n');
        res.write(data);
        res.end();
      })
      .catch((error) => {
        res.statusCode = 404;
        res.end('Not found\n');
        console.error(error);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
