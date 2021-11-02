var numero = prompt("Digite um numero de 1 a 10: ");

function carregaValores(urlLink, idElemento){
    fetch(urlLink).then(function(data){
        return data.json();
    }).then(function(json){
        if (urlLink == "https://api.thecatapi.com/v1/images/search"){
            var resultado = json[0].url;
        }
        if (urlLink == "https://dog.ceo/api/breeds/image/random"){
            var resultado = json.message;
            
        }
        //console.log(resultado);
        document.getElementById(idElemento).style.backgroundImage = "url('"+resultado+"')";
        
    });
}


if (numero > 0 && numero <= 10 ){
    for (var i=0; i < numero; i++){
        console.log(i);
        var container = document.createElement("div");
        container.setAttribute("id","divisao"+i);
        document.body.appendChild(container);  

        var sectionDog = document.createElement("section");
        sectionDog.setAttribute("id","dog"+i);
        document.getElementById("divisao"+i).appendChild(sectionDog);
        sectionDog.innerHTML = "Cachorro";
        carregaValores("https://dog.ceo/api/breeds/image/random", "dog"+i);
        
        var sectionGato = document.createElement("section");
        sectionGato.setAttribute("id","gato"+i);
        document.getElementById("divisao"+i).appendChild(sectionGato);
        sectionGato.innerHTML = "Gato";
        carregaValores("https://api.thecatapi.com/v1/images/search", "gato"+i);

    }
}
else{
    var numero = prompt("Digite um numero de 1 a 10: ");
}
