import productServices from "../../../service/productServices.js";
import { shopTemplate } from "./shopTemplate.js";

let shopInfo = {
    products: undefined
};



// Shop Page
async function getView(context) {
    let allProducts = await productServices.getAllProducts();
    shopInfo.products = Object.values(allProducts)

    context.renderView(shopTemplate(shopInfo));
}




export default {
    getView
}