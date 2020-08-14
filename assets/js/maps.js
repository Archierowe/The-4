function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 51.5194, lng: 0.1270 },
                zoom: 7
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
            { lat: 51.4978, lng: 0.1745 },
            { lat: 51.4967, lng: 0.1764 },
            { lat: 51.5081, lng: 0.0759 }
            ];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
        

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
}
// found this on the google maps API site as I like the idea of markers dropping in - stuck it in here changed the long and lat.
// var marker;

// function initMap() {
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 10,
//     center: {lat: 51.5194, lng: 0.1270
//   });

//   marker = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: {lat: 51.5194, lng: 0.1270}
//   });
//   marker.addListener('click', toggleBounce);
// }

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }