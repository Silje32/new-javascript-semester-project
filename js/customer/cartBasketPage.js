import displayMessage from "./displayMessage.js";
import createMenu from "./createMenu.js";
import { addToCart } from "./cartButton.js";

createMenu();

addToCart();

/* The cart/basket page must display a list of all products added to the cart. Load the items that have been added
   to local storage and display them on the page. If the cart is empty display a message indicating this.  */

   const cartItems = JSON.parse(localStorage.getItem("cartList"));
   console.log(cartItems);
   
   const cartContainer = document.querySelector(".cart-list");
   const totalContainer = document.querySelector(".total");

   const itemArray = noArray();

   let total = 0;


   
// display the cart-array.

function showCart(cartItems)  { 
  cartItems.forEach(function(cartItem) {
      total += cartItem.price;
      cartContainer.innerHTML += `<div class="item" href="products.html?id=${cartItem.id}">
                                          <h2>${cartItem.title}</h2>
                                          <p>${cartItem.price}</p>
                                          <img src="${cartItem.image.url}" />
                                  </div>`;

});

}



function noArray() {
   
    if (cartItems === null)  {
         return displayMessage("error", "No items in this shopping bag", ".message-container");
   } else {
         return JSON.parse(cartItems);    
   }

}

 
//After the list of products, display the total price of all the products in the cart.

   totalContainer.innerHTML = `Total: ${total}`;
