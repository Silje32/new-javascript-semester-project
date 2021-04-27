// Use local storage to keep the user logged in.

const tokenKey = "token";
const userKey = "user";

export function saveToken (token)  {
    saveToStorage(tokenKey, token);

}


export function getToken()  {
    return getFromStorage(tokenKey);
    
}


export function saveUser (user)  {
    saveToStorage(userKey, user);
    
}


export function getUsername()  {
    const user = getFromStorage(userKey);

    if (user)  {
        return user.username;

    }

    return null;
    
}

export function clearStorage() {
    localStorage.clear();

}


// JSON.stringify - to save
function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    
}

// JSON.parse - when retrieving
function getFromStorage(key) {
    const value = localStorage.getItem(key); 

    if (!value) {
        return [];

    }

    return JSON.parse(value);

}







