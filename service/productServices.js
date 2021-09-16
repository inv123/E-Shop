let baseUrl = `https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

async function getAllProducts(){
    let req = await fetch(baseUrl);
    return req.json();
}

async function getProductsUpTo50(){
    let req = await fetch(baseUrl + '?orderBy="price"&endAt=50');
    return req.json();
}

async function getProductsUpTo100(){
    let req = await fetch(baseUrl + '?orderBy="price"&startAt=51&endAt=100');
    return req.json();
}

async function getProductsUpTo199(){
    let req = await fetch(baseUrl + '?orderBy="price"&startAt=101&endAt=199');
    return req.json();
}



export default {
    getAllProducts,
    getProductsUpTo50,
    getProductsUpTo100,
    getProductsUpTo199
}