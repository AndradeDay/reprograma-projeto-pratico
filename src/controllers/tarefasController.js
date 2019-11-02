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




function dataSeparada(data) {
    const separarData = data.split ("/");
    return new Date(separarData[1] + "-" + separarData[0] + "-" + separarData[2])

}
exports.getDataInclusao = (req, res) => {
    const ordenarData = tarefas.sort(function (a, b) {
        if (dataSeparada(a.dataInclusao) < dataSeparada(b.dataInclusao)) {
            return 1;
        }
        if (dataSeparada(a.dataInclusao) > dataSeparada(b.dataInclusao)) {
            return -1;
        }
        return 0;
    })
    res.status(200).send(ordenarData)
}


