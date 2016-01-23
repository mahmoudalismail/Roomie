
//calculates distance between two points in km's
function calcDistance(p1, p2){

  return ((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2));
}

function computeDistanceKey(allAparts){
  var apart_loc;
  var work_loc;
  var k;
  var v;
  var dict = [];
  var sorted = [];

  console.log("Everything: ", allAparts);
  for (var i = 0; i < allAparts.length; i++) {
    work_loc = allAparts[i].workLocation;
    apart_loc = allAparts[i].location; //get apartment location

    p1 = new google.maps.LatLng(apart_loc[0], apart_loc[1]);
    p2 = new google.maps.LatLng(work_loc.latitude, work_loc.longitude);
    
    k = calcDistance(p1, p2);
    allAparts[i].workloc = work_loc;
    v = allAparts[i];

    dict.push({
    key:   k,
    value: v
    });

    sorted.push(k);
  }
  
  return {keys: sorted.sort(), data: dict}
}
