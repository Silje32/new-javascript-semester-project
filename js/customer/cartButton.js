
// This button will toggle the product in and out of a cart array stored in local storage.

export function addToCart()  {

    let cartArray = [];
    
    const cartButton = document.querySelectorAll("#cart");

    cartButton.onclick = function(event) {
          cartArray.push(event.target.dataset.items);
          console.log(cartArray); 

          const itemToAdd = details.find(item => item.id === event.target.dataset.items);
          console.log(itemToAdd);

          cartArray.push(itemToAdd);
          console.log(cartArray); 

          showCart(cartArray);
          localStorage.setItem("cartList", JSON.stringify(cartArray));

    }

}

