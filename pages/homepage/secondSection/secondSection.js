import { secondSectionTemplate } from "./secondSectionTemplate.js";

async function getView(context, next){
    context.renderView(secondSectionTemplate());
    next();
}

export default {
    getView
}