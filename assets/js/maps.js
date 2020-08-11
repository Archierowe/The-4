// Below is the basic call of the map - google maps API.
// I need to work out what to do next - for example - I know I want to enable the user to pick a city or a country (from UK, France, Spain and Italy - hence the name 'The 4')
// Only thing is where I go/what I do from here (code wise) is a mystery to me, at this point.

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5194, lng: 0.1270 },
    zoom: 8
  });
}

// for later perhaps

// var cities = {
//     'London': {
//         center: { lat: 51.5194, lng: 0.1270 },
//         zoom: 8
//     },
//     'Paris': {
//         center: { lat: 48.8566, lng: 2.3522 },
//     zoom: 8
//     },
//     'Madrid': {
//         center: { lat: 40.4168, lng: 3.7038 },
//     zoom: 8
//     },
//     'Rome': {
//         center: { lat: 41.9028, lng: 12.4964 },
//     zoom: 8
//     }
// };

// found this on the google maps API site as I like the idea of markers dropping in so too the code - stuck it in here changed the long and lat.
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