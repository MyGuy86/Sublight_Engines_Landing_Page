const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const language = document.getElementById('language')
const submitButton = document.getElementById('submit-btn')



document.getElementById("submit-btn").addEventListener("click", function(event){
    if (fullName.value == null || fullName.value == ""){  
        alert("Name can't be blank");
        e.preventDefault()  
        return false;
    }
    else if(fullName.value.length>35){  
        alert("Name must be under 35 characters long.");
        e.preventDefault()  
        return false;  
    }
    event.preventDefault()
  }
  



  );// end validate

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






