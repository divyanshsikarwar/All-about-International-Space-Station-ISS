
const x = document.getElementById("lati")
const y = document.getElementById("longi")
const z = document.getElementById("human-loc")
var coll = document.getElementsByClassName("collapsible");
var btn = document.getElementById("btn-link")

var latitude = ""
var longitude = ""
var URL = ""
var city = ""
var state = ""
var country = ""
var resp = 0
function call (){

var request = new Request('https://api.open-notify.org/iss-now.json');

fetch(request).then(function(response) {
  return response.json();
}).then(function(text) {
  
 latitude = text["iss_position"]["latitude"]
 longitude = text["iss_position"]["longitude"]
 x.innerText =  latitude;
 y.innerText = longitude;
 console.log(longitude,latitude)
 URL = "https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c619b60&lat=" + latitude + "&lon=" + longitude + "&format=json"
 console.log(URL)
});



var request = new Request(URL);

fetch(request).then(function(response) {
  if(response.status != 200){
    z.innerText = "Currently, ISS is above a place on Globe that can't be Geocoded."
    resp = 0
  }
  else{
    resp = 1
  return response.json();
}

}).then(function(text) {
  var city = text["address"]["city"]
  var country = text["address"]["country"]
  var state = text["address"]["state"]
  console.log(city,state,country)
  z.innerText = city + ", " + state + ", " + country
});


}

function button (){


    var URL = "https://earth.google.com/web/search/" + longitude + "," + latitude
    console.log(URL)
    window.open(URL, "_blank");
}

function button2 (){
  if(resp ==0){
    if (confirm("Currently, ISS is above a place on Globe that can't be Geocoded,\nPress OK to locate it on Globe or try later.")) {
      var URL = "https://earth.google.com/web/search/" + longitude + "," + latitude
      window.open(URL, "_blank");
    } 
  }
  else{
  var URL = "https://www.google.com/maps/place/" + city + ","  + state + "," + country
  console.log(URL)
  window.open(URL, "_blank"); }
}



timer = setInterval(call, 5000);

const xy = document.getElementById("srch")
xy.addEventListener("click",button,false)

const yx = document.getElementById("srch2")
yx.addEventListener("click",button2,false)

coll[0].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    content.style.paddingBottom = "0px";
    content.style.paddingTop = "0px";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingBottom = "15px";
    content.style.paddingTop = "10px"
  } 
})

coll[1].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    content.style.paddingBottom = "0px";
    content.style.paddingTop = "0px";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingBottom = "15px";
    content.style.paddingTop = "10px"
  } 
})

function button3 (){

  var URL = "https://www.nasa.gov/mission_pages/station/main/index.html"

  window.open(URL, "_blank"); 
}

btn.addEventListener("click",button3,false);


/*https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c69c356595ca83c401c67ea119b60&lat=+34.0110+&lon=+85.8117+&format=json

https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c69c356595ca83c401c67ea119b60&lat=27.4924+&lon=77.6737+&format=json */
