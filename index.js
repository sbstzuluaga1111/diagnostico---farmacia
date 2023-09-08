//requerimos expres para poder empezar a uasar el servidor
const express = require('express');
const connect = require('./db');
const medica1 = require('./models');
const medica11 = require('./provedores');


const app = express();

const port = 30001; 


app.get('/', async (req, res) => {
    res.send('Welcome to the server');
})


app.get('/medicamentos', async (req, res) => {

    await connect();
    const allmedi = await medica1.find()
    console.log(allmedi)
       
});



app.get('/medicamentos/provedores', async (req, res) => {

    await connect();
    const allmedi = await medica11.find()
    console.log(allmedi)
    
})

app.get('/medicamentos/venta', async (req, res) => {
    res.send('Welcome to the server');
   
    console.log('db connection')
})


app.get('/medicamentos/recetas', async (req, res) => {
    res.send('Welcome to the server');
   
    console.log('db connection')
})


//llamamos servidor para que de una repuesta
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

