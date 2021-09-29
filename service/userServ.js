let baseUrl = 'https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app/';

async function getUserDetails(userId){
    let query = `/users/${userId}.json`;
    let req = await fetch(baseUrl + query);

    return req.json();
}

async function updateUserDetails(userId, userDetails){
    let query = `/users/${userId}.json`;
    let req = await fetch(baseUrl + query, {
        method: 'Put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })

    return req.json();
}

export default {
    getUserDetails,
    updateUserDetails
}