import productServices from "../../service/productServices.js";
import { productsTemplate } from "./productsTemplate.js";

async function getView(context){
    
    let products = await productServices.getAllProducts();
    console.log(products);
    console.log(context);
    if(context.querystring){
        let searchedTitle = decodeURIComponent(context.querystring).split('=')[1];
        context.renderView(productsTemplate(Object.values(products).filter(x => x.title === searchedTitle)))
    }else{
        context.renderView(productsTemplate(Object.values(products)))
    }

    
}
export default {
    getView
}