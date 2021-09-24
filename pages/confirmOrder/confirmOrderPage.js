import productServices from "../../service/productServices.js";
import { confirmTemplate } from "./confirmOrderTemplate.js";

let userId = localStorage.getItem('userId');


async function getView(context){
    let orderId = context.params.orderName;
    let orderInfo = await productServices.getOrderDetails(userId, orderId);
  
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let currentDate = getDate(day, month, year);

    orderInfo.currentDate = currentDate;
    orderInfo.orderId = orderId;

    let subtotal = 0;
    Object.values(orderInfo.items).forEach(x => {
        subtotal+=x.totalPrice
    })
   
    orderInfo.subtotal = subtotal;
    console.log(orderInfo);
   


    context.renderView(confirmTemplate(orderInfo))
}

function getDate(day, month, year){
    let arrayMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < arrayMonth.length; i++) {
        if(Number(month) === i+1){
            month = arrayMonth[i+1];
        }
    }
    return `${day} ${month}, ${year}`
}

export default {
    getView
}