import { blogSectionTemplate } from "./blogSectionTemplate.js";

async function getBlogSection(context, next){
    context.renderBlog(blogSectionTemplate());
    next()
}

export default {
    getBlogSection
}