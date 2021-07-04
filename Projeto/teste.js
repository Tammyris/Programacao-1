
var dados = ["mizuk","programação","animes"];

function baixarArquivo(name) {
    var link = document.createElement('a');
    link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(dados);
    link.download = name;
    link.click();
}

baixarArquivo("teste.JSON")
//<a onclick="baixarArquivo('arquivo.json')">Download</a>


