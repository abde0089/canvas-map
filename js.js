document.addEventListener("DOMContentLoaded", function(){

getLocation();
});

function getLocation() {
if(navigator.geolocation) {
    var params = {
        enableHighAccuracy: true, 
        timeout: 360000, 
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(watchPosition, gpsError, params);
    }
    else {
        function gpsError(error){
    var errors = {
     1: 'Permission denied',
     2: 'Position unavailable',
     3: 'Request timeout'
        };
        alert("Error: " + errors[error.code]);
        }
    }
}
 
 function watchPosition(position) {
 var hi = "400";
 var wi = "400";
 var latitude = position.coords.latitude;
 var longitude = position.coords.longitude;
 var key = "AIzaSyASiZeDZ849KQFC7A6IuigqJ6T05j2teMs";
 var url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude +
         "&zoom=14&size=" + wi + "x" + hi + "&maptype=roadmap&markers=color:red%7C" + latitude + "," + longitude + "&key=" + key;
     console.log(url);
     var draw = document.createElement("canvas");
     document.querySelector("body").appendChild(draw);
     draw.width = wi;
     draw.height = hi;
     context = draw.getContext("2d");
     context.src = url;

    var theMap = new Image();

    theMap.onload = function () {
    context.drawImage(tmap, 0 , 0, 400, 400);
    };
    theMap.src = url;

}