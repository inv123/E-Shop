import productServices from "../../service/productServices.js";
import { homePageTemplate } from "./homePageTemplate.js";

let products = undefined;

async function setActiveNavClass(context, e){
    // e.preventDefault();
    
    e.currentTarget.querySelectorAll('li a').forEach(x => {
        x.classList.remove('active');
    });
    e.target.classList.add('active'); 

    e.currentTarget.closest('.product-info').querySelectorAll('#myTabContent .tab-pane').forEach(x => {
        x.classList.remove('active')
        x.classList.remove('show')
        
        if(x.id === e.target.textContent.toLowerCase()){
            x.classList.add('active')
            x.classList.add('show')
        }
    });
  
   
}

async function getView(context){
    let allProducts = await productServices.getAllProducts();
    let sidebanner = Object.values(allProducts).find(x => x.sidebannerdiscount === true);
    let manProducts = Object.values(allProducts).filter(x => x.category === 'man');
    let kidsProducts = Object.values(allProducts).filter(x => x.category === 'kids');
    let womanProducts = Object.values(allProducts).filter(x => x.category === 'woman');
    let accessoriesProducts = Object.values(allProducts).filter(x => x.category === 'accessories');
    let essentialsProducts = Object.values(allProducts).filter(x => x.category === 'essentials');
    let pricesProducts = Object.values(allProducts).filter(x => x.category === 'prices');
    let middlebanner = Object.values(allProducts).filter(x => x.middlebanner === true);
    let onSale = Object.values(allProducts).filter(x => x.onSale === true);
    let bestSeller = Object.values(allProducts).filter(x => x.bestSeller === true);
    let topViewed = Object.values(allProducts).filter(x => x.topViewed === true);


    let boundSetActiveNavClass = setActiveNavClass.bind(null, context)

    products = {
        sidebanner,
        manProducts,
        kidsProducts,
        womanProducts,
        accessoriesProducts,
        essentialsProducts,
        pricesProducts,
        setActiveNavClass: boundSetActiveNavClass,
        middlebanner,
        onSale,
        bestSeller,
        topViewed
    }



    context.renderView(homePageTemplate(products))
}

export default {
    getView
}