var http = require('http');

if (!process.env.NEW_BASE_URL) {
  console.log('Env var NEW_BASE_URL is required');
  process.exit(1);
}

var port = process.env.PORT || 5000;
var statusCode = process.env.STATUS_CODE || 302;

http.createServer(function(request, response) {
  var location = process.env.NEW_BASE_URL + request.url;
  response.writeHead(statusCode, {
    'Content-Type': 'text/plain',
    'Location': location
  });
  console.log('[' + new Date().toISOString() + '] ' + statusCode + ' Redirecting to ' + location);
  response.end();
}).listen(port);

console.log('[' + new Date().toISOString() + '] Listening on ' + port);
