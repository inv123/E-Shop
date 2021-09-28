import productServices from "../../service/productServices.js";
import { homepageTemplate } from "./homepageTemplate.js";

let homepageInfo = {
    currentTab: 'man'
};

async function getView(context){
    //FirstSection
    let discountedProductRequest = await productServices.isDiscounted();
    homepageInfo.isDiscounted = Object.values(discountedProductRequest)[0];

    //Third Section
    let boundSetActiveTab = setActiveTab.bind(null, context);
    homepageInfo.setActiveTab = boundSetActiveTab;
    
    context.renderView(homepageTemplate(homepageInfo));
}

//Third Seciton

async function setActiveTab(context, e){
    
    
    if(e.target.dataset.toggle === 'tab'){
        let hash = e.target.href.split('#')[1]
       homepageInfo.currentTab = hash;
       console.log(homepageInfo.currentTab);
       context.renderView(homepageTemplate(homepageInfo))
    }
}




export default {
    getView
}