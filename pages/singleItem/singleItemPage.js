import productServices from "../../service/productServices.js";
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

function plusMinus(context, e){
    e.preventDefault();

    let sign = e.target.textContent;
    let inputField = e.target.closest('.quantity').querySelector('input');
   
    if(sign === '-'){
        inputField.stepDown();
    }else {
        inputField.stepUp();
    }
}

 function addToCart(context, e){

    e.preventDefault();

    let formData = new FormData(e.target)
    let counter = formData.get('count')
    console.log(counter);
    
    context.renderView(singleItemTemplate(itemInfo))
    
}

export default{
    getView
}