// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create application/json parser
const jsonParser = bodyParser.json();

// Create application/x-www-form-urlencoded parser
const textParser = bodyParser.text();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    res.send('welcome, ' + req.body.username);
    console.log(req.body.username);
    console.log(req.body.password);
});

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
    // create user in req.body
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('welcome, ' + req.body.username);
});

// POST /api/users gets text bodies
app.post('/api/users', textParser, function (req, res) {
    // create user in req.body
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('welcome, ' + req.body.username);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));