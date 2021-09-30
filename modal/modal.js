import { modalTemplate } from "./modalTemplate.js";

let modalInfo = {}

async function createModal(context){
    let modalParams = context.params.modal;
    modalInfo.modalParams = modalParams;

    let boundCloseWindow = closeWindow.bind(null, context);
    modalInfo.closeWindow = boundCloseWindow;
    
    context.renderModal(modalTemplate(modalInfo))
}

async function closeWindow(context, e){
    let viewCont = e.target.closest('body').querySelector('.view-page');
    let navCont = e.target.closest('body').querySelector('header');
    let footer = e.target.closest('body').querySelector('footer');
    let modalCont = e.target.closest('.modal');
    modalCont.style.display = 'none'
    viewCont.style.filter = 'blur(0)';
    navCont.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';

    modalInfo.modalParams = false;
    context.renderModal(modalTemplate(modalInfo))
}



export default{
    createModal
}