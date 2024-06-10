function initMap() {
    var empresaLocation = { lat: 19.3803198, lng: -99.0554871 }; // Coordenadas de la empresa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: empresaLocation
    });
    var marker = new google.maps.Marker({
        position: empresaLocation,
        map: map,
        title: 'Ubicación de la Empresa'
    });
}
