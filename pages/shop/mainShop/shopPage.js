import productServices from "../../../service/productServices.js";
import { shopTemplate } from "./shopTemplate.js";

let shopInfo = {
    products: undefined
};



// Shop Page
async function getView(context) {
    let allProducts = await productServices.getAllProducts();
    shopInfo.products = Object.values(allProducts);

    let boundSortHandler = sortHandler.bind(null, context);
    shopInfo.sortHandler = boundSortHandler;

    context.renderView(shopTemplate(shopInfo));
}

async function sortHandler(context, e){
    let sort = e.target.value;
    if(sort === 'Select...'){
        return;
    }
    context.page.redirect(`/shop/${sort}`)
}



export default {
    getView
}