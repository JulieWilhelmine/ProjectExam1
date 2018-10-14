
// Space Station position
var iss = document.getElementById("position") ;

function coordinate() {
fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(data => {

       iss.innerHTML="The International Space Station is currently at" + " " + data.iss_position.latitude + " " + "latitude and" + " " + data.iss_position.longitude + " " + "longitude" ;
      console.log(data);
    })

    .catch(err => {
        console.error('An error ocurred', err);
    })};

setInterval(coordinate, 1000);


// Slideshows
var slideIndex = 1;
showImgs(slideIndex);

var slideIndex2 = 1;
showImgs2(slideIndex2);

function nextImgs(n) {
  showImgs(slideIndex += n);
}

function currentImg(n) {
  showImgs(slideIndex = n);
}

function showImgs(n) {
  var i;
  var x = document.getElementsByClassName("firstSlides");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function nextImgs2(n) {
  showImgs2(slideIndex2 += n);
}

function currentImg2(n) {
  showImgs2(slideIndex2 = n);
}

function showImgs2(n) {
  var e;
  var y = document.getElementsByClassName("secondSlides");

  if (n > y.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = y.length}
  for (e = 0; e < y.length; e++) {
     y[e].style.display = "none";
  }
  y[slideIndex2-1].style.display = "block";

}
