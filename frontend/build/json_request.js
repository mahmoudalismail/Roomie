

var fake_data = {min_budget: 1234,
				 max_budget: 6000,
				 num_roomates: 2};

function test(){

	$.ajax({
		type: "GET",
		contentType: "application/json",
	    url: "http://localhost:3000/filterData",
	    data: fake_data
	})
	.done(function(res) {
	    console.log("Data", JSON.parse(res)[1]);
	  });

}
