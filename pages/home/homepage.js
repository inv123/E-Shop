import productServices from "../../service/productServices.js";
import { homepageTemplate } from "./homepageTemplate.js";

let homepageInfo = {
    currentTab: 'man'
};
let userId = localStorage.getItem('userId');




async function getView(context){
    //FirstSection
    let discountedProductRequest = await productServices.isDiscounted();
    homepageInfo.isDiscounted = Object.values(discountedProductRequest)[0];

    //Third Section
    let boundSetActiveTab = setActiveTab.bind(null, context);
    homepageInfo.setActiveTab = boundSetActiveTab;

    let manProductsReq = await productServices.getManProducts();
    if(manProductsReq){
        let manProducts = Object.values(manProductsReq);
        homepageInfo.manProducts = manProducts;
    }

    let womanProductsReq = await productServices.getWomanProducts();
    if(womanProductsReq){
        let womanProducts = Object.values(womanProductsReq);
        homepageInfo.womanProducts = womanProducts;
        
    }

    let kidsProductsReq = await productServices.getKidsProducts();
    if(kidsProductsReq){
        let kidsProducts = Object.values(kidsProductsReq);
        homepageInfo.kidsProducts = kidsProducts;
        
    }

    let accessoriesProductsReq = await productServices.getAccessoriesProducts();
    if(accessoriesProductsReq){
        let accessoriesProducts = Object.values(accessoriesProductsReq);
        homepageInfo.accessoriesProducts = accessoriesProducts;
        
    }

    let essentialsProductsReq = await productServices.getEssentialProducts();
    if(essentialsProductsReq){
        let essentialsProducts = Object.values(essentialsProductsReq);
        homepageInfo.essentialsProducts = essentialsProducts;
    }

    let boundAddToCart = addCart.bind(null, context);

    
    context.renderView(homepageTemplate(homepageInfo, boundAddToCart));
}

//Third Seciton

async function setActiveTab(context, e){
    
    if(e.target.dataset.toggle === 'tab'){
        let hash = e.target.href.split('#')[1];
        homepageInfo.currentTab = hash;
    }
}

async function addCart(context, e){
    let dataElement = e.target.closest('.single-product').querySelector('div');
    let id = dataElement.dataset.id;
    let imageUrl = dataElement.dataset.image;
    let description = dataElement.dataset.description;
    let price = Number(dataElement.dataset.price);
    let title = dataElement.dataset.title;
    let count = 1;
    let totalPrice = price;

    let req = await productServices.addToCartProduct(userId, count, price, description, imageUrl, title, id, totalPrice)
    context.page.redirect(context.path)
}






export default {
    getView
}