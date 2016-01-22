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
