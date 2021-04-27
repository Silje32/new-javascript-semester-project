/* When the flag is on, the product should be displayed on the homepage.  */



// JSON.stringify - to save
export function saveToStorage(flagicon, flag) {
    localStorage.setItem(flagicon, JSON.stringify(flag));
    
}



// JSON.parse - when retrieving
export function getFromStorage(flagicon) {
    const flag = localStorage.getItem("flagicon"); 

    if  (flag === null) {
         return [];
    }  else {
          return JSON.parse(flag);
    }

}


