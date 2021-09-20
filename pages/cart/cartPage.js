import productServices from "../../service/productServices.js";
import { cartTemplate } from "./cartTemplate.js";

let products = undefined;

async function getView(context){

    let userId = localStorage.getItem('userId');
    let myProductsResponse = await productServices.getCartProducts(userId);
    let myProducts = Object.values(myProductsResponse);

    let boundTotalPrice = totalPrice.bind(null, context);
    myProducts.totalPrice = boundTotalPrice;

    products = myProducts;

    console.log(myProducts);
    context.renderView(cartTemplate(products))
}

async function totalPrice(context){
    console.log(context);
}

export default {
    getView
}