import productServices from "../service/productServices.js";
import { navTemplate } from "./navTemplate.js";

let navSearch = undefined;
let userId = localStorage.getItem('userId');

async function search(context, e){
    e.preventDefault()
        let formData = new FormData(e.target);
        let searchParams = formData.get('search');
        
        if(searchParams.trim() !== ''){
            let query = encodeURIComponent(searchParams)
            context.page.redirect(`/search/${query}`)
        }        
}


async function getNav(context, next){
    let boundSearch = search.bind(null, context);
    let allProducts = await productServices.getAllProducts();
    let myProductsRes = await productServices.getCartProducts(userId);
    let currentTotalCartItems = 0;
    let total = 0;
    let currentItems = Object.values(myProductsRes).length;
    let myProducts = Object.values(myProductsRes);
    Object.values(myProductsRes).forEach(x => {
        currentTotalCartItems+=Number(x.count);
        total+=Number(x.count) * Number(x.price);
    });
    
    let navKids = Object.values(allProducts).find(x => x.navKids === true);
    let navMan = Object.values(allProducts).find(x => x.navMan === true);
    let navWoman = Object.values(allProducts).find(x => x.navWoman === true);

    let boundDeleteItem = deleteItem.bind(null, context);
    let navInfo = {
        currentPage: context.pathname,
        currentTotalCartItems,
        currentItems,
        myProducts,
        total
    }

    navSearch = {
        search: boundSearch
    }

   

    context.renderNav(navTemplate(navInfo, navSearch, navKids, navMan, navWoman, boundDeleteItem));
    next();
}

async function deleteItem(context, e){
    let productId = e.target.closest('li').dataset.id;
    let req = await productServices.deleteItem(userId, productId);

    context.page.redirect(context.path)
}

export default {
    getNav
}