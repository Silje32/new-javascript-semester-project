import { url }  from "/js/api.js"; 
import createMenu from "/js/customer/createMenu.js";
import { clickFlag }  from "/js/customer/flagIcon.js"; 
import { saveToStorage } from "/js/customer/localStorage.js";
import { getFromStorage } from "/js/customer/localStorage.js";


createMenu();
clickFlag();
saveToStorage();
getFromStorage();

const queryString = document.location.search;
console.log(queryString);

const  params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);


const homeUrl = url + "/home";


// Make a GET request to fetch a list of resources from your API.

(async function getBanner()  {
    const heroBanner = document.querySelector(".image-container");
    
    try { 
        const response = await fetch(homeUrl);
        const banner = await response.json();
        console.log(banner);

        const imageBanner = banner;

        
        // Display a hero banner on the home page. 
        let html = "";
            html = `<img src="${url}${imageBanner.hero_banner.url}"  alt="${imageBanner.hero_banner_alt_text}" class="banner"/>`;
             
        heroBanner.innerHTML = html;
     
    } catch(error) {
        console.log(error);
} 
     
})(); 



// Make a GET request to fetch a list of resources from your API.

 (async function ()  {
    const productsUrl = url + "/products";


    const productContainer = document.querySelector(".product-container");
    

    try { 
        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json);


        /* Create HTML for each item. Each product has a featured flag that can be turned on or off. */
        json.forEach(function (product) {
            productContainer.innerHTML += `<div class="product">
                                               <h2>${product.title}</h2>  
                                               <i class="fa fa-flag" data-id="${product.id}" data-name="${product.name}"></i>
                                               <p>${product.description} class="text"</p>
                                               <p>Price: ${product.price} $</p>
                                               <img src="${url}${product.image.url}" alt="${product.title}" class="image"/>
                                           </div>`;

        });


    } catch(error) {
        console.log(error);
    } 

})();   