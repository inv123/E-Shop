import { trendingItemTemplate } from "./trendingItemTemplate.js";

async function getTrendingItem(context, next){
    context.renderTrendingItem(trendingItemTemplate());
    next()
}

export default {
    getTrendingItem
}