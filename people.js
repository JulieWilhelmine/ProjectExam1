

// Currently in Space
var people = document.getElementById("currentnumber") ;

fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {

      people.innerHTML="There are currently" + " " + data.number + " " + "people in Space!" ;
      console.log(data);
    })

    .catch(err => {
        console.error('An error ocurred', err);
    });


// Astroaut/Cosmonaut

function whatIsDifference() {
  alert("It's the same thing!\nThey are just two different words for it. Americans use the word astronaut, while in Russia cosmonaut is more common.")
};
