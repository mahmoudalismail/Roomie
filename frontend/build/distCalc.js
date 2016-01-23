
//To compute distace to work for every location
var apart_lat;
var apart_long;
var work_lat;
var work_long;
var p1 = new google.maps.LatLng(apart_lat, apart_long);
var p2 = new google.maps.LatLng(work_lat, work_long);
//var p1 = new google.maps.LatLng(45.463688, 9.18814);
//var p2 = new google.maps.LatLng(46.0438317, 9.75936230000002);

alert(calcDistance(p1, p2));

//calculates distance between two points in km's
function calcDistance(p1, p2){

  return ((google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2));
}

function computeDistanceKey(allAparts){
  var apart_loc;
  var work_loc = null;
  var k;
  var v;
  var dict = [];
  var sorted = [];

  for (var i = 0; i < allAparts.length; i++) {
    apart_loc = allAparts[i].location; //get apartment location
    k = calcDistance(apart_loc, work_loc);
    v = allAparts[i].push("workloc": work_loc);//rest of the stuffs

    dict.push({
    key:   k,
    value: v
    });

  for(var key in dict) {
    sorted[sorted.length] = key;
  }
  
  return sorted.sort();
}

//var temp = calcDistance(p1, p2);

//console.log(temp);

// var min_budget;
// var max_budget;
// var num_roomates;
// var num_bed;
// var strbed = "bed:";
// var string_bed = strbed.concat(num_bed.toString());


// Person.
//   find({ occupation: /host/ }).
//   where('name.last').equals('Ghost').
//   where('age').gt(17).lt(66).
//   where('likes').in(['vaporizing', 'talking']).
//   limit(10).
//   sort('-occupation').
//   select('name occupation').
//   exec(callback);
//
// var apart = Apartment.find({
//
//
// 	where('price').gt(min_budget).lt(max_budget).
// 	where('roommate').equals(num_roomates). //or maybe use less than? if N/A should display all
//  where('metadata').in(string_bed).
// 	sort('price').
//  exec(callback);
//
//   }, function(err, result){
