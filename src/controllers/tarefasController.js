const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}



exports.getTarefasId = (req, res) => {
    const id = req.params.id
    if (id < 1 || id > tarefas.length) {
        res.status(200).send("Mulher, Não tem")
    }

    const idTarefa = tarefas.find(idTarefa => idTarefa.id == id)
    res.status(200).send(idTarefa)
}



exports.getNome = (req, res) => {
    const nome = req.params.nome
    const nomeTarefa = tarefas.filter(nomeTarefa => nomeTarefa.nome == nome)

    if (!nomeTarefa)
        res.status(404).send("Que nome é essa fia?")

    res.status(200).send(nomeTarefa)
}


exports.getConcluido = (req, res) => {
    const tarefaConcluida = tarefas.filter(tarefaConcluida => tarefaConcluida.concluido === "true")
    res.status(200).send(tarefaConcluida)
 }