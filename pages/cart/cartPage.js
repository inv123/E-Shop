import productServices from "../../service/productServices.js";
import { cartTemplate } from "./cartTemplate.js";
import modal from '../../modal/modal.js';

let modalInfo = false;
let products = undefined;
let userId = localStorage.getItem('userId');

async function getView(context, next){

    let myProductsResponse = await productServices.getCartProducts(userId);
    let myProducts = undefined;
    if(myProductsResponse){
        myProducts = Object.values(myProductsResponse);
    }
    let boundPlusMinus = plusMinus.bind(null, context);
    let boundDeleteHandler = deleteItem.bind(null, context);
   
    products = myProducts;
    
    context.renderView(cartTemplate(products, boundPlusMinus, boundDeleteHandler));
    next();
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
    
        if(btn.dataset.type == 'plus'){
            count.stepUp();
        }else if(btn.dataset.type =='minus'){
            count.stepDown();
        }
       
        let totalPrice = count.value * Number(price);
        
        
        let updateCartProd = await productServices.updateCartProduct(userId, currentProductId, count.value, price, description, imageUrl, title, currentProductId, totalPrice);
    
        context.page.redirect(context.path)
    
    
    
}

async function deleteItem(context, e){
    let productId = e.target.closest('tr').dataset.id;
    let req = await productServices.deleteItem(userId, productId);

    
    if(req === null){
       
        
        let modalDom = e.target.closest('body').querySelector('.modal');
        let viewCont = e.target.closest('body').querySelector('.view-page');
        let navCont = e.target.closest('body').querySelector('header');
        let footer = e.target.closest('body').querySelector('footer')
        viewCont.style.filter = 'blur(4px)';
        navCont.style.filter = 'blur(4px)';
        footer.style.filter = 'blur(4px)';
        modalDom.style.display = 'block';
        context.params.modal = true;
        let modalEleShow = await modal.createModal(context);
           
        
       
        let modalFade = setTimeout(async function(){
            viewCont.style.filter = 'blur(0)';
            navCont.style.filter = 'blur(0)';
            footer.style.filter = 'blur(0)';

            modalDom.style.display = 'none';
            context.params.modal = false;
            let modalEleHide = await modal.createModal(context);
            if(context.params.modal == false){
                context.page.redirect(context.path);
            }
        },2000)

        if(context.params.modal == false){
            context.page.redirect(context.path);
        }
        
        
    }
   
   
    
}





export default {
    getView
}