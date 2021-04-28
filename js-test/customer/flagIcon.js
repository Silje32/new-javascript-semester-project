/* Each product has a featured flag that can be turned on or off. When the flag is on, the product should be 
   displayed on the homepage. */

   import { saveToStorage } from "./localStorage.js";
   import { getFromStorage } from "./localStorage.js";

  
   const flag = document.querySelectorAll(".product i");
   console.log(flag);


   flag.forEach(function(icon)  {
       icon.addEventListener("click", clickFlag);    
   });


   export function clickFlag(event) {
      console.log(event);
      // event.target.toggle("fa"); 
      // event.target.toggle("far"); 
    
      // const id = event.target.dataset.id;
      // const name = event.target.dataset.name;

      const getFlag = getFromStorage();

      // getFlag.push(product);

      saveToStorage(getFlag);

   }
   
   /*
   const doesObjectExist = flagicon.find(function(flag) {
      console.log(flag);
  
  });
  */

   

// To create a new array use the filter method.