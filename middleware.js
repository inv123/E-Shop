import {render} from './node_modules/lit-html/lit-html.js';

let navCont = undefined;
let viewCont = undefined;
let sideBannerConnt = undefined;
let smallBannerSection = undefined;
let trendingItemContainer = undefined;
let mediumBannerContainer = undefined;

function initialize(navElement, viewElement, sideBannerElement, smallBannerElement, trendingItemElement, mediumBannerElement){
    navCont = navElement;
    viewCont = viewElement;
    sideBannerConnt = sideBannerElement;
    smallBannerSection = smallBannerElement;
    trendingItemContainer = trendingItemElement;
    mediumBannerContainer = mediumBannerElement;
}

async function renderMediumBanner(template){
    render(template, mediumBannerContainer)
}

async function renderTrendingItem(template){
    render(template, trendingItemContainer)
}

async function renderSmallBanner(template){
    render(template, smallBannerSection)
}

async function renderSideBanner(template){
    render(template, sideBannerConnt)
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
    context.renderSideBanner = renderSideBanner;
    context.renderSmallBanner = renderSmallBanner;
    context.renderTrendingItem = renderTrendingItem;
    context.renderMediumBanner = renderMediumBanner;

    next();
}

export default {
    initialize, 
    renderNav,
    renderView,
    renderSideBanner,
    renderSmallBanner,
    renderTrendingItem,
    renderMediumBanner,
    decorateContext
}