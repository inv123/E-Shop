import productServices from "../../service/productServices.js";
import { cartTemplate } from "./cartTemplate.js";

let products = undefined;
let userId = localStorage.getItem('userId');
let token = localStorage.getItem('authToken');

async function getView(context){

    let myProductsResponse = await productServices.getCartProducts(userId);
    let myProducts = Object.values(myProductsResponse);
    let boundPlusMinus = plusMinus.bind(null, context);
   
    products = myProducts;
    console.log(products);
    context.renderView(cartTemplate(products, boundPlusMinus))
}

async function plusMinus(context, e){
    let btn = e.currentTarget;
    let currentProductId = e.target.closest('tr').dataset.id;
    let currentProduct = await productServices.getCartCurrentItem(userId, currentProductId);

    let count = e.target.closest('.qty').querySelector('input');
    let totalPriceElement = e.target.closest('tr').querySelector('.total-amount span');
   
    let description = currentProduct.description;
    let id = currentProduct.id;
    let imageUrl = currentProduct.imageUrl;
    let price = currentProduct.price;
    
    let title = currentProduct.title;

    if(btn.dataset.type = 'plus'){
        count.stepUp();
    }else if(btn.dataset.type ='minus'){
        count.stepDown();
    }
   
    console.log(btn.dataset.type);
    let totalPrice = count.value * Number(price);
    
    
    let updateCartProd = await productServices.updateCartProduct(userId, currentProductId, count.value, price, description, imageUrl, title, currentProductId, totalPrice);

    context.page.redirect(context.path)
    
}

export default {
    getView
}