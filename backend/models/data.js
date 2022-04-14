const Sequelize = require('sequelize')
const sequelize = new Sequelize('aviao', 'kevin', '12345',{
    host: "localhost",
    dialect: "mysql"
})

const Dados = sequelize.define('dados_pessoais', {
    nome_completo: {
        type: Sequelize.TEXT
    },
    endereco: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    uf: {
        type: Sequelize.STRING
    }

})



module.exports = Dados