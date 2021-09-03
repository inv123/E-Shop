import { onSaleBestSaleTemplate } from "./onSaleBestSaleTemplate.js";

async function getOnSaleBestSale(context, next){
    context.renderonSaleBestSaleTopView(onSaleBestSaleTemplate());
    next()
}

export default {
    getOnSaleBestSale
}