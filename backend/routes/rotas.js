
const express = require("express")
const router = express.Router()
const Dados = require("../models/data")

//rota para cadastrar no banco de dados
router.post('/add', (req, res) => {
    Dados.create({
        nome_completo: req.body.nome,
        endereco: req.body.endereco,
        email: req.body.email,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        telefone: req.body.telefone,
        uf: req.body.uf
    }).then(function(){
        Dados.findAll().then((dados_pessoais)=>{
            res.status(200).json({dados: dados_pessoais})
        })       
    }).catch(function(erro){
        console.log("Ops, tivemos um problema e não foi possivel cadastrar no banco de dados!!")
    })
})

//rota para listar os dados do banco
router.get('/listar', (req, res)=> {
    Dados.findAll().then((dados_pessoais)=>{
     res.status(200).json({dados: dados_pessoais})
    })
})

router.get('editar/:id', (req, res)=>{

})

router.get('/deletar', (req, res)=> {
     Dados.destroy({
        truncate: true
        
      });
      
})



router.get('/', (req, res) => {
    res.json({"message": "Server is running :D"});
});




module.exports = router