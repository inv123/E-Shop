import loginRegister from "../../service/loginRegister.js";
import { registerTemplate } from "./registerTemplate.js";

let form = undefined;

async function submitHandler(context, e){
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repearPass = formData.get('repass');
    let error = e.target.querySelector('.error');

    if(!email || !password || !repearPass){
      context.renderView(registerTemplate(form));
       error.textContent = 'All fields required!'
    }else if(password !== repearPass){
        context.renderView(registerTemplate(form));
         error.textContent = 'Password did not matched!'
    }else{

        form = {
            email,
            password
        }

        let registerUser = await loginRegister.register(form);
    context.page.redirect('/')
    }
}

async function getView(context){
    let boundSubmitHandler = submitHandler.bind(null, context);
    
    form = {
        submitHandler: boundSubmitHandler
    }
  
    context.renderView(registerTemplate(form))
}

export default {
    getView
}