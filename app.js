import page from './node_modules/page/page.mjs';

// let navContainer = document.querySelector('header');
// let viewContainer = document.querySelector('.header-inner')

// page.start();

let baseUrl = 'https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app/phone.json'

// fetch(`${baseUrl}`)
//     .then(req => req.json())
//     .then(res => console.log(res))

async function get(){
    let req = await fetch(baseUrl)
    let res = await req.json();
    console.log(res);
}

get()