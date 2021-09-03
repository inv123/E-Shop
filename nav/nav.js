import { navTemplate } from "./navTemplate.js";

async function getNav(context){
    context.renderNav(navTemplate());
}

export default {
    getNav
}