var map;

// variable of all rectangles on the map

const theTimer = document.querySelector(".timer");
var timer = [0,0,0,0];
var timerRunning = false;
var currentTime;

var baseballField;
var matadome;
var universityStudentUnion;
var jacarandaHall;
var artGalleries;
var interval;

// keep track of which question the user is currently at
var numclicks = 1;

// keep track of correct answer
var score = 0;

// initialize Google Maps
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.24272172886149, lng: -118.52836114743914 },
    zoom: 17,
    disableDoubleClickZoom: true,
    zoomControl: false,
    mapTypeControl: false,
    draggable: false,
    keyboardShortcuts: false,
    streetViewControl: false,
  });

  map.setOptions({ styles: styles["hide"] });

  // add double-click listener to map
  map.addListener("dblclick", function (e) {
    //start();
    drawRectangle(e.latLng, map);
    //console.log("HIIII");
  });
}

// hide building markings and road names
var styles = {
  hide: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

// draw rectangle of every specified building
function drawRectangle(latLng, map) {
    start();

  if(numclicks == 1){

    // set bounds for Baseball Field (LatLngBounds(sw, ne))
    var baseBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.24471195872675, -118.5273391179814),
      new google.maps.LatLng(34.24582823586139, -118.52628460382853)
    );
    // create rectangle
    baseballField = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: map,
      bounds: baseBounds
    });
    // if we click on the correct building, green rectangle
    if (baseBounds.contains(latLng)) {
      baseballField.setOptions({
        strokeColor: "#008000",
        fillColor: "#008000"    
      });
      score++;
      showRightWrong(1, true);
    }
    else { // wrong building, red rectangle
      baseballField.setOptions({
        strokeColor: "#FF0000",
        fillColor: "#FF0000"
      });
      showRightWrong(1, false)
    }
    // go to next question on list
    numclicks++;
    // show result
    showNumResult();
  }
  
  
  else if(numclicks == 2){

    // set bounds for Matadome (LatLngBounds(sw, ne))
    var mataBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.241225065096685, -118.52727842652388),
      new google.maps.LatLng(34.24241507798699, -118.52540647430071)
    );
    // create rectangle
    Matadome = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: map,
      bounds: mataBounds
    });
    // if we click on the correct building, green rectangle
    if (mataBounds.contains(latLng)) {
      Matadome.setOptions({
        strokeColor: "#008000",
        fillColor: "#008000"    
      });
      score++;
      showRightWrong(2, true);
    }
    else { // wrong building, red rectangle
      Matadome.setOptions({
        strokeColor: "#FF0000",
        fillColor: "#FF0000"
      });
      showRightWrong(2, false)
    }
    // go to next question on list
    numclicks++;
    // show result
    showNumResult();
  }
  
  else if(numclicks == 3){

    // set bounds for UniversityStudentUnion (LatLngBounds(sw, ne))
    var usuBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.23979044249995, -118.52728032319077),
      new google.maps.LatLng(34.24029844284518, -118.52668478821954)
    );
    // create rectangle
    UniversityStudentUnion = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: map,
      bounds: usuBounds
    });
    // if we click on the correct building, green rectangle
    if (usuBounds.contains(latLng)) {
      UniversityStudentUnion.setOptions({
        strokeColor: "#008000",
        fillColor: "#008000"    
      });
      score++;
      showRightWrong(3, true);
    }
    else { // wrong building, red rectangle
      UniversityStudentUnion.setOptions({
        strokeColor: "#FF0000",
        fillColor: "#FF0000"
      });
      showRightWrong(3, false)
    }
    // go to next question on list
    numclicks++;
    // show result
    showNumResult();
  }
  
  else if(numclicks == 4){

    // set bounds for Jacaranda Hall (LatLngBounds(sw, ne))
    var jacaBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.240997, -118.529400),
      new google.maps.LatLng(34.242119, -118.527800)
    );
    // create rectangle
    JacarandaHall = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: map,
      bounds: jacaBounds
    });
    // if we click on the correct building, green rectangle
    if (jacaBounds.contains(latLng)) {
      JacarandaHall.setOptions({
        strokeColor: "#008000",
        fillColor: "#008000"    
      });
      score++;
      showRightWrong(4, true);
    }
    else { // wrong building, red rectangle
      JacarandaHall.setOptions({
        strokeColor: "#FF0000",
        fillColor: "#FF0000"
      });
      showRightWrong(4, false)
    }
    // go to next question on list
    numclicks++;
    // show result
    showNumResult();
  }
  
  else if(numclicks == 5){

    // set bounds for Art Galleries (LatLngBounds(sw, ne))
    var artBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(34.2429089540986, -118.52986018967835),
      new google.maps.LatLng(34.24357685509963, -118.52932913938554)
    );
    // create rectangle
    ArtGalleries = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: map,
      bounds: artBounds
    });
    // if we click on the correct building, green rectangle
    if (artBounds.contains(latLng)) {
      ArtGalleries.setOptions({
        strokeColor: "#008000",
        fillColor: "#008000"    
      });
      score++;
      showRightWrong(5, true);
    }
    else { // wrong building, red rectangle
      ArtGalleries.setOptions({
        strokeColor: "#FF0000",
        fillColor: "#FF0000"
      });
      showRightWrong(5, false)
    }
    // go to next question on list
    numclicks++;
    //timerRunning = false;
    //clearInterval(interval);

    // show result
    showNumResult();
  timerRunning = false;

  }

}

function showRightWrong(qnumber, correct) {
  if (correct == true) document.getElementById("result" + qnumber).innerHTML = "CORRECT";
  else document.getElementById("result" + qnumber).innerHTML = "WRONG!!!";
}

function showNumResult() {
  document.getElementById("score").innerHTML = score;
}








// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
  if(time < 10){//checks if number is less than 10 
    time = "0" + time;//adds zeros infront of numbers less than 10
  }
  
  return time;//retuns time
}

// Run a standard minute/second/hundredths timer:
function stopWatch(){
  if(timerRunning == true){
  currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);//adds leadingZeros fuinction to each part of the timer
  //theTimer.innerHTML = currentTime;//updates timer in the index.html page
  document.getElementById("timerr").innerHTML = currentTime;

  timer[3]++; //updates the hundreth of a millisecond 
  timer[0] = Math.floor((timer[3]/100)/60);//creates the mins of the stopwatch
  timer[1] = Math.floor((timer[3]/100)-(timer[0] * 60));//creates the seconds
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));//creates the mili seconds 
  }

}


function start() {
  console.log(numclicks)  
  console.log(timerRunning)  

  if(numclicks <= 5){
    timerRunning = true;//starts the stopwatch 
    interval = setInterval(stopWatch,10);
    
  }
  else if (numclicks > 5){
    timerRunning = false;
    //reset();
  }


}


function reset(){
  clearInterval(interval);//clears the stopwatch
  interval = null;//sets it back to 0
  timer = [0,0,0,0];//sets the array of numbers in the stopwatch back to 0
  timerRunning = false;//stops the stopwatch

}
