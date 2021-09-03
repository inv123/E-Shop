import {render} from './node_modules/lit-html/lit-html.js';

let navCont = undefined;
let sideBannerCont = undefined;
let smallBannerSection = undefined;
let trendingItemContainer = undefined;
let mediumBannerContainer = undefined;
let hotItemContainer = undefined;
let yellowBannerContainer = undefined;
let onSaleBestSaleTopViewContainer = undefined;
let blogSectionContainer = undefined;
let shopServiceContainer = undefined;
let newsLetterContainer = undefined;
let modal = undefined;

function initialize(navElement, sideBannerElement, smallBannerElement, trendingItemElement, mediumBannerElement, hotItemElement, yellowBannerElement,onSaleBestSaleTopViewElement, blogElement, shopServiceElement, newsLetterElement, modalElement){
    navCont = navElement;
    sideBannerCont = sideBannerElement;
    smallBannerSection = smallBannerElement;
    trendingItemContainer = trendingItemElement;
    mediumBannerContainer = mediumBannerElement;
    hotItemContainer = hotItemElement;
    yellowBannerContainer = yellowBannerElement;
    onSaleBestSaleTopViewContainer = onSaleBestSaleTopViewElement;
    blogSectionContainer = blogElement;
    shopServiceContainer = shopServiceElement;
    newsLetterContainer = newsLetterElement;
    modal = modalElement;
}

async function renderModal(template){
    render(template, modal)
}

async function renderNewsLetter(template){
    render(template, newsLetterContainer)
}

async function renderShopService(template){
    render(template, shopServiceContainer)
}

async function renderBlog(template){
    render(template, blogSectionContainer)
}

async function renderonSaleBestSaleTopView(template){
    render(template, onSaleBestSaleTopViewContainer)
}

async function renderYellowItem(template){
    render(template, yellowBannerContainer)
}

async function renderhotItem(template){
    render(template, hotItemContainer)
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
    render(template, sideBannerCont)
}

async function renderNav(template){
    render(template, navCont);
}



function decorateContext(context, next){
    context.renderNav = renderNav;

    context.renderSideBanner = renderSideBanner;
    context.renderSmallBanner = renderSmallBanner;
    context.renderTrendingItem = renderTrendingItem;
    context.renderMediumBanner = renderMediumBanner;
    context.renderhotItem = renderhotItem;
    context.renderYellowItem = renderYellowItem;
    context.renderonSaleBestSaleTopView = renderonSaleBestSaleTopView;
    context.renderBlog = renderBlog;
    context.renderShopService = renderShopService;
    context.renderNewsLetter = renderNewsLetter;
    context.renderModal = renderModal;

    next();
}

export default {
    initialize, 
    renderNav,
    renderSideBanner,
    renderSmallBanner,
    renderTrendingItem,
    renderMediumBanner,
    renderhotItem,
    renderYellowItem,
    renderonSaleBestSaleTopView,
    renderBlog,
    renderShopService,
    renderNewsLetter,
    renderModal,
    decorateContext
}