import productServices from "../../service/productServices.js";
import { shopTemplate } from "./shopTemplate.js";

let shopInfo = {};
let products = undefined;

// Shop Page
async function getView(context) {
    let allProducts = await productServices.getAllProducts();
    products = Object.values(allProducts);
    let boundFilterHandler = filterHandler.bind(null, context)

    shopInfo = {
        products,
        filterHandler: boundFilterHandler
    }
    
    context.renderView(shopTemplate(shopInfo))
    
}


// Filter Price
async function filterHandler(context, e){
    e.preventDefault();

    let start = e.target.dataset.start;
    let end = e.target.dataset.end;
    let filterProdObj = await productServices.getFilteredProducts(start, end);
    let filterProd = Object.values(filterProdObj);
    
    shopInfo.products = filterProd;

    context.renderView(shopTemplate(shopInfo))
}




export default {
    getView
}