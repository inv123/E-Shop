import userServ from "../../service/userServ.js";
import { myAccountTemplate } from "./myAccountTemplate.js";

let userId = localStorage.getItem('userId');
let userDetails = {};

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
 

    console.log(updateReq);
    
}

export default{
    getView,
    updateUserDetails
}