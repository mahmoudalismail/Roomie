var vis = 0;
var click=0;

var filtered = 0;




$(".button-left").click(function () {
	console.log("vis: ",vis);
	// Set the effect type
    if (click == 0){
	    var effect = 'slide';
	    
	    // Set the options for the effect type chosen
	    var options = { direction: "left" };
	    
	    // Set the duration (default: 400 milliseconds)
	    var duration = 300;

	    // $('#left-side').toggle(effect, options, duration);
	    openLeftSide();

	    click = 1;
	}
	else{
		click=0;
		options = { direction: "right" };
		//$('#left-side').toggle(effect, options, duration);
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
	closeLeftSide();
});

function closeLeftSide(){
	   document.querySelector("#left-side").style.display="none";

	    document.querySelector(".button-left").style.marginTop="5px";
	    document.querySelector(".button-left").style.marginLeft="10px";
	    document.querySelector(".button-left").style.color="black";

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

