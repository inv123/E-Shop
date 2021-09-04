import { loginTemaplte } from "./loginTemplate.js";

async function getLoginPage(context){
    context.renderLogin(loginTemaplte())
}

export default{ 
    getLoginPage
}