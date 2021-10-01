import { contactTemplate } from "./contactTemplate.js";

async function getView(context){
    context.renderView(contactTemplate())
}

export default{
    getView
}