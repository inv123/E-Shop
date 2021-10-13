import modal from "../../modal/modal.js";
import userServ from "../../service/userServ.js";
import { myAccountTemplate } from "./myAccountTemplate.js";

let userId = localStorage.getItem('userId');
let userDetails = {};
let modalInfo = false;

async function getView(context, next){
    let userDetailsRequest = await userServ.getUserDetails(userId);
    let boundUpdateUserDetails = updateUserDetails.bind(null, context);
    
    userDetails = {
        email: userDetailsRequest.email,
        country: userDetailsRequest.country,
        lastName: userDetailsRequest.lastName,
        mainAddress: userDetailsRequest.mainAddress,
        name: userDetailsRequest.name,
        phone: userDetailsRequest.phone,
        postCode: userDetailsRequest.postCode,
        secondAddress: userDetailsRequest.secondAddress,
        state: userDetailsRequest.state,
        updateUserDetails: boundUpdateUserDetails
    }

    context.renderView(myAccountTemplate(userDetails));
    next()
}

async function updateUserDetails(context, e){
    
    e.preventDefault();

    let formData = new FormData(e.target);
    let name = formData.get('name');
    let lastName = formData.get('lastName');
    let email = formData.get('email');
    let phone = formData.get('phone');
    let country = formData.get('country');
    let state = formData.get('state');
    let mainAddress = formData.get('address');
    let secondAddress = formData.get('second-address');
    let postCode = formData.get('post-code');

    userDetails = {
        name,
        lastName,
        email,
        phone,
        country,
        state,
        mainAddress,
        secondAddress,
        postCode
    }

    let updateReq = await userServ.updateUserDetails(userId, userDetails);
    
    if(updateReq){
        let modalDom = e.target.closest('body').querySelector('.modal');
        let viewCont = e.target.closest('body').querySelector('.view-page');
        let navCont = e.target.closest('body').querySelector('header');
        let footer = e.target.closest('body').querySelector('footer')
        viewCont.style.filter = 'blur(4px)';
        navCont.style.filter = 'blur(4px)';
        footer.style.filter = 'blur(4px)';
        modalDom.style.display = 'block';
        context.params.modal = true;
        let modalEleShow = await modal.createModal(context);
       
        let modalFade = setTimeout(async function(){
            viewCont.style.filter = 'blur(0)';
            navCont.style.filter = 'blur(0)';
            footer.style.filter = 'blur(0)';

            modalDom.style.display = 'none';
            context.params.modal = false;
            let modalEleHide = await modal.createModal(context);
        },2000)

    }

    

}



export default{
    getView,
    updateUserDetails
}