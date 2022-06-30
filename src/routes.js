const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('../models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando')
})

let user = model.Registros;
let consulta = model.AgendarConsulta;

app.post('/login-cnpj', async (req,res) => {
    let response = await model.Cadastrocnpj.findOne({
        where: {cnpj: req.body.cnpj, crmv: req.body.crmv}
    })
    if(response === null) {
        res.send(JSON.stringify('error'))
    }else{
        res.send(response);
    }

})

app.post('/login', async (req, res) => {
  let response = await  user.findOne({
        where:{login: req.body.name, senha: req.body.password}
    })
    if(response === null) {
        res.send(JSON.stringify('error'))
    }else{
        res.send(response);
    }

});

app.post('/update', async (req,res)=> {
    // console.log(req.body)
      let response =  await model.AgendarConsulta.findOne({
        where: { nomeAnimal: req.body.nomeAnimal }
    });
    response.tipoConsulta=req.body.consulta
    // response.nomeAnimal=req.body.nomeAnimal;
    response.save()
})



app.post('/verifyUserGet', async (req, res) => {
    let response = await user.findOne({
        where:{id: req.params.id}
    })
    if(response === null) {
        res.send(JSON.stringify('error'))
    }else{
        res.send(response);
    }

})

//rota para os relatorios

app.post('/relatorio-consulta', async (req, res) => {
    let response = await model.Relatorios.create({
        'nomePaciente': req.body.nomePaciente,
        'dataConsulta': req.body.dataConsulta,
        'horarioConsulta': req.body.horarioConsulta,
        'raca': req.body.raca,
        'diagnostico': req.body.diagnostico,
        'tratamentoSugerido': req.body.tratamentoSugerido,
        'createdAt': new Date(),
        'updateAt': new Date()
    })
    if(response){
        res.send('Relatório Enviado com Sucesso!')
    }


})

app.post('/agendar-consulta', async (req,res) => {
    let reqs = await model.AgendarConsulta.create({
        'dataConsulta': req.body.dataConsulta,
        'nascimento': req.body.nascimentoAnimal,
        'nomeAnimal': req.body.nomeAnimal,
        'tipoConsulta': req.body.tipoConsulta,
        'sintomas': req.body.sintomas,
        'createdAt': new Date(),
        'updateAt': new Date()
    })
    if(reqs){
        res.send('Consulta agendada com sucesso!')
    }
})


app.post('/pet-cadastro', async (req,res) => {
    let reqs = await model.cadastroPet.create({
        'nome' : req.body.nome,
        'peso' : req.body.peso,
        'altura' : req.body.altura,
        'nascimento' : req.body.nascimento,
        'vacina' : req.body.vacina,
        'raca' : req.body.raca,
        'createdAt': new Date(),
        'updateAt': new Date()
    })
    if(reqs){
        res.send('O usuário foi cadastrado com sucesso!!')
    }
})

app.get('/consulta', async (req,res) => {
    const consulta = await model.AgendarConsulta.findAll()
    res.status(200).json({ consulta })
})

app.delete('/consulta/:id', async (req,res) => {
    const consulta = await  model.AgendarConsulta.destroy({
        where:{id: req.params.id}
    })
    res.status(200).json({ consulta });
})

app.get('/consulta-atualizar/:id', async (req,res) => {
    const consulta = await model.AgendarConsulta.findAll({
        where: {id: req.params.id}
    })
    res.status(200).json({ consulta })
})

app.put('/atualizar-consulta' , async (req,res) => {
    const { id, sintomas } = req.body;
    const consulta = await model.AgendarConsulta.update({
        sintomas
    },{
        where: {
            id: id
        }
    })
    return res.json(consulta)
})


app.get ('/usuario-cnpj', async (req,res) => {
    const usuarios = await model.Cadastrocnpj.findAll()
    res.status(200).json({ usuarios })
})

app.get('/user-list' , async (req,res) => {
    const users = await  model.Registros.findAll()
    res.status(200).json({ users });

})

app.get('/relatorios' , async (req,res) => {
    const relatorios = await  model.Relatorios.findAll()
    res.status(200).json({ relatorios });

})

app.get('/usuario/:id', async (req,res) => {
    const userCnpj = await model.Cadastrocnpj.findOne({
        where: {id: req.params.id}
    })
    res.status(200).json({ userCnpj });
})


app.get('/usuario-home/:id' , async (req,res) => {
    const users = await  model.Registros.findOne({
        where:{id: req.params.id}
    })
   
    res.status(200).json({ users });
})



app.get('/usuario/:id' , async (req,res) => {
    const users = await  model.Registros.findOne({
        where:{id: req.params.id}
    })
   
    res.status(200).json({ users });
})


//Requisição get com base no id do animal
app.get('/pet/:id', async (req,res) => {
    const animal = await model.cadastroPet.findAll({
        where:{id: req.params.id}
    })
    res.status(200).json({ animal });
})

//Requisição para realizar a busca por usuário especifico
app.get('/user/:id' , async (req,res) => {
    const user = await model.Registros.findAll({
        where:{id: req.params.id}
    })
    res.status(200).json({ user })
})


app.post('/create', async(req,res)=>{
    let reqs = await model.Registros.create({
        'nome' : req.body.nameUser,
        'sobrenome' : req.body.userNameLast,
        'data_de_nascimento': req.body.dataNasc,
        'cpf': req.body.userCpf,
        'endereco': req.body.userEndereco,
        'estado': req.body.userEstado,
        'telefone': req.body.userTelefone,
        'login': req.body.userLogin,
        'senha': req.body.userPassoword,
        'createdAt': new Date(),
        'updateAt': new Date()
    });
    if(reqs){
        res.send('O usuário foi cadastrado com sucesso!!')
    }
});

app.post('/cadastro-cnpj', async(req,res)=> {
    let reqs = await model.Cadastrocnpj.create({
        'cnpj' : req.body.cnpj,
        'endereco' : req.body.endereco,
        'nomeFantasia' : req.body.nomeFantasia,
        'nomeRepresentante' : req.body.nomeRepresentante,
        'crmv' : req.body.crmv,
        'createdAt': new Date(),
        'updateAt': new Date()
    })
    if(reqs){
        res.send('O cadastro CNPJ foi realizado com sucesso!!')
    }
})

app.post('/cadastro-pet', async(req,res)=>{
    let reqs = await model.Cadastropet.create({
        'nome' : req.body.nome,
        'peso' : req.body.peso,
        // 'altura' : req.body.altura,
        'nascimento' : req.body.dataNascimento,
        'vacina' : req.body.vacinas,
        'raca' : req.body.raca,
        'createdAt': new Date(),
        'updateAt': new Date()
    })
    if(reqs){
        res.send('O cadastro foi realizado com sucesso!!')
    }
})

app.post('/verifyId', async (req,res) => {
    let response = await  user.findAll({
        where:{id: req.body.id}
    })
    if(response === null){
        console.log('not found')
    }if(response === undefined) {
        console.log('Erro de tipagem')
    }else{
        console.log('Usuário encontrado')
    }

})

//ATUALIZAR SENHA
app.post('/verifyPass', async (req,res) => {
    let response = await  user.findOne({
        where:{id: req.body.id, senha: req.body.senhaAntiga}
    })
    if(response === null) {
        res.send(JSON.stringify('Senha antiga não confere'))
    }else{
        if(req.body.novaSenha === req.body.confNovaSenha){
            response.senha = req.body.novaSenha;
            response.save();
            res.send(JSON.stringify('Senha atualizada com sucesso'));

        }else{
            res.send(JSON.stringify('Nova senha e confirmação não confere'))
        }
    }
})
