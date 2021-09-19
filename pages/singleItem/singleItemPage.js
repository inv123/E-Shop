import productServices from "../../service/productServices.js";
import { singleItemTemplate } from "./singleItemTemplate.js";

async function getView(context){
    let id = context.params.id;
    console.log(id);
    let currentItem = await productServices.getCurrentItem(id);
    console.log(currentItem);
//    console.log(context);
}

export default{
    getView
}