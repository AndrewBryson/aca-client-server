const http = require('http');

const port = process.env["PORT"] || 8080;

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let now = {
	    'now': new Date()
    };

    response.write(JSON.stringify(now));
    response.end();

}).listen(port, () => {
    console.log(`Listening on port:${port}`);
});
