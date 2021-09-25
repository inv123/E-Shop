import productServices from "../../../service/productServices.js";
import { firstEleTemplate } from "./firstSectionTemplate.js";

async function getView(context, next){
    let productReq = await productServices.isDiscounted();
    let product = Object.values(productReq)[0]
    console.log(product);
    context.renderView(firstEleTemplate(product))
    next();
}

export default {
    getView
}