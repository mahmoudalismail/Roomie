

var markers = [];

var keys = [];
var data = [];

var values = [];
var timeToLocation = [];

function toggleBounce(marker) {
  
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


function markClicked(marker){
   console.log(marker);
   console.log(document.querySelector(".property").style);
   document.querySelector(".property").style.display="block";


   var i = parseInt(marker.title.split("Appartment ")[1]);

   var value = values[i];

   $(".locatr").html("&nbsp" + value.address);
   $(".rommatr").html("&nbsp" +value.roommate);
   $(".bedatr").html("&nbsp" +value.numbeds + "Bedrooms");
   $(".priatr").html("&nbsp" +value.price + "QAR/Month");
   $(".workAtr").html("&bnsp" +timeToLocation[i]) // embed the time for each location

   i = i + 1;
   for (var j = 1; j <= 3; j++  )
      $("#pic" + j ).attr("src", "images/" + i + "_" + j +".jpg" );

}


function drawMap(){

  var myLatLng = {lat:   25.286865, lng: 51.546529};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
   center: myLatLng
  });

  //var center = map.getCenter();
  //google.maps.event.trigger(map, 'resize'); 
   //map.setCenter(center);

}

function initMap2(ready, apartments) {
  var sortedRes = computeDistanceKey(apartments);
  var myLatLng = {lat: 25.286865, lng: 51.546529};
  
  keys = sortedRes.keys;
  values = sortedRes.data;

  console.log("Values: ", values);
  
  timeToLocation = calcRoute(values[0].value.workLocation, values);

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 12,
   center: myLatLng
  });

  console.log(sortedRes);

  if (ready === 0){
    console.log("I am inside!!!!")
    for (var i = 0; i < sortedRes.data.length; i++){
          console.log({lat: sortedRes.data[i].value.location[0], lng: sortedRes.data[i].value.location[1]})
          var marker = new google.maps.Marker({
          position: {lat: sortedRes.data[i].value.location[0], lng: sortedRes.data[i].value.location[1]},
          map: map,
          title: "Appartment " + i
          });

          values[i] = sortedRes.data[i].value;

          marker.addListener('click', function() {
              markClicked(this);
             
          });
          toggleBounce(marker);

          markers.push(marker)
     }

     addPictures();

  }
  
  var center = map.getCenter();
  google.maps.event.trigger(map, 'resize'); 
   map.setCenter(center);

}

function initMap(){
  console.log("hello");
}

// function fillMap(){
//     initMap2(0, [[-25, 131], [-25, 139], [-20, 130], [-20, 139]]);
// }


function addPictures(){
  for (var i = 0; i < 4; i++){   
    var marker = markers[i];
    var j = parseInt(marker.title.split("Appartment ")[1]); 
    var htmlToput = '<div class="col-md-3"><img class="property-image" src="images/' + (j+1) + '_4.jpg"><h5>Title<span> Best match</span></h5><p>Price</p></div>'
    $(".footer").append(htmlToput);
  }

    $(".property-image").hover(function(){
      var imgName = $(this).attr('src');
      var imgNum = (imgName.split("/")[1]).split("_4.jpg")[0];
      toggleBounce(markers[parseInt(imgNum - 1)]);
    });

}
