import productServices from "../service/productServices.js";
import { navTemplate } from "./navTemplate.js";

let navSearch = undefined;

async function search(context, e){
    e.preventDefault()
        let formData = new FormData(e.target);
        let searchParams = formData.get('search');
        
        if(searchParams.trim() !== ''){
            let encodedSearch = encodeURIComponent(searchParams)
            context.page.redirect(`/shop?search=${encodedSearch}`)
        }        
}


async function getNav(context, next){
    let boundSearch = search.bind(null, context);
    let allProducts = await productServices.getAllProducts();
    let navKids = Object.values(allProducts).find(x => x.navKids === true);
    let navMan = Object.values(allProducts).find(x => x.navMan === true);
    let navWoman = Object.values(allProducts).find(x => x.navWoman === true);
    let navInfo = {
        currentPage: context.pathname
    }

    navSearch = {
        search: boundSearch
    }

    context.renderNav(navTemplate(navInfo, navSearch, navKids, navMan, navWoman));
    next();
}



export default {
    getNav
}