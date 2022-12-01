var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idComentario", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idComentario", function (req, res) {
    avisoController.deletar(req, res);
});

router.get("/validarComentario/:idUsuario", function (req, res) {
    avisoController.validarComentario(req, res);
});

router.get("/validarEdicao/:idUsuario", function (req, res) {
    avisoController.validarEdicao(req, res);
});


module.exports = router;