const { response, request } = require("express");
const express = require("express");
const app = express();




app.get("/", function(request, response){
    response.send("minha primeira rota")
});

const PORT = 8081
app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
});

