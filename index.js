const express = require('express');

const app = express();

const port = 30000; 


app.get('/', (req, res) => {
    res.send('Welcome to the server');
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});