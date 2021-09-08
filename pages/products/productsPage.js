import productServices from "../../service/productServices.js";
import { productsTemplate } from "./productsTemplate.js";

async function getView(context){
    
    let products = await productServices.getAllProducts();
    let sidebanner = Object.values(products).find(x => x.sidebannerdiscount === true);
    console.log(products);
    console.log(context);
    if(context.querystring){
        let searchedTitle = decodeURIComponent(context.querystring).split('=')[1];
        context.renderView(productsTemplate(Object.values(products).filter(x => x.title === searchedTitle), sidebanner))
    }else{
        context.renderView(productsTemplate(Object.values(products), sidebanner))
    }

    
}
export default {
    getView
}