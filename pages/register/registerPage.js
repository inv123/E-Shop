import userService from "../../service/userService.js";
import { registerTemplate } from "./registerTemplate.js";

let form = undefined;

async function submitHandler(context, e){
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repearPass = formData.get('repass');

    form = {
        email,
        password
    }

    let registerUser = await userService.register(form);
    context.page.redirect('/');
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