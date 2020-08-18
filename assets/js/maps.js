var map;
var marker; 
var position;
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

function reset(){
  marker.setPosition(countries['uk'].center);
  map.setCenter(countries['uk'].center);
  map.setZoom(5);
  $('#countries')[0].selectedIndex = 0;
  $("#autocomplete").val("");
}

$('#reset-button').on('click', reset);

function initMap() {
  position = countries['uk'].center
  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 5
  });
  marker = new google.maps.Marker({position: position, map: map});
  
  autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById("autocomplete")), {
      types: ['(cities)'],
      componentRestrictions: {'country': 'uk'},
      fields: ['address_components', 'geometry', 'icon', 'name']
  });
  
  autocomplete.bindTo('bounds', map);
  
  autocomplete.addListener('place_changed', function() {
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    console.log(place);
    
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  });
}

function setAutocompleteCountry(country){
  autocomplete.setComponentRestrictions({'country': country});
}

$("#countries").on("change", function(event){
  var country = $(this).val();
  var coordinates = countries[country].center;
  var zoom = countries[country].zoom;
  
  // Panning map to new coordinates
  map.setCenter(coordinates);
  map.setZoom(zoom);
  
  // Updates global `position` variable to new coordinates
  position = coordinates;
  
  // Hides existing marker from the map
  marker.setVisible(false);
  
  // Creates new marker at new coordinates
  marker.setPosition(position);
  
  // Sets marker to be visible again
  marker.setVisible(true);
  
  // Sets the autocomplete functionality to only search within the selected country
  setAutocompleteCountry(country);
});

