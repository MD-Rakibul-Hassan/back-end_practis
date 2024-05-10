const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send("Hello world this is firs back-end app")
});

app.listen(port, () => {
    console.log(`This application runnig in port:${port}`);
})