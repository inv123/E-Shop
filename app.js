import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';
import nav from './nav/nav.js';
import loginPage from './pages/login/loginPage/loginPage.js';
import loginNav from './pages/login/loginNav/loginNav.js';
import registerPage from './pages/register/registerPage.js';
import shopPage from './pages/shop/mainShop/shopPage.js';
import filterShop from './pages/shop/filterShop/filterShop.js';
import sortFilterPage from './pages/shop/filterShop/sortFilter/sortFilterPage.js';
import sortMainShopPage from './pages/shop/mainShop/sortMainShop/sortMainShopPage.js';
import singleItemPage from './pages/shop/singleItem/singleItemPage.js';
import cartPage from './pages/cart/cartPage.js';
import searchShopPage from './pages/shop/searchShop/searchShopPage.js';
import checkoutPage from './pages/checkout/checkoutPage.js';
import confirmOrderPage from './pages/confirmOrder/confirmOrderPage.js';
import homepage from './pages/home/homepage.js';
import myAccount from './pages/myAccount/myAccount.js';


let navCont = document.querySelector('header');
let viewCont = document.querySelector('.view-page')

middleware.initialize(navCont, viewCont);

page('/home', middleware.decorateContext, nav.getNav, homepage.getView);
page('/login', middleware.decorateContext, loginNav.getLoginNav, loginPage.getView);
page('/register', middleware.decorateContext, loginNav.getLoginNav, registerPage.getView);
page('/logout', async (context) => {await localStorage.clear(); context.page.redirect('/')});
page('/my-account', middleware.decorateContext, nav.getNav, myAccount.getView);



page('/item/:id', middleware.decorateContext, nav.getNav, singleItemPage.getView);

page('/search/:query', middleware.decorateContext, nav.getNav, searchShopPage.getView);
page('/shop', middleware.decorateContext, nav.getNav, shopPage.getView);
page('/shop/price/:priceRange', middleware.decorateContext, nav.getNav, filterShop.getView);
page('/shop/price/:priceRange/:sort', middleware.decorateContext, nav.getNav, sortFilterPage.getView);
page('/shop/:sort', middleware.decorateContext, nav.getNav, sortMainShopPage.getView);
page('/cart', middleware.decorateContext, nav.getNav, cartPage.getView);
page('/order/confirm/:orderName', middleware.decorateContext,loginNav.getLoginNav, confirmOrderPage.getView);
page('/checkout', middleware.decorateContext, nav.getNav, checkoutPage.getView);

page('/', '/home');
page('/index.html', '/home')

page.start();

