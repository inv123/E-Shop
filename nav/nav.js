import productServices from "../service/productServices.js";
import { navTemplate } from "./navTemplate.js";

let userId = localStorage.getItem('userId');
let token = localStorage.getItem('authToken');
let navInfo = {};

async function getNav(context, next){
    let boundSearch = search.bind(null, context);
    let itemsInCartReq = await productServices.getCartProducts(userId);
    let itemsInCart = undefined;
    if(itemsInCartReq){
        itemsInCart = Object.values(itemsInCartReq);
        
    }
    let itemCount = 0;
    let totalPrice = 0;
    let boundDeleteItem = deleteItem.bind(null, context);

    if(itemsInCart){
        itemsInCart.forEach(x => {
            itemCount+=Number(x.count);
            totalPrice+=Number(x.totalPrice)
        })
    }

    navInfo = {
        search: boundSearch,
        items: itemsInCart,
        itemCount,
        totalPrice
        
    }
    
    context.renderNav(navTemplate(navInfo, boundDeleteItem));
    next();
}

async function search(context, e){
    e.preventDefault();

    let formData = new FormData(e.target);
    let searchTerm = formData.get('search').trim();

    context.page.redirect(`/search/${searchTerm}`)
}

async function deleteItem(context, e){
    let productId = e.target.closest('li').dataset.id;
    let req = await productServices.deleteItem(userId, productId);

    context.page.redirect(context.path)
}

export default {
    getNav
}

