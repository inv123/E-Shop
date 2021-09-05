import productServices from "../../service/productServices.js";
import { homePageTemplate } from "./homePageTemplate.js";

async function getView(context){
    let allProducts = await productServices.getAllProducts();
    console.log(allProducts);
    let item = Object.values(allProducts).find(x => x.category === 'Man');
    
    context.renderView(homePageTemplate(item))
}

export default {
    getView
}