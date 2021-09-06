import {html} from '../../../node_modules/lit-html/lit-html.js';

export let onSaleBestSaleTemplate = (products) => html`
<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<div class="row">
						<div class="col-12">
							<div class="shop-section-title">
								<h1>On sale</h1>
							</div>
						</div>
					</div>
					<!-- Start Single List  -->
					
					${products.onSale.map(x => onSaleSingleProd(x))}
					
					<!-- End Single List  -->
				</div>
				<div class="col-lg-4 col-md-6 col-12">
					<div class="row">
						<div class="col-12">
							<div class="shop-section-title">
								<h1>Best Seller</h1>
							</div>
						</div>
					</div>
					<!-- Start Single List  -->
					
					${products.bestSeller.map(x => bestSellerSingleProd(x))}

					<!-- End Single List  -->
				</div>
				<div class="col-lg-4 col-md-6 col-12">
					<div class="row">
						<div class="col-12">
							<div class="shop-section-title">
								<h1>Top viewed</h1>
							</div>
						</div>
					</div>
					<!-- Start Single List  -->
			
					${products.topViewed.map(x => topViewedSingleProd(x))}
				
					<!-- End Single List  -->
				</div>
			</div>
		</div>
`;

let onSaleSingleProd = (product) => html`
<div class="single-list">
						<div class="row">
							<div class="col-lg-6 col-md-6 col-12">
								<div class="list-image overlay">
									<img src="${product.imageUrl}" alt="#">
									<a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-12 no-padding">
								<div class="content">
									<h4 class="title"><a href="#">${product.title}</a></h4>
									<p class="price with-discount">$${product.price}</p>
								</div>
							</div>
						</div>
					</div>
`;

let bestSellerSingleProd = (product) => html`
<div class="single-list">
						<div class="row">
							<div class="col-lg-6 col-md-6 col-12">
								<div class="list-image overlay">
									<img src="${product.imageUrl}" alt="#">
									<a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-12 no-padding">
								<div class="content">
									<h4 class="title"><a href="#">${product.title}</a></h4>
									<p class="price with-discount">$${product.price}</p>
								</div>
							</div>
						</div>
					</div>
`;

let topViewedSingleProd = (product) => html`
<div class="single-list">
						<div class="row">
							<div class="col-lg-6 col-md-6 col-12">
								<div class="list-image overlay">
									<img src="${product.imageUrl}" alt="#">
									<a href="#" class="buy"><i class="fa fa-shopping-bag"></i></a>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-12 no-padding">
								<div class="content">
									<h4 class="title"><a href="#">${product.title}</a></h4>
									<p class="price with-discount">$${product.price}</p>
								</div>
							</div>
						</div>
					</div>
`;