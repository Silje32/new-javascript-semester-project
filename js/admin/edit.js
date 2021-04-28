import { url } from "/js/api.js"; 
import createMenu from "/js/customer/createMenu.js";
import deleteButton from "/js/admin/deleteButton.js";
import { getToken }  from "/js/admin/storage.js"; 
import displayMessage from "/js/displayMessage.js";

createMenu();


const queryString = document.location.search;
const  params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
   document.location.href = "./";
}

const productUrl = url + "/products/" + id;


const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");


(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();
        console.log(details);

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        idInput.value = details.id;

        deleteButton(details.id);
    }
    catch(error) {
        console.log(error)
    }
    finally {
        form.style.display ="block";
    }
})() 


form.addEventListener("submit", submitForm);

function submitForm(event)  {
    event.preventDefault();

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const idValue =  idInput.value;

    if(titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 ) {
        return displayMessage ("warning", "invalid values", ".message-container");
    } 

    updateProduct(titleValue, priceValue, descriptionValue, idValue);

}  
  
async function updateProduct(title, price, description, id) {

    const productUrl = url + "/products/" + id;

    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data, 
        headers: {
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}` 
        },
  
     };

    try {
        const response = await fetch(productUrl, options);
        const json = await response.json();
        console.log(json);

        if(json.updated_at) {
            displayMessage ("success", "The Product is updated", ".message-container");
        }

        if(json.error) {
            displayMessage ("error", json.message, ".message-container");
        }

    } 
    catch(error) {
        console.log(error);
    }

}


