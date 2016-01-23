

var markers = [];

function toggleBounce(marker) {
  
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


function markClicked(marker){
   console.log(marker.title);
   document.querySelector(".property").style.display="block";
}

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
          title: 'Place ' + i
          });

          marker.addListener('click', function() {
              markClicked(this);
             
          });
          toggleBounce(marker);

          markers.push(marker)
     }

  }
  
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize'); 
   map.setCenter(center);

}

function initMap(){
  console.log("hello");
}

function fillMap(){
    initMap2(0, [[-25, 131], [-25, 139], [-20, 130], [-20, 139]]);
}


function addPictures(){
  fillMap();
  for (var i = 0; i < markers.length; i++){
    var htmlToput = '<div class="col-md-3"><img class="property-image"src="media/' + (i + 1) + '.jpg"><h5>Title<span> Best match</span></h5><p>Price</p></div>'
    $(".footer").append(htmlToput);
  }

    $(".property-image").hover(function(){
      var imgName = $(this).attr('src');
      var imgNum = (imgName.split("/")[1]).split(".jpg")[0];
      toggleBounce(markers[parseInt(imgNum - 1)]);
    });

}

