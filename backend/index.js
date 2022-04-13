const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser")



app.post("/", function(require, response){
   response.send("rota funcinando")
    
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const PORT = 8081
app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
});

