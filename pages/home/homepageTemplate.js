import { ifDefined } from '../../node_modules/lit-html/directives/if-defined.js';
import {html} from '../../node_modules/lit-html/lit-html.js'

export let homepageTemplate = (homepageInfo) => html`
	<section class="hero-slider" >
		<!-- Single Slider -->
		<div class="single-slider" style="padding-top:100px">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-lg-9 offset-lg-3 col-12">
						<div class="text-inner">
							<div class="row">
                            <img src="${homepageInfo.isDiscounted.imageUrl}" >
								<div class="col-lg-7 col-12">
                                   
									<div class="hero-text">
										<h1><span>UP TO 50% OFF </span>${homepageInfo.isDiscounted.title}</h1>
										<p>${homepageInfo.isDiscounted.description}</p>
										<div class="button">
											<a href="/item/${homepageInfo.isDiscounted.id}" class="btn">Shop Now!</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/ End Single Slider -->
	</section>
	<!--/ End Slider Area -->
	
	<!-- Start Small Banner  -->
	<section class="small-banner section">
		<div class="container-fluid">
			<div class="row">
				<!-- Single Banner  -->
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://stylecaster.com/wp-content/uploads/2018/12/GettyImages-914704910-copy.jpg" alt="man" >
						<div class="content">
							<p>Man's Collectons</p>
							<h3>Summer travel <br> collection</h3>
							<a href="/shop">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://www.thecoolector.com/wp-content/uploads/2018/11/activcargo-1050x700.jpg" alt="bag" >
						<div class="content">
							<p>Bag Collectons</p>
							<h3>Awesome Bag <br> 2020</h3>
							<a href="/shop">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img src="http://spice4life.co.za/wp-content/uploads/2015/11/Business-Dress-for-Women-2012.jpg" alt="woman" >
						<div class="content">
							<p>Flash Sale</p>
							<h3>Mid Season <br> Up to <span>40%</span> Off</h3>
							<a href="/shop">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
			</div>
		</div>
	</section>
	<!-- End Small Banner -->
	
	<!-- Start Product Area -->
    <div class="product-area section">
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
								<ul class="nav nav-tabs" id="myTab" role="tablist" @click=${homepageInfo.setActiveTab}>
									<li class="nav-item"><a class="nav-link ${ifDefined(homepageInfo.currentTab === 'man' ? 'active' : '')}" data-toggle="tab" href="/home/#man" role="tab">Man</a></li>
									<li class="nav-item"><a class="nav-link ${ifDefined(homepageInfo.currentTab === 'woman' ? 'active' : '')}" data-toggle="tab" href="/home/#woman" role="tab">Woman</a></li>
									<li class="nav-item"><a class="nav-link ${ifDefined(homepageInfo.currentTab === 'kids' ? 'active' : '')}" data-toggle="tab" href="/home/#kids" role="tab" >Kids</a></li>
									<li class="nav-item"><a class="nav-link ${ifDefined(homepageInfo.currentTab === 'accessories' ? 'active' : '')}" data-toggle="tab" href="/home/#accessories" role="tab">Accessories</a></li>
									<li class="nav-item"><a class="nav-link ${ifDefined(homepageInfo.currentTab === 'essential' ? 'active' : '')}" data-toggle="tab" href="/home/#essential" role="tab">Essential</a></li>
									
								</ul>
								<!--/ End Tab Nav -->
							</div>
							<div class="tab-content" id="myTabContent">
								<!-- Start Single Tab -->
								<div class="tab-pane fade ${ifDefined(homepageInfo.currentTab === 'man' ? 'show active' : '')}" id="man" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
												${homepageInfo.manProducts ? homepageInfo.manProducts.map(x => singleProduct(x)) : html`<h5>No items...</h5>`}
											
										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade ${ifDefined(homepageInfo.currentTab === 'woman' ? 'show active' : '')}" id="woman" role="tabpanel">
									<div class="tab-single">
										<div class="row">

                                        
                                        
                                        ${homepageInfo.womanProducts ? homepageInfo.womanProducts.map(x => singleProduct(x)) : html`<h5>No items...</h5>`}
                                        
                                        </div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade ${ifDefined(homepageInfo.currentTab === 'kids' ? 'show active' : '')}" id="kids" role="tabpanel">
									<div class="tab-single">
										<div class="row">
											
                                                ${homepageInfo.kidsProducts ? homepageInfo.kidsProducts.map(x => singleProduct(x)) : html`<h5>No items...</h5>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade ${ifDefined(homepageInfo.currentTab === 'accessories' ? 'show active' : '')}" id="accessories" role="tabpanel">
									<div class="tab-single">
										<div class="row">
                                            
                                        ${homepageInfo.accessoriesProducts ? homepageInfo.accessoriesProducts.map(x => singleProduct(x)) : html`<h5>No items...</h5>`}
											
										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								<!-- Start Single Tab -->
								<div class="tab-pane fade ${ifDefined(homepageInfo.currentTab === 'essential' ? 'show active' : '')}" id="essential" role="tabpanel">
									<div class="tab-single">
										<div class="row">

                                        ${homepageInfo.essentialsProducts ? homepageInfo.essentialsProducts.map(x => singleProduct(x)) : html`<h5>No items...</h5>`}

										</div>
									</div>
								</div>
								<!--/ End Single Tab -->
								
							</div>
						</div>
					</div>
				</div>
            </div>
    </div>
	<!-- End Product Area -->
	
	<!-- Start Midium Banner  -->
	<section class="midium-banner">
		<div class="container">
			<div class="row">
				<!-- Single Banner  -->
				<div class="col-lg-6 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://www.apetogentleman.com/wp-content/uploads/2018/07/skin-tone-colours-1160x677.jpg" alt="#">
						<div class="content">
							<p>Man's Collectons</p>
							<h3>Man's items <br>Up to<span> 50%</span></h3>
							<a href="/shop">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-6 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://miro.medium.com/max/1000/1*uCuxqurrraLC1ETVRGlMeA.jpeg" alt="#">
						<div class="content">
							<p>shoes women</p>
							<h3>mid season <br> up to <span>70%</span></h3>
							<a href="/shop" class="btn">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
			</div>
		</div>
	</section>
	<!-- End Midium Banner -->

	<!-- Start Shop Services Area -->
	<section class="shop-services section home">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-rocket"></i>
						<h4>Free shiping</h4>
						<p>Orders over $100</p>
					</div>
					<!-- End Single Service -->
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-reload"></i>
						<h4>Free Return</h4>
						<p>Within 30 days returns</p>
					</div>
					<!-- End Single Service -->
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-lock"></i>
						<h4>Sucure Payment</h4>
						<p>100% secure payment</p>
					</div>
					<!-- End Single Service -->
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-tag"></i>
						<h4>Best Peice</h4>
						<p>Guaranteed price</p>
					</div>
					<!-- End Single Service -->
				</div>
			</div>
		</div>
	</section>
	<!-- End Shop Services Area -->
	
	<!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ti-close" aria-hidden="true"></span></button>
                    </div>
                    <div class="modal-body">
                        <div class="row no-gutters">
							<div class="col-lg-6 offset-lg-3 col-12">
								<h4 style="margin-top:100px;font-size:14px; font-weight:500; color:#F7941D; display:block; margin-bottom:5px;">Eshop Free Lite</h4>
								<h3 style="font-size:30px;color:#333;">Currently You are using free lite Version of Eshop.<h3>
								<p style="display:block; margin-top:20px; color:#888; font-size:14px; font-weight:400;">Please, purchase full version of the template to get all pages, features and commercial license</p>
								<div class="button" style="margin-top:30px;">
									<a href="https://wpthemesgrid.com/downloads/eshop-ecommerce-html5-template/" target="_blank" class="btn" style="color:#fff;">Buy Now!</a>
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- Modal end -->
`;

let singleProduct = (product) => html`
                                            <div class="col-xl-3 col-lg-4 col-md-4 col-12"></div>
                                                <div class="single-product">
													<div class="product-img">
														<a href="product-details.html">
															<img class="default-img" src="${product.imageUrl}" alt="#">
															<img class="hover-img" src="${product.imageUrl}" alt="#">
														</a>
														<div class="button-head">
															<div class="product-action-2">
																<a title="Add to cart" href="javascript:void(0)">Add to cart</a>
															</div>
														</div>
													</div>
													<div class="product-content">
														<h3><a href="/item/${product.id}">${product.title}</a></h3>
														<div class="product-price">
															<span>$${product.price}</span>
														</div>
													</div>
												</div>
                                            </div>
`;