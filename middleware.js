import {render} from './node_modules/lit-html/lit-html.js';

let navCont = undefined;
let viewContainer = undefined;


function initialize(navElement,viewElemenet){
    navCont = navElement;
    viewContainer = viewElemenet;
   
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
  

    next();
}

export default {
    initialize, 
    renderNav,
    renderView,
    decorateContext
}