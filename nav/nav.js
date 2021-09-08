import productServices from "../service/productServices.js";
import { navTemplate } from "./navTemplate.js";

let navSearch = undefined;

async function search(context, e){
    e.preventDefault()
        let formData = new FormData(e.target);
        let searchParams = formData.get('search');
        console.log(searchParams);
        if(searchParams.trim() !== ''){
            let encodedSearch = encodeURIComponent(searchParams)
            context.page.redirect(`/shop?search=${encodedSearch}`)
        }        
}


async function getNav(context, next){
    let boundSearch = search.bind(null, context);

    navSearch = {
        search: boundSearch
    }

    context.renderNav(navTemplate(navSearch));
    next();
}



export default {
    getNav
}