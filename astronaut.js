
// Form validate

function validateForm() {

  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;

  var emailRGEX = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
  var nameRGEX = /[A-Za-z]/;

  var emailResult = emailRGEX.test(email);
  var nameResult = nameRGEX.test(name);

if(emailResult == false)
{
alert('We need your email to be able to answer your message :)');
return false;
}

if(nameResult == false)
{
alert('We would like to know your name :)');
return false;
}

  return true;
}


// Space Station position

fetch('http://api.open-notify.org/iss-now.json')
    .then(response => response.json())
    .then(data => {
       var iss = document.getElementById("position") ;

       iss.innerHTML="The International Space Station is currently at" + data.latitude + data.longitude ;
      console.log(data);
    })

    .catch(err => {
        console.error('An error ocurred', err);
    });
