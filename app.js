const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

const port = process.env.APP_PORT || 3000;
app.listen(port);

console.log(`Listening on port ${port}`);
console.log(`Open app using http://localhost:${port}`);
