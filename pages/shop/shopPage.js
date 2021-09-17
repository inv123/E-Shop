import productServices from "../../service/productServices.js";
import { shopTemplate } from "./shopTemplate.js";

let shopInfo = {
    products: undefined
};
let checkboxIndex = undefined;


// Shop Page
async function getView(context) {
    let path = context.path;
    let boundFilterHandler = filterHandler.bind(null, context);
  
    shopInfo.filterHandler = boundFilterHandler;
    shopInfo.checkboxIndex = checkboxIndex;
    shopInfo.path = path;

    if(context.path === '/shop'){
        let allProducts = await productServices.getAllProducts();
        shopInfo.products = Object.values(allProducts);
    }else if(context.path.includes('/shop?search=price%3D1-50')){
        let firstFilterProd = await productServices.getFilteredProducts(undefined, 50);
        shopInfo.products = Object.values(firstFilterProd);
        
    }else if(context.path.includes('/shop?search=price%3D51-100')){
        let secondFilterProd = await productServices.getFilteredProducts(51, 100);
        shopInfo.products = Object.values(secondFilterProd)
    }else if(context.path.includes('/shop?search=price%3D101-199')){
        let thirdFilterProd = await productServices.getFilteredProducts(101, 199);
        shopInfo.products = Object.values(thirdFilterProd);
    }
   
    context.renderView(shopTemplate(shopInfo));
}


async function filterHandler(context, e){
   let checkbox = e.currentTarget.querySelector('input');
   let allCheckboxes =  [...e.currentTarget.closest('.price-box').querySelectorAll('input')]
   
   if(checkbox.checked){
       checkbox.checked = false;
       context.page.redirect('/shop')
   }else{
        allCheckboxes.forEach(x => x.checked = false);
        checkbox.checked = true;
      
   }
    
}



export default {
    getView
}