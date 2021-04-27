import { url }  from "./api.js"; 
import { saveUser, saveToken }  from "./storage.js"; 
import createMenu from "./createMenu.js";
import displayMessage from "./displayMessage.js";

createMenu();


// Log in to get to the admin pages.
// Create an admin login form that allows administrator users to login.

const password = document.querySelector("#password");
const characterCount = document.querySelector(".character-count span");
const submitButton = document.querySelector("button[type='submit']");
const form = document.querySelector("#logInForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");


password.onkeyup = function (event) {

    console.log(event.target.value.length);

    const len = event.target.value.length;
    
    characterCount.innerHTML = len;

    if(len >= 8) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }

};


function validateEmail(email)  {

    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;

}



form.addEventListener("submit", validateForm);


function validateForm(event)  {
    event.preventDefault();

    const userValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    doLogin(userValue, passwordValue);
}




async function doLogin(username, password) {

   const logInUrl = url + "auth/local";
   const data = JSON.stringify({ identifier: username, password: password });

   const options = {
      method: "POST",
      body: data, 
      headers: {
          "Content-Type": "application/json", 
      },

   };

   try {
       const response = await fetch(logInUrl, options);
       const json = await response.json();
       console.log(json);

       if (json.user) {

           saveToken(json.jwt);
           saveUser(json.user);

           location.href = "./";
       }

       if (json.error) {
        displayMessage ("error", "Invalid login detailes", ".message-container");
    }


    } catch (error) {
       console.log(error);

}    

}



