import productServices from "../../service/productServices.js";
import {shopTemplate } from "./shopTemplate.js";

async function getView(context){
    
    let products = await productServices.getAllProducts();
    
    if(context.querystring){
        let searchedTitle = decodeURIComponent(context.querystring).split('=')[1];

        context.renderView(shopTemplate(Object.values(products).filter(x => x.title === searchedTitle)))
        
        
    }else{
        context.renderView(shopTemplate(Object.values(products)))
    }

    
}
export default {
    getView
}