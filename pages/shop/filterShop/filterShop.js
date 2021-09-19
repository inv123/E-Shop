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

    let boundSortHandler = sortHandler.bind(null, context);
    shopInfo.sortHandler = boundSortHandler;


    context.renderView(filterShopTemplate(shopInfo))
}

 function sortHandler(context, e){
    let pathname = context.pathname
    let value = e.target.value;
    console.log(context);
    
    if(value === 'Select...'){
        return;
    }
    context.page.redirect(`${pathname}/sort=${value}`)
}

export default {
    getView
}