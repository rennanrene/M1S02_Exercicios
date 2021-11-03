var textos = ["animal","carro","humano","prédio","cadeira","objeto"];
var dicionario = [];

for (var i=0; i < textos.length; i++){
    let novoElemento = {
        "palavra" : textos[i],
        "tamanho" : textos[i].length
    };
    dicionario.push(novoElemento);
};


var ordenados = dicionario.sort(ordenarPorTamanho);

function ordenarPorTamanho(a, b){
    return a.tamanho- b.tamanho;
    }

for (var i=0; i < ordenados.length; i++){
    var novasection = document.createElement("section");
    var j = ordenados.length - 1 - i;
    console.log(j);
    novasection.setAttribute("id", ordenados[j]["palavra"]);
    document.body.appendChild(novasection);
    novasection.innerHTML = ordenados[j]["palavra"];
};
