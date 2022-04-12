const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '12345',{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("conexão ao banco de dados estabelecida com sucesso");
}).catch(function(err){
    console.log(`Não foi possivel se conectar ao banco de dados ${err}`)
})