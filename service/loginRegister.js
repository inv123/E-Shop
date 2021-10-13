let loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCd_Sg66e-0i-g0-pRXhjIQuobRnH4sgzY';
let registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCd_Sg66e-0i-g0-pRXhjIQuobRnH4sgzY'

// Login
async function login(userLogin){

    let req = await fetch(loginUrl, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLogin)
    })

    let res = await req.json();
    
    localStorage.setItem('authToken', res.idToken);
    localStorage.setItem('email', res.email);
    localStorage.setItem('userId', res.localId);
   
    return res;
}

//Register
async function register(userRegister){
    let req = await fetch(registerUrl, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userRegister)
    })

    let res = await req.json();
    
    localStorage.setItem('authToken', res.idToken);
    localStorage.setItem('email', res.email);
    localStorage.setItem('userId', res.localId);
}


export default {
    login,
    register
}