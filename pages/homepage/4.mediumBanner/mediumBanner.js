import { mediumBannerTemplate } from "./mediumBannerTemplate.js";

async function getMediumBanner(context, next){
    context.renderMediumBanner(mediumBannerTemplate());
    next()
}

export default {
    getMediumBanner
}