import productServices from "../../service/productServices.js";
import { singleItemTemplate } from "./singleItemTemplate.js";

async function getView(context){
    let id = context.params.id;
    
    let currentItemObj = await productServices.getCurrentItem(id);
    let currentItem = Object.values(currentItemObj);
    console.log(currentItem);
    context.renderView(singleItemTemplate(currentItem[0]));

}

export default{
    getView
}