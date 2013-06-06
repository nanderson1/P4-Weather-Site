$(document).ready(function() {
	// Get the Weather cheney
	$.simpleWeather({
	
		// Minimum properties to set
		zipcode: 99004,
		unit: 'f',
		
		// Method to display weather
		success: function(weather) {
			
			// Concatenate HTML code & weather variables.
			// Put into one big'ol collection
			html = '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>';
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li>';
			html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			//html += '<img src="img/' +weather.code +'.png"/>';
			
			$('body').addClass('bg' + weather.code);
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$('#cheney').html(html);
		},

		// Method 
		error: function(error) {
			$('#cheney').html('<p>'+error+'</p>');
		}

	});
	// end getting Weather cheney
	
$('button').click(function() {
		
		$('#cheney').hide('fast');
		
  		var getZip = $('input').val();
		console.log(getZip);
	// Get the Weather
	$.simpleWeather({
	
		// Minimum properties to set
		zipcode: getZip,
		unit: 'f',
		
		// Method to display weather
		success: function(weather) {
			
			// Concatenate HTML code & weather variables.
			// Put into one big'ol collection
			html = '<h1>'+weather.temp+'&deg;'+weather.units.temp+'</h1>';
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<li class="currently">'+weather.currently+'</li>';
			html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			//html += '<img src="img/' +weather.code +'.png"/>';
			
			$('body').addClass('bg' + weather.code);
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$("#weather").html(html);
		},

		// Method 
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}

	});
	// end getting Weather
  });	

});