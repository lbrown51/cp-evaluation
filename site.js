console.log("Hello world");

$(document).ready(function() {
    $.getJSON( "https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/7cc04951d4b0421e664ebbc9e4aa6642e2c02dbb/weather.json", function( data ) {
        console.log(data.length);
        data.each(function(key){
            console.log(key);
            $("ul").append("<li>"+this+"</li>");
        });
        var items = [];
 
    });
    c
});

