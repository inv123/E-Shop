import {html} from '../../node_modules/lit-html/lit-html.js';

export let confirmTemplate = (orderInfo) => html`
    <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="card">
                
                <div class="invoice p-5">
                    <h5>Your order Confirmed!</h5> <span class="font-weight-bold d-block mt-4">Hello, ${orderInfo.personalData.name} </span> <span>You order has been confirmed and will be shipped in next two days!</span>
                    <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="py-2"> <span class="d-block text-muted">Order Date</span> <span>${orderInfo.currentDate}</span> </div>
                                    </td>
                                    <td>
                                        <div class="py-2"> <span class="d-block text-muted">Order No</span> <span>${orderInfo.orderId}</span> </div>
                                    </td>
                                    <td>
                                        <div class="py-2"> <span class="d-block text-muted">Payment</span> <span>${orderInfo.personalData.payment}</span> </div>
                                    </td>
                                    <td>
                                        <div class="py-2"> <span class="d-block text-muted">Shiping Address</span> <span>${orderInfo.personalData.mainAddress}</span> </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="product border-bottom table-responsive">
                        <table class="table table-borderless">
                            <tbody>
                                
                              ${Object.values(orderInfo.items).map(x => singleProduct(x))}  

                            </tbody>
                        </table>
                    </div>
                    <div class="row d-flex justify-content-end">
                        <div class="col-md-5">
                            <table class="table table-borderless">
                                <tbody class="totals">
                                    <tr>
                                        <td>
                                            <div class="text-left"> <span class="text-muted">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div class="text-right"> <span>$${orderInfo.subtotal}</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="text-left"> <span class="text-muted">Shipping</span> </div>
                                        </td>
                                        <td>
                                            <div class="text-right"> <span>${!orderInfo.shipping ? 'FREE' : orderInfo.shipping}</span> </div>
                                        </td>
                                    </tr>
                                    
                                   
                                    <tr class="border-top border-bottom">
                                        <td>
                                            <div class="text-left"> <span class="font-weight-bold">Grand Total</span> </div>
                                        </td>
                                        <td>
                                            <div class="text-right"> <span class="font-weight-bold">$${!orderInfo.shipping ? orderInfo.subtotal : orderInfo.subtotal + orderInfo.shipping}</span> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                    <p class="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>Lorem Ipsum</span>
                </div>
                <div class="d-flex justify-content-between footer p-3"> <span>Need Help? visit our <a href="/help"> help center</a></span> <span>${orderInfo.currentDate}</span> </div>
            </div>
            
        </div>
       
    </div>
</div>
<a href="/home" class="order-home-btn">Go to Homepage</a>
`;

let singleProduct = (item) => html`
                                <tr>
                                    <td width="20%"> <img src="${item.imageUrl}" width="90"> </td>
                                    <td width="60%"> <span class="font-weight-bold">${item.title}</span>
                                        <div class="product-qty"> <span class="d-block">Quantity: ${item.count}</span><span>Price: ${item.price}</span></div>
                                    </td>
                                    <td width="20%">
                                        <div class="text-right"> <span class="font-weight-bold">Total: ${item.totalPrice}</span> </div>
                                    </td>
                                </tr>
`;