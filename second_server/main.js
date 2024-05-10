const express = require('express');

const app = express();
const port = 4500;

app.get('/', (req, res) => {
    res.send("This is second app running successfully......")
});

app.listen(port)