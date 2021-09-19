import productServices from "../../service/productServices.js";
import { singleItemTemplate } from "./singleItemTemplate.js";

async function getView(context){
    let id = context.params.id;
    
    let currentItemObj = await productServices.getCurrentItem(id);
    let currentItem = Object.values(currentItemObj);
    let boundPlusMinus = plusMinus.bind(null, context);

    console.log(currentItem);
    context.renderView(singleItemTemplate(currentItem[0], boundPlusMinus));

}

function plusMinus(context, e){
    e.preventDefault();

    let sign = e.target.textContent;
    let inputField = e.target.closest('.quantity').querySelector('input');
   
    if(sign === '-'){
        inputField.stepDown();
    }else {
        inputField.stepUp();
    }
}

export default{
    getView
}