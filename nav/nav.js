import { navTemplate } from "./navTemplate.js";

async function getNav(context, next){
    context.renderNav(navTemplate());
    next();
}

export default {
    getNav
}