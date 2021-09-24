import { confirmTemplate } from "./confirmOrderTemplate.js";

async function getView(context){
    context.renderView(confirmTemplate())
}

export default {
    getView
}