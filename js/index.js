import { url }  from "/js/api.js"; 
import createMenu from "/js/customer/createMenu.js";


createMenu();

const queryString = document.location.search;
console.log(queryString);

const  params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);


const homeUrl = url + "/home";



// Make a GET request to fetch a list of resources from your API.

(async function Logo()  {
    const logoImage = document.querySelector(".menu-container");
    
    try { 
        const response = await fetch(homeUrl);
        const logo = await response.json();
        console.log(logo);

        const imageLogo = logo;


        // Display a logo on the home page. 
        let html = "";
            html = `<img src="${url}${imageLogo.Logo.url}"  alt="${imageLogo.hero_banner_alt_text}" class="logo"/>`;
             
        logoImage.innerHTML = html;
     
    } catch(error) {
        console.log(error);
} 
     
})(); 



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


        /* Create HTML for each item. Each product has a featured flag that can be turned on or off.  */

        json.forEach(function (product) {
            productContainer.innerHTML += `<div class="product">
                                               <img src="${url}${product.image.url}" alt="${product.title}" class="image"/>
                                               <h2>${product.title}</h2>  
                                               <i class="fa fa-flag" data-id="${product.id}" data-name="${product.name}"></i>
                                               <p>${product.description}</p>
                                               <p class="price">Price: ${product.price} $</p>
                                           </div>`;

        });


    } catch(error) {
        console.log(error);
    } 

})();   



/* When the flag is on, the product should be displayed on the homepage. */

const flag = document.querySelectorAll(".product i");
   console.log(flag);

   if  (flag === null) {

}  else {

}

