import userService from "../../service/userService.js";
import { loginTemaplte } from "./loginTemplate.js";

let form = undefined;

async function submitHandler(context, e){
    e.preventDefault();
    let formData = new FormData(e.target)

    let email = formData.get('email');
    let password = formData.get('password');

    form = {
        email,
        password
    }

    let userResult = await userService.login(form);
    context.page.redirect('/home')
}

async function getLoginPage(context){
    let boundSubmitHandler = submitHandler.bind(null, context);

    form = {
        submitHandler: boundSubmitHandler
    }

    context.renderView(loginTemaplte(form))
}

export default{ 
    getLoginPage
}