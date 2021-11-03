var textos = ["animal","carro","humano","prédio","cadeira","objeto"];

var ordenados = textos.sort();

for (var i=0; i < ordenados.length; i++){
    var novasection = document.createElement("section");
    novasection.setAttribute("id", ordenados[i]);
    document.body.appendChild(novasection);
    novasection.innerHTML = ordenados[i];
}
