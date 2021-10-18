import productServices from "../../../service/productServices.js";
import { searchShopTemplate } from "./searchShopTemplate.js";

let shopInfo = {
    products: undefined
};

// Shop Page
async function getView(context) {
    let query = context.params.query;    
    
    let searchedProducts = await productServices.getFilteredProductsByTitle(query); 
      
    shopInfo.products = Object.values(searchedProducts);
    context.renderView(searchShopTemplate(shopInfo));
}


export default {
    getView
}