import { smallBannerTemaplte } from "./smallBannerTemplate.js";

async function getSmallBanner(context, next){
    
    context.renderSmallBanner(smallBannerTemaplte());
    next()
}  

export default {
    getSmallBanner
}