import {
	html
} from '../../node_modules/lit-html/lit-html.js';

export let productsTemplate = (products, item) => html `
<section class="hero-slider">
					<div class="single-slider"> 
					<div class="container">
						<div class="row no-gutters">
							<div class="col-lg-9 offset-lg-3 col-12">
								<div class="text-inner">
									<div class="row">
										<div class="col-lg-7 col-12">
											<div class="hero-text">
												<h1><span>UP TO 50% OFF </span>${item.title}</h1>
												<p>${item.description}</p>
												<div class="button">
													<a href="/shop" class="btn">Shop Now!</a>
												</div>
											</div>
											
										</div>
										<div class="hero-img">
												<img src="${item.imageUrl}">
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
    <div class="container-fluid">
		<div class="row" style="padding: 100px 0">
			


				<!-- Single Banner  -->
				
                ${products.map(x => singleProd(x))}

				<!-- /End Single Banner  -->
		</div>
			
	</div>
		
`;

let singleProd = (product) => html `
<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img src="${product.imageUrl}" alt="mid-season" style="max-width: 300px">
						<div class="content">
							<h3>${product.title}</h3>
                            <p>${product.price}</p>
							<a href="/shop/mid-season-collection">Discover Now</a>
						</div>
					</div>
				</div>
`;