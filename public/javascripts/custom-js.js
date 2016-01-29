var vis = 0;
var click=0;

var filtered = 0;

var currLocation = {lonitude: 0, latitude: 0};


$(".button-left").click(function () {
	console.log("vis: ",vis);
	// Set the effect type
    if (click == 0){
	    
	    openLeftSide();

	    click = 1;
	}
	else{
		click=0;
		
	    closeLeftSide();
	 
	}

});

$(".close").click(function (){

	document.querySelector(".filter").style.display="none";
	

});



$(".show-filter").click(function (){

	document.querySelector(".filter").style.display="block";
	

});

$("#slider1").roundSlider({
    sliderType: "range",
    startAngle: "90",
    max: 20000,
    step: 1000,
    value: 0
});

$("#slider2").roundSlider({
    sliderType: "min-range",
    startAngle: "90",
    max: 3,
    steps:1,
    value: 0
});

$("#slider3").roundSlider({
    sliderType: "min-range",
    startAngle: "90",
    max: 4,
    steps:1,
    value: 0
});

$(".findRoommate").click(function(){
	document.querySelector(".filter").style.display="none";

	document.querySelector(".footer").style.display="block";
	$('#map').css("padding-bottom", 230);
	var slider1val = $('#slider1 .rs-tooltip.rs-tooltip-text.edit').html();
	var slider2val = $('#slider2 .rs-tooltip.rs-tooltip-text.edit').html();
	var slider3val = $('#slider3 .rs-tooltip.rs-tooltip-text.edit').html();

	$.ajax({
		type: "GET",
		contentType: "application/json",
	    url: "http://localhost:3000/filterData",
	    data: {"budget": slider1val,
				"roommates" : slider2val,
				"bedrooms" : slider3val,
				"workLocation" : currLocation}
	})
	.done(function(res) {
	    console.log("Data", JSON.parse(res));
	    data = JSON.parse(res)

	    for(var i=0; i<data.length; i++) {
	    	data[i].workLocation = currLocation;
	    	console.log("WorkLocation", data[i].workLocation);
	    	console.log("Location: ", data[i].location);
	    }
	    	
	    initMap2(0, data);

	  });

	closeLeftSide();
});

function closeLeftSide(){
	   document.querySelector("#left-side").style.display="none";

	    document.querySelector(".button-left").style.marginTop="5px";
	    document.querySelector(".button-left").style.marginLeft="10px";
	    document.querySelector(".button-left").style.color="white";

}

function openLeftSide(){
	document.querySelector("#left-side").style.display="block";

    document.querySelector(".button-left").style.marginTop="5px";
    document.querySelector(".button-left").style.marginLeft="110px";
    document.querySelector(".button-left").style.color="white";

    document.querySelector(".footer").style.display="none";
    $('#map').css("padding-bottom", 0);

}
$("#close-pro").click(function(){
	document.querySelector(".property").style.display="none";
});

function getLocation(){
	 if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
        	currLocation.longitude = position.coords.longitude;
        	currLocation.latitude = position.coords.latitude;

        	$(".form-control").attr("placeholder", currLocation.longitude+", "+currLocation.latitude);
        });
	}
}