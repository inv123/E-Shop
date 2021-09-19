let baseUrl = `https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app/products.json`;

async function getAllProducts(){
    let req = await fetch(baseUrl);
    return req.json();
}

async function getFilteredProducts(start, end){
    let query = `?orderBy="price"&startAt=${start}&endAt=${end}`;
    if(start === undefined){
        query = `?orderBy="price"&endAt=${end}`;
    }
    let req = await fetch(baseUrl + query);
    return req.json();
}

async function getCurrentItem(itemId){
    let query = `?orderBy="id"&equalTo="${itemId}"`;
   
    let req = await fetch(baseUrl + query);
    return req.json();
    
}


export default {
    getAllProducts,
    getFilteredProducts,
    getCurrentItem
}