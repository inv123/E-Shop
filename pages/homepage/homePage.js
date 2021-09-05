import productServices from "../../service/productServices.js";
import { homePageTemplate } from "./homePageTemplate.js";

let products = undefined;

async function getView(context){
    let allProducts = await productServices.getAllProducts();
    let sidebanner = Object.values(allProducts).find(x => x.sidebannerdiscount === true);
    let manProducts = Object.values(allProducts).filter(x => x.category === 'man');
    let kidsProducts = Object.values(allProducts).filter(x => x.category === 'kids');
    let womanProducts = Object.values(allProducts).filter(x => x.category === 'woman');
    let accessoriesProducts = Object.values(allProducts).filter(x => x.category === 'accessories');
    let essentialsProducts = Object.values(allProducts).filter(x => x.category === 'essentials');
    

    products = {
        sidebanner,
        manProducts,
        kidsProducts,
        womanProducts,
        accessoriesProducts,
        essentialsProducts
    }

    console.log(products);

    context.renderView(homePageTemplate(products))
}

export default {
    getView
}