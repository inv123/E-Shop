import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';
import nav from './nav/nav.js';
import loginPage from './pages/login/loginPage.js';
import loginNav from './pages/login/loginNav/loginNav.js';
import homePage from './pages/homepage/homePage.js';


let navCont = document.querySelector('header');
let loginViewCont = document.querySelector('.view-page')

middleware.initialize(navCont,  loginViewCont);

page('/', middleware.decorateContext, nav.getNav, homePage.getView);

page('/login', middleware.decorateContext, loginNav.getLoginNav, loginPage.getLoginPage)

page('/home', '/');
page('/index.html', '/')

page.start();

