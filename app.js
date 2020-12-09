const express = require('express');

const app = express();


const courses = [
    { id: 1, name: "Node.js from A to Z" },
    { id: 2, name: "Mastering C#" },
    { id: 3, name: "Using typescript with Node.js" }
];

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/api/courses/', function (req, res) {
    res.send(courses);
});

app.get('/api/courses/:id', function (req, res) {
    res.send(courses[req.params.id]);
});

const port = process.env.APP_PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`Open app using http://localhost:${port}`);
});

