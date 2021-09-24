import productServices from "../../service/productServices.js";
import { checkoutTemplate } from "./checkoutTemplate.js";

let checkoutInfo = undefined;
let userId = localStorage.getItem('userId');
let shipping = 0;
let payment = undefined;
let personalDataForm = {};

async function getView(context){
    let myProductsRes = await productServices.getCartProducts(userId);
    let myProducts = Object.values(myProductsRes);
    let subtotal = 0;
    let boundSelectPayment = selectPayment.bind(null, context);
    let boundSavePersonalData = savePersonalData.bind(null, context);
    let boundProceedToCheckout = proceedToCheckout.bind(null, context);

    
    myProducts.forEach(x => {
        subtotal+=Number(x.price);
    })

    checkoutInfo = {
        subtotal,
        shipping,
        selectPayment: boundSelectPayment,
        savePersonalData: boundSavePersonalData,
        proceedToCheckout: boundProceedToCheckout
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
    personalDataForm.payment = payment;

    let req = await productServices.setPaymentMethod(userId, personalDataForm)
}

async function savePersonalData(context, e){
    let formData = new FormData(e.currentTarget);
    let name = formData.get('name');
    let lastName = formData.get('lastName');
    let email = formData.get('email');
    let phone = formData.get('phone');
    let country = formData.get('country');
    let state = formData.get('state');
    let mainAddress = formData.get('address');
    let secondAddress = formData.get('second-address');
    let postCode = formData.get('post-code');

    personalDataForm = {
        name,
        lastName,
        email,
        phone,
        country,
        state,
        mainAddress,
        secondAddress,
        postCode
    }
    let req = await productServices.savePersonalData(userId, personalDataForm);
}

async function proceedToCheckout(context, e){
    let infoReq = await productServices.getUserOrderInfo(userId);
    let customerOrderInfo = {};

    customerOrderInfo.items = infoReq.items;
    customerOrderInfo.personalData = infoReq.personalData;
    
    console.log(infoReq);
    console.log(customerOrderInfo);
    let orderRequest = await productServices.createOrder(userId, customerOrderInfo)
    context.page.redirect(`/order/confirm/${orderRequest.name}`)
}

export default {
    getView
}