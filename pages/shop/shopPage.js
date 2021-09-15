import productServices from "../../service/productServices.js";
import {shopTemplate } from "./shopTemplate.js";

async function getView(context){
    
    let products = await productServices.getAllProducts();
    
    if(context.querystring){
        
        let key = decodeURIComponent(context.path).split('=')[1];
        let value = decodeURIComponent(context.path).split('=')[2];

        console.log(key);
        console.log(value);

        if(key === 'price'){
            if(value === '1-50'){
                context.renderView(shopTemplate(Object.values(products).filter(x => x[key] <= 50)));
            }else if(value === '51-100'){
                context.renderView(shopTemplate(Object.values(products).filter(x => x[key] > 50 && x[key] <= 100)));
            }else if(value === '101-199'){
                context.renderView(shopTemplate(Object.values(products).filter(x => x[key] > 100 && x[key] <= 199)));
            }
        }

        context.renderView(shopTemplate(Object.values(products).filter(x => x.title === key)))
    }else{
        context.renderView(shopTemplate(Object.values(products)))
    }

    console.log(context);
    
}
export default {
    getView
}