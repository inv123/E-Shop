import productServices from "../../service/productServices.js";
import { checkoutTemplate } from "./checkoutTemplate.js";

let checkoutInfo = undefined;
let userId = localStorage.getItem('userId');
let shipping = 0;
let payment = undefined;

async function getView(context){
    let myProductsRes = await productServices.getCartProducts(userId);
    let myProducts = Object.values(myProductsRes);
    let subtotal = 0;
    let boundSelectPayment = selectPayment.bind(null, context)
    
    myProducts.forEach(x => {
        subtotal+=Number(x.price);
    })

    checkoutInfo = {
        subtotal,
        shipping,
        selectPayment: boundSelectPayment
    }
    
    context.renderView(checkoutTemplate(checkoutInfo))
}

async function selectPayment(context, e){
    let checkbox = e.currentTarget;
    let allCheckboxes = [...e.currentTarget.closest('.checkbox').querySelectorAll('input')];
    
    allCheckboxes.forEach(x => {
        x.removeAttribute('checked');
        x.previousSibling.classList.add('hidden-checkbox');
    })
    
    if(!checkbox.getAttribute('checked')){
        checkbox.setAttribute('checked', '');
        checkbox.previousSibling.classList.remove('hidden-checkbox')
    }else{
        checkbox.removeAttribute('checked');
        checkbox.previousSibling.classList.add('hidden-checkbox')
    }

    payment = checkbox.closest('label').textContent;
}

export default {
    getView
}