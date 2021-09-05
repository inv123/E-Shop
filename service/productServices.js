let baseUrl = `https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

async function getAllProducts(){
    let req = await fetch(baseUrl);
    return req.json();
}

export default {
    getAllProducts
}