
import productServices from '../../../../service/productServices.js';
import { sortMainShopTemplate } from './sortMainShopTemplate.js';

let shopInfo = {
    products: undefined
};



// Shop Page
async function getView(context) {
    let query = context.params;
    let sortParam = query.sort.split('=')[1];
    let allProducts = await productServices.getAllProducts();
    let boundSortHandler = sortHandler.bind(null, context);

    shopInfo.sortHandler = boundSortHandler;
    shopInfo.products = Object.values(allProducts);
    
    if(sortParam === 'ascending'){
        shopInfo.products = shopInfo.products.sort((a,b) => a.price - b.price)
    }else if(sortParam === 'descending'){
        shopInfo.products = shopInfo.products.sort((a,b) => b.price - a.price)
    }else if(sortParam === 'latest'){
        shopInfo.products.sort((a,b) => Number(a.dateAdded) - Number(b.dateAdded))
    }

    context.renderView(sortMainShopTemplate(shopInfo))
}

async function sortHandler(context, e){
    let sort = e.target.value;
    if(sort === 'Select...'){
        return;
    }
    context.page.redirect(`/shop/sort=${sort}`)
}

export default {
    getView
}