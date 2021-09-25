let baseUrl = `https://e-commerce-shop-a31a6-default-rtdb.europe-west1.firebasedatabase.app`;

async function getAllProducts(){
    let req = await fetch(baseUrl + '/products.json');
    return req.json();
}

async function isDiscounted(){
    let query = `?orderBy="isDiscounted"&equalTo=true`;
    let req = await fetch(baseUrl + '/products.json' + query);
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

async function getFilteredProductsByTitle(title){
    let query = `?orderBy="title"&equalTo="${title}"`;

    let req = await fetch(baseUrl + `/products.json` + query);
    return req.json();
}

async function getCurrentItem(itemId){
    let query = `?orderBy="id"&equalTo="${itemId}"`;
   
    let req = await fetch(baseUrl + '/products.json' + query);
    return req.json();
}

async function addToCartProduct(user, count, price, description, imageUrl, title, id, totalPrice){
    let reqBody = {};
    reqBody["count"] = count;
    reqBody["price"] = price;
    reqBody["description"] = description;
    reqBody["imageUrl"] = imageUrl;
    reqBody["title"] = title;
    reqBody["id"] = id;
    reqBody["totalPrice"] = totalPrice;
    let req = await fetch(baseUrl +`/addToCart/${user}/items/${id}.json`, {
        method: 'put',
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


async function updateCartProduct(user, item, count, price, description, imageUrl, title, id, totalPrice){
    let reqBody = {};
    reqBody[item] = {};
    reqBody[item]["count"] = count;
    reqBody[item]["price"] = price;
    reqBody[item]["description"] = description;
    reqBody[item]["imageUrl"] = imageUrl;
    reqBody[item]["title"] = title;
    reqBody[item]["id"] = id;
    reqBody[item]["totalPrice"] = totalPrice;
    let req = await fetch(baseUrl + `/addToCart/${user}/items.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })

    return req.json();
}

async function getCartCurrentItem(userId, productId){
    let req = await fetch(baseUrl + `/addToCart/${userId}/items/${productId}.json`);
    return req.json();
}

async function deleteItem(userId, productId){
    let req = await fetch(baseUrl + `/addToCart/${userId}/items/${productId}.json`, {
        method: 'Delete'
    })

    return req.json()
}

async function savePersonalData(userId, personalDataForm){
    let req = await fetch(baseUrl + `/addToCart/${userId}/personalData.json`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personalDataForm)
    });

    return req.json()
}

async function setPaymentMethod(userId, personalDataForm){
    let req = await fetch(baseUrl + `/addToCart/${userId}/personalData.json`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(personalDataForm)
    })

    return req.json();
}

async function getUserOrderInfo(userId){
    let req = await fetch(baseUrl + `/addToCart/${userId}.json`);

    return req.json();
}

async function createOrder(userId, orderInfo){
    let req = await fetch(baseUrl + `/addToCart/${userId}/orders.json`, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderInfo)
    })

    return req.json();
}

async function getOrderDetails(userId, orderId){
    let req = await fetch(baseUrl + `/addToCart/${userId}/orders/${orderId}.json`);
    return req.json();
}

export default {
    getAllProducts,
    getFilteredProducts,
    getFilteredProductsByTitle,
    isDiscounted,
    getCurrentItem,
    addToCartProduct,
    getCartProducts,
    updateCartProduct,
    getCartCurrentItem,
    deleteItem,
    savePersonalData,
    setPaymentMethod,
    getUserOrderInfo,
    createOrder,
    getOrderDetails

}