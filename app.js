import page from './node_modules/page/page.mjs';
import middleware from './middleware.js';
import nav from './nav/nav.js';
import loginPage from './pages/login/loginPage/loginPage.js';
import loginNav from './pages/login/loginNav/loginNav.js';
import homePage from './pages/homepage/homePage.js';
import registerPage from './pages/register/registerPage.js';


let navCont = document.querySelector('header');
let viewCont = document.querySelector('.view-page')

middleware.initialize(navCont, viewCont);

page('/', middleware.decorateContext, nav.getNav, homePage.getView);
page('/login', middleware.decorateContext, loginNav.getLoginNav, loginPage.getView)
page('/register', middleware.decorateContext, loginNav.getLoginNav, registerPage.getView)
page('/logout', async (context) => {await localStorage.clear(); context.page.redirect('/')})

page('/home', '/');
page('/index.html', '/')

page.start();

