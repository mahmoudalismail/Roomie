// don't always call, it will exceed the limit!
function calcRoute() {

var directionsService = new google.maps.DirectionsService();

	var start = new google.maps.LatLng(25.244881,51.557280);
	var end = new google.maps.LatLng(25.319588, 51.441864);
  
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    	var duration = result.routes[0].legs[0].duration;
    	
    	// result
		
		console.log("Duration: ", duration); // {text: "27 mins", value: 1637}
    }
  });
}