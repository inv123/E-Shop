import productServices from "../../service/productServices.js";
import { shopTemplate } from "./shopTemplate.js";

let shopInfo = {} ;
let products = undefined;

async function sortHandling(context, e){
    let pathname = context.path;
    if(e.target.value === 'latest'){
        context.page.redirect(pathname + '/sort=items%3Dlatest')
    }
}

async function getView(context) {

    let allProducts = await productServices.getAllProducts();
    products = Object.values(allProducts);
    let searchKey = decodeURIComponent(context.path).split('=')[1];
    let value = decodeURIComponent(context.path).split('=')[2];
    let boundSortHandling = sortHandling.bind(null, context);
    console.log(context);
    
    // if(context.path.includes('/sort')){
    //     let sort = context.path.split('/sort=')[1];
    //     let sortKey = decodeURIComponent(sort).split('=')[0];
    //     let sortValue = decodeURIComponent(sort).split('=')[1];

    //     if(sortValue === 'latest'){
    //         context.renderView(shopTemplate(Object.values(products).filter(x => x.price <= 50.00), shopInfo))
    //     }
    //     console.log(sortValue);
    // }

    shopInfo = {
        products,
        sortHandling: boundSortHandling
        
    };
    
  
    if (searchKey) {

        if (searchKey === 'price') {
            if (value === '1-50') {
                let prodUpto50 = await productServices.getProductsUpTo50();
                shopInfo.products = Object.values(prodUpto50);
                context.renderView(shopTemplate(shopInfo));
            } else if (value === '51-100') {
                let prodUpto100 = await productServices.getProductsUpTo100();
                shopInfo.products = Object.values(prodUpto100);
                context.renderView(shopTemplate( shopInfo));
            } else if (value === '101-199') {
                let prodUpto199 = await productServices.getProductsUpTo199();
                shopInfo.products = Object.values(prodUpto199);
                context.renderView(shopTemplate( shopInfo));
            }
        } else {
            products = Object.values(allProducts).filter(x => x.title === searchKey);
            context.renderView(shopTemplate( shopInfo))
        }


    } else {
        products = Object.values(allProducts)
        context.renderView(shopTemplate( shopInfo))
    }

}
export default {
    getView
}