import { clearStorage } from "./admin/storage.js";


export default function logoutButton ()  {

    const logoutButton = document.querySelector("#logout");

    if(logoutButton) {
        logoutButton.onclick = function() {

            const doLogout = confirm("Are you sure?");

            if(doLogout)  {
                clearStorage(); 
                location.href = "./";
            }
        }

    }

}