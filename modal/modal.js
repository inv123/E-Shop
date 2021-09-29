import { modalTemplate } from "./modalTemplate.js";

async function createModal(context, message){
    context.renderModal(modalTemplate(message))
}

export default{
    createModal
}