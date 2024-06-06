const Usuario = require('../models/usuario')

function indexView(req,res) {
    res.render('index.html')
}

function criarContaView(req, res){
    res.render('usuario_cadastro.html');
}

function cadastrarUsuario(req, res){
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        perfil: req.body.perfil
    }
    Usuario.create(usuario).then(()=>{res.redirect('/?cadstrar_usuario=false')}).catch((err)=>{
        console.log(err);
        res.redirect('/?cadstrar_usuario=false')
    })
    res.redirect('/');
}


module.exports= {
    indexView,
    criarContaView,
    cadastrarUsuario
}