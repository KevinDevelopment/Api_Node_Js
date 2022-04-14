const express = require('express');
const bodyParser = require('body-parser');
const rotas = require('./routes/rotas')
const Dados = require("./models/data");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/rotas', rotas)

let PORT = 8081

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});