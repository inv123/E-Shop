import { sideBannerTemplate } from "./sideBannerTemplate.js";

async function getSideBanner(context, next){
    
    context.renderSideBanner(sideBannerTemplate());
    next();
}

export default {
    getSideBanner
}