import { sideBannerTemplate } from "./sideBannerTemplate.js";

async function getSideBanner(context, next){
    console.log(context);
    context.renderSideBanner(sideBannerTemplate());
    next();
}

export default {
    getSideBanner
}