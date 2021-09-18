import productServices from "../../../service/productServices.js";
import { filterShopTemplate } from './filterShopTemplate.js';

let shopInfo = {
    products: undefined
};



// Shop Page
async function getView(context) {
    let query = context.params;
   
    let start = query.priceRange.split('-')[0];
    let end = query.priceRange.split('-')[1];

    let filterProducts = await productServices.getFilteredProducts(start, end);
    shopInfo.products = Object.values(filterProducts);

   

    context.renderView(filterShopTemplate(shopInfo))
}

async function sortHandler(context, e){
    let value = e.target.value;
    console.log(context);
    console.log(e.target.value);
    context.page.redirect(`${context.path}/sort=${value}`)
}

export default {
    getView
}