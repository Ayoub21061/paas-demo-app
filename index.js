const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Version 2 - ' + new Date().toISOString());
});
server.listen(3000, () => console.log('Listening on 3000'));
