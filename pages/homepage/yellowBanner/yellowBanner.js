import { yellowBannerTemplate } from "./yellowBannerTemplate.js";

async function getYellowBanner(context, next) {
    context.renderYellowItem(yellowBannerTemplate());
    next();
}

export default {
    getYellowBanner
}