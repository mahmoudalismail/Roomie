
function initMap2(ready, locations) {

  var myLatLng = {lat: -25, lng: 131};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 5,
   center: myLatLng
  });
  if (ready == 0){
    for (var i = 0; i < locations.length; i++){
        var marker = new google.maps.Marker({
          position: {lat: locations[i][0], lng: locations[i][1]},
          map: map,
          title: 'Place 1'
        });
     }
  }
  
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize'); 
   map.setCenter(center);

}

function initMap(){
  initMap2(0, [[-25, 131], [-25, 133]]);
}