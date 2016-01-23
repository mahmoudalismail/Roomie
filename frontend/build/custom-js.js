var vis = 0;
var click=0;

$(".button-left").click(function () {
		console.log("vis: ",vis);
		// Set the effect type
	    if (click === 0){
	    var effect = 'slide';
	    
	    // Set the options for the effect type chosen
	    var options = { direction: "left" };
	    
	    // Set the duration (default: 400 milliseconds)
	    var duration = 300;

	    $('#left-side').toggle(effect, options, duration);
	    document.querySelector(".button-left").style.marginTop="5px";
	    document.querySelector(".button-left").style.marginLeft="110px";
	    document.querySelector(".button-left").style.color="white";
	    click = 1;
	}
	else{
		click=0;
		$('#left-side').toggle(effect, options, duration);
	    document.querySelector(".button-left").style.marginTop="5px";
	    document.querySelector(".button-left").style.marginLeft="10px";
	    document.querySelector(".button-left").style.color="black";
	}

});

$(".close").click(function (){
	document.querySelector(".filter").style.display="none";
	

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