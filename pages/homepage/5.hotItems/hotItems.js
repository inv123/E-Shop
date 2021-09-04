import { hotItemsTemplate } from "./hotItemsTemplate.js";

async function getHotItems(context, next){
    context.renderhotItem(hotItemsTemplate());
    next();
}

export default {
    getHotItems
}