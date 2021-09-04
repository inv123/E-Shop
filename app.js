import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';
import nav from './nav/nav.js';
import sideBannerElement from './pages/homepage/1.sideBanner/sideBannerElement.js';
import smallBanner from './pages/homepage/2.smallBanner/smallBanner.js';
import trendingItem from './pages/homepage/3.trendingItem/trendingItem.js';
import mediumBanner from './pages/homepage/4.mediumBanner/mediumBanner.js'
import hotItems from './pages/homepage/5.hotItems/hotItems.js';
import yellowBanner from './pages/homepage/6.yellowBanner/yellowBanner.js'
import onSaleBestSale from './pages/homepage/7.onSaleBestSale/onSaleBestSale.js';
import blogSection from './pages/homepage/8.blogSection/blogSection.js';
import shopService from './pages/homepage/9.shopService/shopService.js';
import newsLetter from './pages/homepage/10.newsLetter/newsLetter.js';
import modal from './modal/modal.js'

let navCont = document.querySelector('header');
let sideBannerConnt = document.querySelector('.hero-slider');
let smallBannerSection = document.querySelector('.small-banner');
let trendingItemContainer = document.querySelector('.product-area');
let mediumBannerContainer = document.querySelector('.midium-banner');
let hotItemContainer = document.querySelector('.most-popular');
let yellowBannerContainer = document.querySelector('.free-version-banner');
let onSaleBestSaleTopViewContainer = document.querySelector('.shop-home-list');
let blogSectionContainer = document.querySelector('.shop-blog');
let shopServiceContainer = document.querySelector('.shop-services');
let newsLetterContainer = document.querySelector('.shop-newsletter');
let modalElement = document.querySelector('#exampleModal');

middleware.initialize(navCont, sideBannerConnt,smallBannerSection, trendingItemContainer, mediumBannerContainer,hotItemContainer, yellowBannerContainer,onSaleBestSaleTopViewContainer,blogSectionContainer, shopServiceContainer, newsLetterContainer, modalElement);

page('/', middleware.decorateContext, nav.getNav, sideBannerElement.getSideBanner, smallBanner.getSmallBanner, trendingItem.getTrendingItem, mediumBanner.getMediumBanner, hotItems.getHotItems, yellowBanner.getYellowBanner, onSaleBestSale.getOnSaleBestSale, blogSection.getBlogSection, shopService.getShopService, newsLetter.getNewsLetter, modal.getModal);

page('/home', '/');

page.start();

