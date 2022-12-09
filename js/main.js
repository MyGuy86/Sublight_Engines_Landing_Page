const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const language = document.getElementById('language')
const submitButton = document.getElementById('submit-btn')
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



function validateName(){
    console.log(fullName.value);
    if (fullName.value == ""){
        console.log("option 1");
            alert("Please provide your name");
            return false;
    }
    else if ((fullName.value.length < 3) || (fullName.value.length > 25)){
        console.log("option 2");
        alert("Name must be between 3 and 25 characters");
        return false;
    }
    else
        return true;
}
function validateEmail(){
    console.log(email.value);
    if (email.value == ""){
        console.log("option 1");
        alert("Please provide an email. Field required");
        return false;
    }
    else if (!(email.value.match(mailformat))) {
        console.log("option 2");
        alert("Please enter correct email ID");
        return false;
    }
    else
    return true;
}
function validatePhone(){
    console.log(phone.value);
    if (phone.value == ""){
        console.log("option 1");
        alert("Please provide a phone number");
        return false;
    }
    else if(!(phone.value.match(phoneno))){
        console.log("option 2");
        alert("Please enter a 10 digit phone number");
        return false;
    }
    else
        return true;
}
function validateLanguage(){
    console.log(language.value);
    if (language.value == ""){
        console.log("option 1");
        alert("Please choose a language");
        return false;
    }
    else
        return true;
}

document.getElementById("submit-btn").addEventListener("click", function(e){
    if (validateName() && validateEmail() && validatePhone() && validateLanguage()){
        alert("Thank you")
    }
})//full form check, calling other methods per input to check

  
  // end validate

// console.log(submitButton)
// function validate(e) {
//     e.
//     console.log('something')
// }

// function validate(e){
//     // var fullName=document.getElementById(fullName);
//     if (fullName.value == null || fullName.value == ""){  
    //         alert("Name can't be blank");
    //         e.preventDefault()  
    //         return false;
//     }
//     else if(fullName.length>35){  
//         alert("Name must be under 35 characters long.");
//         e.preventDefault()  
//         return false;  
//     }






