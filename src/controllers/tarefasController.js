const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}



exports.getTarefasId = (req, res) => {
    const id = req.params.id
    if (id < 1 || id > tarefas.lenght) {
        res.send("Tem Não")
    }

    const idTarefa = tarefas.find(idTarefa => idTarefa.id == id)
    res.status(200).send(idTarefa)
}



exports.getNome = (req, res) => {
    const nome = req.params.nome
    const nomeTarefa = tarefas.filter(nomeTarefa => nomeTarefa.nome == nome)
        res.status(200).send(nomeTarefa)
    }