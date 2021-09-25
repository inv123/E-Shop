import {html} from '../../../node_modules/lit-html/lit-html.js';

export let searchShopTemplate = (shopInfo) => html`

        ${shopInfo.products.length >= 1 
            ? html`<div class="container">
                        <div class="container-fluid">
                            
                            <div class="flex-shop">
                                
                                <div class="row" style="padding: 100px 0">
                                        <!-- Products  -->			
                                        ${shopInfo.products.map(x => singleShopTemplate(x))}
                                        <!-- /End Products  -->
                                </div>
                            </div>
                        </div>
                    </div>` 
: html`  <div class="container no-items" style="padding: 100px 0">
             <h3>No items found. Try to search again...</h3>
        </div>`}

		
`;

let singleShopTemplate = (product) => html `
<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img src="${product.imageUrl}" alt="mid-season" style="max-width: 300px">
						<div class="content">
							<h3>${product.title}</h3>
                            <p>$${product.price}</p>
							<a href="/item/${product.id}">Shop Now</a>
						</div>
					</div>
				</div>
`;  


