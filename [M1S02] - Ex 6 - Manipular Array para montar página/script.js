let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8
  });
} 


fetch("https://amapalanches.com/includes/v1/getTodas.php").then(function(data){
    return data.json();
}).then(function(json){
    var resultado = json["todas"];
    for (var i=0; i < resultado.length;i++){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(resultado[i].lat, resultado[i].lng),
            title: "Meu ponto personalizado! :-D",
            map: map});

    }
    //console.log(resultado[0].lat);
    
    //result = resultado;
});

//console.log(result);

