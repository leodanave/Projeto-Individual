var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/inserirImagem", function (req, res) {
    usuarioController.inserirImagem(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrarImagem", function (req, res) {
    usuarioController.cadastrarImagem(req, res);
});

router.get("/mostrarImagem/:idImagem", function (req, res) {
    usuarioController.mostrarImagem(req, res);
});

router.post("/mandarTrue", function (req, res) {
    usuarioController.mandarTrue(req, res);
})

router.post("/mandarFalse", function (req, res) {
    usuarioController.mandarFalse(req, res);
})

router.get("/puxarTrue/:fkUsuario", function (req, res) {
    usuarioController.puxarTrue(req, res);
});

router.get("/puxarFalse/:fkUsuario", function (req, res) {
    usuarioController.puxarFalse(req, res);
});

module.exports = router;