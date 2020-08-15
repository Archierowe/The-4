var countries = {

    'fr': {
        center: { lat: 46.2276, lng: 2.2137 },
        zoom: 5
    },
    'it': {
        center: { lat: 41.8719, lng: 12.5674 },
        zoom: 5
    },
    'es': {
        center: { lat: 40.4637, lng: -3.7492 },
        zoom: 5
    },
    'uk': {
        center: { lat: 55.3781, lng: -3.4360 },
        zoom: 5
    }
};


function initMap() {
//    I want to link this to the country selector - so when a user selects a country it snaps to that location on the map
    map = new google.maps.Map(document.getElementById("map"), {
        center: countries ['uk'].center,
        zoom: 3
    });






        //     var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

        //     var locations = [
        //     { lat: 51.4978, lng: 0.1745 },
        //     { lat: 51.4967, lng: 0.1764 },
        //     { lat: 51.5081, lng: 0.0759 }
        //     ];

        //     var markers = locations.map(function(location, i) {
        //         return new google.maps.Marker({
        //             position: location,
        //             label: labels[i % labels.length]
        //         });
        //     });
        

        // var markerCluster = new MarkerClusterer(map, markers,
        //     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
}
