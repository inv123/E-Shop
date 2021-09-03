import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';
import nav from './nav/nav.js';
import sideBannerElement from './pages/homepage/sideBanner/sideBannerElement.js';
import smallBanner from './pages/homepage/smallBanner/smallBanner.js';
import trendingItem from './pages/homepage/trendingItem/trendingItem.js';
import mediumBanner from './pages/homepage/mediumBanner/mediumBanner.js'
import hotItems from './pages/homepage/hotItems/hotItems.js';
import yellowBanner from './pages/homepage/yellowBanner/yellowBanner.js'
import onSaleBestSale from './pages/homepage/onSaleBestSale/onSaleBestSale.js';
import blogSection from './pages/homepage/blogSection/blogSection.js';
import shopService from './pages/homepage/shopService/shopService.js';
import newsLetter from './pages/homepage/newsLetter/newsLetter.js';

let navCont = document.querySelector('header');
let sideBannerConnt = document.querySelector('section > .hero-slider');
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

page('/', middleware.decorateContext, nav.getNav, sideBannerElement.getSideBanner, smallBanner.getSmallBanner, trendingItem.getTrendingItem, mediumBanner.getMediumBanner, hotItems.getHotItems, yellowBanner.getYellowBanner, onSaleBestSale.getOnSaleBestSale, blogSection.getBlogSection, shopService.getShopService, newsLetter.getNewsLetter);

page.start();

