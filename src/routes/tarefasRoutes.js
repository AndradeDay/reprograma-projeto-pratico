const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/:id", controller.getTarefasId)
router.get("/:nome/buscar", controller.getNome)
router.get("/concluidos/filtrar", controller.getConcluido)
module.exports = router;