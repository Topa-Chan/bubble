function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var slc = new google.maps.LatLng(40.7608, -111.8910);
    var current = null; //Get Location Variable
    var qkly = new google.maps.LatLng(40.695170, -111.975158);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: slc
    });
    directionsDisplay.setMap(map);

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var start = document.getElementById('start').value;
        var request = {
            origin: start,
            destination: qkly,
            travelMode: 'DRIVING'
        };
        directionsService.route(request, function(result, status){
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
}

