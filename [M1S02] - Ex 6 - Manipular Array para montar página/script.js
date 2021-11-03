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
    var markers = [];
    var latlngbounds = new google.maps.LatLngBounds();
    for (var i=0; i < resultado.length;i++){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(resultado[i].lat, resultado[i].lng),
            title: "Meu ponto personalizado! :-D",
            map: map});
        markers.push(marker);
        latlngbounds.extend(marker.position);
    }
    var markerCluster = new MarkerClusterer(map, markers);
    map.fitBounds(latlngbounds);
});
