import {render} from './node_modules/lit-html/lit-html.js';

let navCont = undefined;
let viewCont = undefined;

function initialize(navElement, viewElement){
    navCont = navElement;
    viewCont = viewElement;
}

async function renderNav(template){
    render(template, navCont);
}

async function renderView(template){
    render(template, viewCont);
}

function decorateContext(context, next){
    context.renderNav = renderNav;
    context.renderView = renderView;

    next();
}

export default {
    initialize, 
    renderNav,
    renderView,
    decorateContext
}