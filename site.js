console.log("Hello world");

$(document).ready(function() {
    console.log("rejoice - jquery is enabled!");
    $.getJSON( "https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/7cc04951d4b0421e664ebbc9e4aa6642e2c02dbb/weather.json", function( data ) {
        console.log($("#weather"));
        data.each(function(){
            $("#weather").append("<li>"+this+"</li>");
        });
        var items = [];
 
    });
});

