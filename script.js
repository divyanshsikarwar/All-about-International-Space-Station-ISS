
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

var request = new Request('http://api.open-notify.org/iss-now.json');

fetch(request).then(function(response) {
  return response.json();
}).then(function(text) {
  
 latitude = text["iss_position"]["latitude"]
 longitude = text["iss_position"]["longitude"]
 x.innerText =  latitude;
 y.innerText = longitude;
 console.log(longitude,latitude)
 URL = "https://us1.locationiq.com/v1/reverse.php?key=pk.2e2c69c356595ca83c401c67ea119b60&lat=" + latitude + "&lon=" + longitude + "&format=json"
 console.log(URL)
});

/* @cWDvs*CjeAPvaw(gS!t */

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
    coll[0].style.backgroundColor = "#eee";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingBottom = "15px";
    content.style.paddingTop = "10px"
    coll[0].style.backgroundColor = "grey";
  } 
})

coll[1].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    content.style.paddingBottom = "0px";
    content.style.paddingTop = "0px";
    coll[1].style.backgroundColor = "#eee";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.paddingBottom = "15px";
    content.style.paddingTop = "10px"
    coll[1].style.backgroundColor = "grey";
  } 
})

function button3 (){

  var URL = "https://www.nasa.gov/mission_pages/station/main/index.html"

  window.open(URL, "_blank"); 
}

btn.addEventListener("click",button3,false);




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
        "height": 100
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
