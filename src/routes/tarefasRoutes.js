const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/concluidos/filtrar", controller.getConcluido)
router.get ("/dataInclusao/filtrar", controller.getDataInclusao)
router.get("/:id", controller.getTarefasId)
router.get("/:nome/buscar", controller.getNome)

module.exports = router;