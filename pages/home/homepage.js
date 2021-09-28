import productServices from "../../service/productServices.js";
import { homepageTemplate } from "./homepageTemplate.js";

let homepageInfo = {
    currentTab: 'man'
};

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
        console.log(homepageInfo.womanProducts);
    }

    let kidsProductsReq = await productServices.getKidsProducts();
    if(kidsProductsReq){
        let kidsProducts = Object.values(kidsProductsReq);
        homepageInfo.kidsProducts = kidsProducts;
        console.log(homepageInfo.kidsProducts);
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
    
    
    context.renderView(homepageTemplate(homepageInfo));
}

//Third Seciton

async function setActiveTab(context, e){
    
    if(e.target.dataset.toggle === 'tab'){
        let hash = e.target.href.split('#')[1]
       homepageInfo.currentTab = hash;
       context.renderView(homepageTemplate(homepageInfo))
    }
}




export default {
    getView
}