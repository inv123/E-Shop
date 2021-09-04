import {render} from './node_modules/lit-html/lit-html.js';

let navCont = undefined;
let loginViewCont = undefined;
let viewContainer = undefined;


function initialize(navElement,viewElemenet,   getLoginElement){
    navCont = navElement;
    viewContainer = viewElemenet;
    loginViewCont = getLoginElement;
}

async function renderLogin(template){
    render(template, loginViewCont)
}

async function renderView(template){
    render(template, viewContainer)
}


async function renderNav(template){
    render(template, navCont);
}



function decorateContext(context, next){
    context.renderNav = renderNav;
   context.renderView = renderView;
    context.renderLogin = renderLogin;

    next();
}

export default {
    initialize, 
    renderNav,
    renderView,
    renderLogin,
    decorateContext
}