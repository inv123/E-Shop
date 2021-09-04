import { mediunBannerTemplate } from "./mediumBannerTemplate.js";

async function getMediumBanner(context, next){
    context.renderMediumBanner(mediunBannerTemplate());
    next()
}

export default {
    getMediumBanner
}