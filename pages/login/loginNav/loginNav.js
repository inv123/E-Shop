import { loginNavTemplate } from "./loginNavTemplate.js";

async function getLoginNav(context, next){
    context.renderNav(loginNavTemplate());
    next()
}

export default {
    getLoginNav
}