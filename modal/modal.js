import { modalTemplate } from "./modalTemplate.js";

let modalInfo = {}

async function createModal(context){
    let modalParams = context.params.modal;
    modalInfo.modalParams = modalParams;

    let boundCloseWindow = closeWindow.bind(null, context);
    modalInfo.closeWindow = boundCloseWindow;

    if(context.path === '/my-account'){
        modalInfo.modalText = 'You changed your account details!';
    }else if(context.path === '/cart'){
        modalInfo.modalText = 'Your item was removed.'
    }

    
    
    context.renderModal(modalTemplate(modalInfo))
}

async function closeWindow(context, e){
    let viewCont = e.target.closest('body').querySelector('.view-page');
    let navCont = e.target.closest('body').querySelector('header');
    let footer = e.target.closest('body').querySelector('footer');

    viewCont.style.filter = 'blur(0)';
    navCont.style.filter = 'blur(0)';
    footer.style.filter = 'blur(0)';

    modalInfo.modalParams = false;
    context.renderModal(modalTemplate(modalInfo))
}



export default{
    createModal
}