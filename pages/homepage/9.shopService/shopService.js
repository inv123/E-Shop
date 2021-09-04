import { shopServiceTemplate } from "./shopServiceTemplate.js";

async function getShopService(context, next){
    context.renderShopService(shopServiceTemplate());
    next();
}

export default {
    getShopService
}