import { checkoutTemplate } from "./checkoutTemplate.js";

async function getView(context){
    context.renderView(checkoutTemplate())
}

export default {
    getView
}