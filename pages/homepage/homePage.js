import { homePageTemplate } from "./homePageTemplate.js";

async function getView(context){
    context.renderView(homePageTemplate())
}

export default {
    getView
}