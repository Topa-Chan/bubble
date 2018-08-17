var map, infoWindow, qkly;

window.initMap = function() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var slc = new google.maps.LatLng(40.7608, -111.8910);
    qkly = new google.maps.LatLng(40.695170, -111.975150);

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: slc
    });
    infoWindow = new google.maps.InfoWindow;

    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            map.setCenter(pos);
            calculateAndDisplayRoute(directionsService, directionsDisplay, pos.lat, pos.lng);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, lat, lng) {
    directionsService.route({
        origin: new google.maps.LatLng({
            lat: lat,
            lng:lng
        }),
        destination: qkly,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

export {
    initMap,
    handleLocationError,
    calculateAndDisplayRoute
};