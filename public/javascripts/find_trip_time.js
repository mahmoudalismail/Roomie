/* 
 * Script to find the trip time from current location to desired apartment
 * Do not always call, it will exceed the limit!
 *
 */

function calcRoute(work_loc, values) {

  var data = [];

  for(var i=0; i < values.length; i++){

    var directionsService = new google.maps.DirectionsService();  
    // var start = new google.maps.LatLng(work_loc.latitude, work_loc.longtitude);  
    var start = new google.maps.LatLng(work_loc.latitude, work_loc.longtitude);  
    var end = new google.maps.LatLng(values[i].value.location[0], values[i].value.location[1]);
    
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        var duration = result.routes[0].legs[0].duration;
        
        // result
        data.push(duration);
        console.log("Duration: ", duration); // {text: "27 mins", value: 1637}
      }
      else{
        console.log(status);
        console.log(duration);
      }
    });

  }

  return data;
}