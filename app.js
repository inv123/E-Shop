import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';
import nav from './nav/nav.js';
import loginPage from './pages/login/loginPage/loginPage.js';
import loginNav from './pages/login/loginNav/loginNav.js';
import homePage from './pages/homepage/homePage.js';
import registerPage from './pages/register/registerPage.js';
import shopPage from './pages/shop/mainShop/shopPage.js';
import filterShop from './pages/shop/filterShop/filterShop.js';
import sortFilterPage from './pages/shop/filterShop/sortFilter/sortFilterPage.js';


let navCont = document.querySelector('header');
let viewCont = document.querySelector('.view-page')

middleware.initialize(navCont, viewCont);

page('/home', middleware.decorateContext, nav.getNav, homePage.getView);
page('/login', middleware.decorateContext, loginNav.getLoginNav, loginPage.getView);
page('/register', middleware.decorateContext, loginNav.getLoginNav, registerPage.getView);
page('/logout', async (context) => {await localStorage.clear(); context.page.redirect('/')});

page('/shop/price/:priceRange/:sort', middleware.decorateContext, nav.getNav, sortFilterPage.getView);
page('/shop', middleware.decorateContext, nav.getNav, shopPage.getView);
page('/shop/price/:priceRange', middleware.decorateContext, nav.getNav, filterShop.getView);



page('/', '/home');
page('/index.html', '/home')

page.start();

