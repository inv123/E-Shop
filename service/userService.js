let baseUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCd_Sg66e-0i-g0-pRXhjIQuobRnH4sgzY';

async function login(userLogin){

    let req = await fetch(baseUrl, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLogin)
    })

    let res = await req.json();

    localStorage.setItem('authToken', res.idToken);
    localStorage.setItem('email', res.email);
   

    return res;
}

export default {
    login
}