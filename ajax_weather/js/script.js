$(document).ready(function(){
    $.ajax(
    {
    	url: "http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&units=metric",
    	data: {
	      format: 'json'
	    },
    	dataType: 'jsonp',
    	success: function(data){
        	$("section.card-kiev > h1.card-header").html(data.name);
        	$("section.card-kiev > p.card-temp").html(data.main.temp);
        	$("section.card-kiev > p.card-info").html(data.weather[0].main+", "+data.weather[0].description);
    	},
    	type: 'GET'
    });
    $.ajax(
    {
    	url: "http://api.openweathermap.org/data/2.5/weather?q=Lviv,ua&appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&units=metric",
    	data: {
	      format: 'json'
	    },
    	dataType: 'jsonp',
    	success: function(data){
        	$("section.card-lviv > h1.card-header").html(data.name);
        	$("section.card-lviv > p.card-temp").html(data.main.temp);
        	$("section.card-lviv > p.card-info").html(data.weather[0].main+", "+data.weather[0].description);
    	},
    	type: 'GET'
    });
    $.ajax(
    {
    	url: "http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&units=metric",
    	data: {
	      format: 'json'
	    },
    	dataType: 'jsonp',
    	success: function(data){
        	$("section.card-odessa > h1.card-header").html(data.name);
        	$("section.card-odessa > p.card-temp").html(data.main.temp);
        	$("section.card-odessa > p.card-info").html(data.weather[0].main+", "+data.weather[0].description);
    	},
    	type: 'GET'
    });


    function sendAjaxCall(){
    	var url1 = "http://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&units=metric";
    	var url2 = "http://api.openweathermap.org/data/2.5/weather?q=Lviv,ua&appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&units=metric";
    	var url3 = "http://api.openweathermap.org/data/2.5/weather?q=Odessa,ua&appid=1cbb9d3c2d3d13f34be51c51afe4b6cb&units=metric";
    	$.get(
    		url1, function(data){
            	$("section.card-kiev > h1.card-header").html(data.name);
            	$("section.card-kiev > p.card-temp").html(data.main.temp);
            	$("section.card-kiev > p.card-info").html(data.weather[0].main+", "+data.weather[0].description);
	    	}
	    );
	    $.get(
    		url2, function(data){
            	$("section.card-lviv > h1.card-header").html(data.name);
            	$("section.card-lviv > p.card-temp").html(data.main.temp);
            	$("section.card-lviv > p.card-info").html(data.weather[0].main+", "+data.weather[0].description);
	    	}
	    );
	    $.get(
    		url3, function(data){
            	$("section.card-odessa > h1.card-header").html(data.name);
            	$("section.card-odessa > p.card-temp").html(data.main.temp);
            	$("section.card-odessa > p.card-info").html(data.weather[0].main+", "+data.weather[0].description);
	    	}
	    );
    }

    // update button
    $("button").click(function(){
    	sendAjaxCall();
    });

    // update every 5 minutes
    setInterval(function(){ sendAjaxCall(); }, 300000);
});