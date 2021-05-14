
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementsByClassName("app-main")[0].style.opacity="1";
}
var myVar;
myVar = setTimeout(showPage, 3000);


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let seconds = date.getSeconds();
  minutes = minutes < 10 ? '0'+minutes : minutes;
  if(hours<10){
    hours = "0"+hours
  }
  if(minutes<10){
    minutes = "0"+minutes
  }
  if(seconds<10){
    seconds = "0"+seconds
  }
  
  var strTime = hours + ':' + minutes  + ':' + seconds + ' '+ ampm;
  return strTime;
}


const x = document.getElementById("lati")
const y = document.getElementById("longi")
const z = document.getElementById("human-loc")
var coll = document.getElementsByClassName("collapsible");
var btn = document.getElementById("btn-link")
const yx = document.getElementById("srch2")
const xy = document.getElementById("srch")
const pos = document.getElementsByClassName("iss")[0]
const point1 = document.getElementById("1")
const point2 = document.getElementById("2")
const time = document.getElementById("time")

var latitude = ""
var longitude = ""
var URL = ""
var city = ""
var state = ""
var country = ""
var resp = 0

const calc = {
  x_axix : 0,
  y_axix : 0
}


function call (){

  const img = document.getElementsByClassName("responsive")[0]

  var down = img.offsetTop 
  var left = img.offsetLeft
  

var request = new Request('http://api.open-notify.org/iss-now.json');

fetch(request).then(function(response) {
  return response.json();
}).then(function(text) {
  
 latitude = text["iss_position"]["latitude"]
 longitude = text["iss_position"]["longitude"]
 latitude = parseFloat(latitude)
 longitude = parseFloat(longitude)
 x.innerText =  latitude;
 y.innerText = longitude;

  if(latitude>0){
    point1.innerText= latitude.toFixed(2) + "°  North"
  }
  else{
    point1.innerText= Math.abs(latitude).toFixed(2) + "°   South"
  }

  if(longitude>0){
    point2.innerText = longitude.toFixed(2) + "°  East"
  }
  else{
    point2.innerText = Math.abs(longitude).toFixed(2) + "°  West"
  }

  var width = img.clientWidth;
  var height = img.clientHeight;


 calc.x_axix = (width/360)*(parseFloat(longitude)+180)
 calc.y_axix = height - (height/180)*(parseFloat(latitude)+90)
 
 

 pos.style.top = down + calc.y_axix - pos.clientHeight  +"px";
 pos.style.left = left + calc.x_axix- pos.clientWidth/2  + "px";


 URL = "https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c69c356595ca83c401c67ea119b60&lat=" + latitude + "&lon=" + longitude + "&format=json"

});





}




/* BUttons */ 

function button (){
    var URL = "https://earth.google.com/web/search/" + longitude + "," + latitude
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

  window.open(URL, "_blank"); }
}


function button3 (){

  var URL = "https://www.nasa.gov/mission_pages/station/main/index.html"

  window.open(URL, "_blank"); 
}

/* BUttons */ 

timer = setInterval(call, 2500); 


xy.addEventListener("click",button,false)
yx.addEventListener("click",button2,false)
btn.addEventListener("click",button3,false);

for (var i =0;i<=1;i++){
coll[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    content.style.paddingBottom = "0px";
    content.style.paddingTop = "0px";
    coll[i].style.backgroundColor = "#eee";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingBottom = "15px";
    content.style.paddingTop = "10px"
    coll[i].style.backgroundColor = "grey";
  } 
})
}




timer = setInterval(()=>{
  var people 

  var request = new Request(URL);

fetch(request).then(function(response) {
  if(response.status != 200){
    z.innerText = "Currently, ISS is above a place on Globe that can't be Geocoded."
    resp = 0
    return
  }
  else{
    resp = 1
  return response.json();
}

}).then(function(text) {
  var city = text["address"]["city"]
  var country = text["address"]["country"]
  var state = text["address"]["state"]

  z.innerText = city + ", " + state + ", " + country
});

var request = new Request("http://api.open-notify.org/astros.json");

fetch(request).then(function(response) {
  return response.json();


}).then(function(text) {

  document.getElementById("num").innerText = text["number"]
  str=""
  people = text["people"]
  for (var i =0 ;i<text["number"];i++){
    str += "<li id='peep_css'>"
    str += people[i]["name"] + "</li>"
  }

  document.getElementById("peeps").innerHTML = str;


});

  document.getElementById("alt").innerHTML = "42" + Math.floor(Math.random() * 3);
  document.getElementById("show-km").style.opacity=1;
  document.getElementById("ms").innerText = "766" + Math.floor(Math.random() * 10) + " M/s" ;
  document.getElementById("kms").innerText = "2758" + Math.floor(Math.random() * 7) + " Km/h" ;
}, 10000); 






timer = setInterval(()=>{
  time.innerText = formatAMPM(new Date)
}, 1000); 







/*https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c69c356595ca83c401c67ea119b60&lat=+34.0110+&lon=+85.8117+&format=json

https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c69c356595ca83c401c67ea119b60&lat=27.4924+&lon=77.6737+&format=json */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 200
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});