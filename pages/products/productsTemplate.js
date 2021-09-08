import {html} from '../../node_modules/lit-html/lit-html.js';

export let productsTemplate = (products) => html`
    <div class="container-fluid">
			<div class="row">
				<!-- Single Banner  -->
				
                ${products.map(x => singleProd(x))}

				<!-- /End Single Banner  -->
			</div>
		</div>
`;

let singleProd = (product) => html`
<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img src="${product.imageUrl}" alt="mid-season">
						<div class="content">
							<h3>${product.title}</h3>
                            <p>${product.price}</p>
							<a href="/shop/mid-season-collection">Discover Now</a>
						</div>
					</div>
				</div>
`;