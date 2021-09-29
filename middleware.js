import {render} from './node_modules/lit-html/lit-html.js';

let navCont = undefined;
let viewContainer = undefined;
let modalCont = undefined;

function initialize(navElement,viewElemenet, modalElement){
    navCont = navElement;
    viewContainer = viewElemenet;
    modalCont= modalElement;
}

async function renderModal(template){
    render(template, modalCont)
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
    context.renderModal = renderModal;

    next();
}

export default {
    initialize, 
    renderNav,
    renderView,
    renderModal,
    decorateContext
}