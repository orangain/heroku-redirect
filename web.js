var http = require('http');

if (!process.env.NEW_BASE_URL) {
  console.log('Env var NEW_BASE_URL is required');
  process.exit(1);
}

var port = process.env.PORT || 5000;

http.createServer(function(request, response) {
  var location = process.env.NEW_BASE_URL + request.url;
  response.writeHead(302, {
    'Content-Type': 'text/plain',
    'Location': location
  });
  console.log('Redirecting to ' + location);
  response.end();
}).listen(port);

console.log('Listening on ' + port);
