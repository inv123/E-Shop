import {
	html
} from '../../../node_modules/lit-html/lit-html.js';


export let trendingItemTemplate = (products) => html `
<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="section-title">
							<h2>Trending Item</h2>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<div class="product-info">
							<div class="nav-main">
								<!-- Tab Nav -->
								<ul class="nav nav-tabs" id="myTab" role="tablist" @click=${products.setActiveNavClass}>
									<li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#man" role="tab">Man</a></li>
									<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#women" role="tab">Woman</a></li>
									<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
									<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>
									<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#essential" role="tab">Essential</a></li>
									<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#prices" role="tab">Prices</a></li>
								</ul>
								<!--/ End Tab Nav -->
							</div>
							<div class="tab-content" id="myTabContent" >
								<!-- Start Single Tab -->
								<div class="tab-pane fade show active" id="man" role="tabpanel">
									<div class="tab-single">
										<div class="row">
										
											${products.manProducts
											? html`${products.manProducts.map(x => singleCell(x))}` 
											: html`<div class="no-items-available">No available items</div>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade" id="woman" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
										${products.womanProducts
											? html`${products.womanProducts.map(x => singleCell(x))}` 
											: html`<div class="no-items-available">No available items</div>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade" id="kids" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
										${products.kidsProducts 
											? html`${products.kidsProducts.map(x => singleCell(x))}` 
											: html`<h2 >No available items</h2>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade" id="accessories" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
										${products.accessoriesProducts
											? html`${products.accessoriesProducts.map(x => singleCell(x))}` 
											: html`<div class="no-items-available">No available items</div>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade" id="essential" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
										${products.essentialsProducts
											? html`${products.essentialsProducts.map(x => singleCell(x))}` 
											: html`<div class="no-items-available">No available items</div>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade" id="prices" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
										${products.pricesProducts
											? html`${products.pricesProducts.map(x => singleCell(x))}` 
											: html`<div class="no-items-available">No available items</div>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
							</div>
						</div>
					</div>
				</div>
            </div>
`;

let singleCell = (product) => html `
	<div class="col-xl-3 col-lg-4 col-md-4 col-12">
		<div class="single-product">
			<div class="product-img">
				<a href="product-details.html">
					<img class="default-img" src="${product.imageUrl}" alt="#">
					<img class="hover-img" src="${product.imageUrl}" alt="#">
				</a>
				<div class="button-head">
					
					<div class="product-action-2">
						<a title="Add to cart" href="/item/${product.id}">View Product</a>
					</div>
				</div>
			</div>
			<div class="product-content">
				<h3><a href="product-details.html">${product.title}</a></h3>
				<div class="product-price">
					<span>$${product.price}</span>
				</div>
			</div>
		</div>
	</div>
`;