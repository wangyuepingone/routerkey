
export function login(userInfo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(userInfo.username);
        },3000)
    })
}

export function setItem(key,value){
    localStorage.setItem(key,value)
};

export function getItem(key){
    return localStorage.getItem(key)
}

export function clearItem(key){
    return localStorage.removeItem(key)
}