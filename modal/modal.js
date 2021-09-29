import { modalTemplate } from "./modalTemplate.js";

async function getModal(context){
    context.renderModal(modalTemplate())
}

export default{
    getModal
}