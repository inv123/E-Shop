import productServices from "../../service/productServices.js";
import {
    shopTemplate
} from "./shopTemplate.js";

async function getView(context) {

    let products = await productServices.getAllProducts();
    let key = decodeURIComponent(context.path).split('=')[1];
    let value = decodeURIComponent(context.path).split('=')[2];
  
    if (key) {

        if (key === 'price') {
            if (value === '1-50') {
                context.renderView(shopTemplate(Object.values(products).filter(x => x.price <= 50.00)));
            } else if (value === '51-100') {
                context.renderView(shopTemplate(Object.values(products).filter(x => x.price > 50 && x.price <= 100)));
            } else if (value === '101-199') {
                context.renderView(shopTemplate(Object.values(products).filter(x => x.price > 100 && x.price <= 199)));
            }
        } else {
            context.renderView(shopTemplate(Object.values(products).filter(x => x.title === key)))
        }


    } else {
        context.renderView(shopTemplate(Object.values(products)))
    }

}
export default {
    getView
}