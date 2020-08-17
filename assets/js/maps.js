var map;
var position;
var marker;
var autocomplete;

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
  position = countries['uk'].center
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 5
  });
  marker = new google.maps.Marker({position: position, map: map});
}

  $("#countries").on("change", function(event){
  var country = $(this).val();
  var coordinates = countries[country].center;
  
  // Panning map to new coordinates
  map.panTo(coordinates);
  
  // Updates global `position` variable to new coordinates
  position = coordinates;
  
  // Removes existing marker from the map
  marker.setMap(null)
  
  // Creates new marker at new coordinates
  marker = new google.maps.Marker({position: position, map: map});

}); 

function reset() {
     $('#countries');
     map.setCenter(countries['uk'].center);
}

