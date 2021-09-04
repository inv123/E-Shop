import { newsLetterTemplate } from "./newsLetterTemplate.js";

async function getNewsLetter(context, next){
    context.renderNewsLetter(newsLetterTemplate());
    next();
}

export default {
    getNewsLetter
}