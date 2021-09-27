import productServices from "../../../service/productServices.js";
import { homeTemplate } from "./homeTemplate.js";


async function getView(context){
    let firstSecReq = await productServices.isDiscounted();
    let firstSecProd = Object.values(firstSecReq)[0];

    let secSecReq = await 
    context.renderView(homeTemplate(firstSecProd));
}

export default {
    getView
}