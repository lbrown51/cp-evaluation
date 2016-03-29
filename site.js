console.log("Hello world");

$(document).ready(function() {
    console.log($("u"));
    $.getJSON( "https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/7cc04951d4b0421e664ebbc9e4aa6642e2c02dbb/weather.json", function( data ) {
        console.log($("ul"));
        data.each(function(){
            console.log(this)
            $("ul").append("<li>"+this+"</li>");
        });
        var items = [];
 
    });
});

