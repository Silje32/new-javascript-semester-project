import { url } from "/js/api.js"; 
import { searchProduct } from "/js/customer/searchProduct.js";
import displayMessage from "/js/displayMessage.js";
import createMenu from "/js/customer/createMenu.js";


createMenu();

searchProduct();

const queryString = document.location.search;
console.log(queryString);

const  params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);




// Make a GET request to fetch a list of resources from your API.
//  Display a list of all the products added to Strapi. Each product must display its title, price and image.


(async function ()  {

    const productsUrl = url + "/products";
    

    const productsContainer = document.querySelector(".products-container");

    try { 
        const response = await fetch(productsUrl);
        const products = await response.json();
        console.log(products);

        productsContainer.innerHTML = "";


        products.forEach(function (product)  {
            productsContainer.innerHTML += `<a class="products" href="product-details.html?id=${product.id}">
                                               <h2>${product.title}</h2>
                                               <p>Price: ${product.price} $</p>
                                               <img src="${url}${product.image.url}" alt="${product.title}" class="image"/>
                                            </a>`;

        
        });


    } catch(error) {
        console.log(error);
        displayMessage ("error", error, ".products-container");
    } 
   

})();   



