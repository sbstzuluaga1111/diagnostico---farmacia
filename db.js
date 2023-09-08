const mongoose = require('mongoose');

const password = 'campus2023'
const dbname = 'farmaciaCampus'
const DB_URI = `mongodb+srv://sbstzuluaga:${password}@farmacia.ty0rhg3.mongodb.net/${dbname}`

module.exports = 
    ()=>
    mongoose.connect(
        DB_URI,
        {useNewUrlParser: true, useUnifiedTopology: true}, 
)



