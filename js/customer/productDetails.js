import { url } from "/js/api.js"; 
import createMenu from "/js/customer/createMenu.js";
import displayMessage from "/js/displayMessage.js";
import { addToCart } from "/js/customer/cartButton.js";


createMenu();

addToCart();

const queryString = document.location.search;

const  params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
   document.location.href = "./";
}

const detailUrl = url + "/products/" + id;
console.log(detailUrl);



// Make a GET request to fetch a list of resources from your API.

(async function() { 
   try {
       const response = await fetch(detailUrl);
       const details = await response.json();
       console.log(details);

       document.title = details.name;


       const detailsContainer = document.querySelector(".details-container");


       detailsContainer.innerHTML = `<div class="items" href="cart-basket.html?id=${details.id}">
                                          <h1>${details.title}</h1>
                                          <p>${details.description}</p>
                                          <p>Price: ${details.price} $</p>
                                          <img src="${url}${details.image.url}" alt="${details.title}"/>
                                          <button type="button" data-id="${details.id}" data-title="${details.title}">ADD TO CART</button>
                                     </div>`;

       console.log(details); 

      }


   catch(error) {
      displayMessage ("error", error, ".details-container");
   }


})(); 