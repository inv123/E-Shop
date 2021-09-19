import productServices from "../../../../service/productServices.js";
import { sortFilterShopTemplate } from './sortFilterTemplate.js';

let shopInfo = {
    products: undefined
};



// Shop Page
async function getView(context) {
    let query = context.params;
    let sortParam = query.sort.split('=')[1];
    let start = query.priceRange.split('-')[0];
    let end = query.priceRange.split('-')[1];
    
    let filteredProducts = await productServices.getFilteredProducts(start, end);
    shopInfo.products = Object.values(filteredProducts);

    let boundSortHandler = sortHandler.bind(null, context);
    shopInfo.sortHandler = boundSortHandler;

    if(sortParam === 'latest'){
        shopInfo.products = shopInfo.products.sort((a,b) => a.dateAdded - b.dateAdded);
    }else if(sortParam === 'ascending'){
        shopInfo.products = shopInfo.products.sort((a,b) => a.price - b.price);
    }else if(sortParam === 'descending'){
        shopInfo.products = shopInfo.products.sort((a,b) => Number(a.price) - Number(b.price));
    }

    context.renderView(sortFilterShopTemplate(shopInfo))
}

async function sortHandler(context, e){
    let value = e.target.value;
    let query = context.params.priceRange;
    
    if(value ==='Select...'){
        return;
    }
    context.page.redirect(`/shop/price/${query}/sort=${value}`)
}

export default {
    getView
}