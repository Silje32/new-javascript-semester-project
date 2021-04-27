
/* A search text box. When searching (filtering), only the products that include the searched text in their 
   title or description should be listed.  */

export function searchProduct(products)  {
    const search = document.querySelector(".search");

    search.onkeyup = function(event) {
        console.log(event); 

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProduct = products.filter(function (product)  {
             if (product.title.toLowerCase().startsWidt(searchValue)) {
                 return true;
            }
        });
           
           console.log(filteredProduct);
};

}

