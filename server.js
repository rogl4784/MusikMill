var express = require('express');
var app = express();

// GET method route

app.get('/', function (req, res) {
	res.send('GET request to the home page');
});

// POST method route

app.post('/', function (req, res) {
	res.send('POST request to the home page');
});

app.all('/secret', function (req, res) {
	console.log('Accessing the secret section');
})
