import productServices from "../../../service/productServices.js";
import { singleItemTemplate } from "./singleItemTemplate.js";

let itemInfo = {};

async function getView(context){
    let id = context.params.id;
    
    let currentItem = await productServices.getCurrentItem(id);
    itemInfo.currentItem = Object.values(currentItem)[0];

    let boundPlusMinus = plusMinus.bind(null, context);
    itemInfo.plusMinus = boundPlusMinus;

    let boundAddToCart = addToCart.bind(null, context);
    itemInfo.addToCart = boundAddToCart;

   
    context.renderView(singleItemTemplate(itemInfo));

}

async function plusMinus(context, e){
    e.preventDefault();
    
    let sign = e.target.textContent;
    let inputField = e.target.closest('.quantity').querySelector('input');
    
    if(sign === '-'){
        inputField.stepDown();
    }else {
        inputField.stepUp();
    }

    
}

async function addToCart(context, e){
    e.preventDefault();

    let userId = localStorage.getItem('userId');
    let productId = context.params.id;
    let formData = new FormData(e.target);
    let counter = formData.get('count');
    let price = formData.get('price');

    let currentProductInfoResponse = await productServices.getCurrentItem(productId);
    let currentProductInfo = Object.values(currentProductInfoResponse)[0];
   
    let description = currentProductInfo.description;
    let imageUrl = currentProductInfo.imageUrl;
    let title = currentProductInfo.title;
    let totalPrice = Number(counter) * Number(price);
    console.log(totalPrice);
    
    
    let req = await productServices.addToCartProduct(userId, productId, counter, price, description, imageUrl, title, productId, totalPrice);
    console.log(req);
    
    context.renderView(singleItemTemplate(itemInfo))
    
}

export default{
    getView
}