import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';

let navCont = document.querySelector('header');
let sideBannerConnt = document.querySelector('.hero-slider');
let smallBannerSection = document.querySelector('.small-banner');
let trendingItemContainer = document.querySelector('.product-area');
let mediumBannerContainer = document.querySelector('.medium-banner');
let hotItemContainer = document.querySelector('.most-popular');
let yellowBannerContainer = document.querySelector('.free-version-banner');
let onSaleBestSaleTopViewContainer = document.querySelector('.shop-home-list');
let blogSectionContainer = document.querySelector('.shop-blog');
let shopServiceContainer = document.querySelector('.shop-services');
let newsLetterContainer = document.querySelector('.shop-newsletter');
let modal = document.querySelector('#exampleModal');

middleware.initialize(navCont, sideBannerConnt,smallBannerSection, trendingItemContainer, mediumBannerContainer,hotItemContainer, yellowBannerContainer,onSaleBestSaleTopViewContainer,blogSectionContainer, shopServiceContainer, newsLetterContainer, modal);

page('/', middleware.decorateContext)

page.start();

