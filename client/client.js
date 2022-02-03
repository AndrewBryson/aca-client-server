import fetch from 'node-fetch';
import assert from 'assert';

let serverAddress = process.env["SERVER_URL"];
assert(serverAddress, 'Define environment variable SERVER_URL with fully qualified server URL');

console.log('Talking to: %s', serverAddress);
let request = await fetch(serverAddress);
let body = await request.text();
console.log('Response: %s', body);