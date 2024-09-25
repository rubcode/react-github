const BASE_API = "https://api.github.com";

async function fetchHandler(url,options){
    const response = await fetch(url,options)
    if(!response){
        return{
            data: null,
            isError: true
        }
    }
    const data = await response.json()
    return{
        data,
        isError: false
    }
}

export async function getUser(username){
    return fetchHandler(`${BASE_API}/users/${username}`);
}

export async function getRepos(username){
    return fetchHandler(`${BASE_API}/users/${username}/repos`);
}