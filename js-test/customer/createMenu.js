import { getUsername }  from "./admin/storage.js"; 
import logoutButton from "./admin/logoutButton.js"; 

export default function createMenu()  {

    const { pathname } = document.location;
    console.log(pathname);


    const username = getUsername();
    console.log(username); 

    let authLink =  `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Login</a>`

    if (username) {
        authLink =  `<a href="adminProductsPage.html"  class="${pathname === "/adminProductsPage.html" ? "active" : ""}">Edit Products</a>
                     <a href="add.html"  class="${pathname === "/add.html" ? "active" : ""}">Add product</a>
                     <button id="logout">Logout ${username}</button>`
    }


    const container = document.querySelector(".menu-container");

    container.innerHTML = `<div class="menu">
                                <a href="./" class="${pathname === "./" || pathname === "/index.html" ? "active" : ""}">Home</a>
                                <a href="products.html" class="${pathname === "/products.html" ? "active" : ""}">Products</a>
                                ${authLink}
                                <a href="cart-basket.html" i class="fa fa-shopping-bag"></i></a>
                           </div>`; 

    logoutButton();

}