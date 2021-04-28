import { url } from "./api.js"; 
import { getToken }  from "./admin/storage.js"; 


export default function deleteButton(id)  {

    const deleteButton = document.querySelector(".delete");

    deleteButton.innerHTML = `<button type ="button" class="delete">Delete Product</div>`;

    const button = document.querySelector("button.delete");
    
    
    button.onclick = async function() {
        console.log(id);

        const doDelete = confirm("Are you sure you want to delete this?");
        console.log(doDelete);

        // A boolean value
        if(doDelete) {

            const productUrl = url + "products/" + id;

            const token = getToken();
    
            const options = {
                method: "DELETE", 
                headers: {
                    Authorization: `Bearer ${token}` 
                },
          
            };
            try {
                const response = await fetch(productUrl, options);
                const json = await response.json();
                console.log(json);

                location.href = "/";
            } 
            catch(error) {
                console.log(error);
            }

        };

    }

}