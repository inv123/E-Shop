let baseUrl = `https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app`;

async function getAllProducts(){
    let req = await fetch(baseUrl + '/products.json');
    return req.json();
}

async function getFilteredProducts(start, end){
    let query = `?orderBy="price"&startAt=${start}&endAt=${end}`;
    if(start === undefined){
        query = `?orderBy="price"&endAt=${end}`;
    }
    let req = await fetch(baseUrl +'/products.json' + query);
    return req.json();
}

async function getCurrentItem(itemId){
    let query = `?orderBy="id"&equalTo="${itemId}"`;
   
    let req = await fetch(baseUrl + '/products.json' + query);
    return req.json();
}

async function addToCartProduct(user, item, count, price, description, imageUrl, title, id){
    let reqBody = {};
    reqBody[item] = {};
    reqBody[item]["count"] = count;
    reqBody[item]["price"] = price;
    reqBody[item]["description"] = description;
    reqBody[item]["imageUrl"] = imageUrl;
    reqBody[item]["title"] = title;
    reqBody[item]["id"] = id;
    let req = await fetch(baseUrl +`/addToCart/${user}/items.json/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })
    return req.json();
}

async function getCartProducts(user){
    let req = await fetch(baseUrl + `/addToCart/${user}/items.json/`);
    return req.json();
}


export default {
    getAllProducts,
    getFilteredProducts,
    getCurrentItem,
    addToCartProduct,
    getCartProducts

}