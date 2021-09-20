import {html} from '../node_modules/lit-html/lit-html.js';
import {ifDefined} from '../node_modules/lit-html/directives/if-defined.js';

export let navTemplate = (navInfo, navSearch, navKids, navMan, navWoman) => html`
<div class="topbar">
			<div class="container">
				<div class="row">
					<div class="col-lg-5 col-md-12 col-12">
						<!-- Top Left -->
						<div class="top-left">
							<ul class="list-main">
								<li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
								<li><i class="ti-email"></i> support@shophub.com</li>
							</ul>
						</div>
						<!--/ End Top Left -->
					</div>
					<div class="col-lg-7 col-md-12 col-12">
						<!-- Top Right -->
						<div class="right-content">
							<ul class="list-main">
								<li><i class="ti-location-pin"></i> Store location</li>
								<li><i class="ti-alarm-clock"></i> <a href="/daily-deals">Daily deal</a></li>
								${localStorage.getItem('authToken') ? html`
							
								<li><i class="ti-user"></i> <a href="/my-account">My account</a></li>
								<li><i class="ti-power-off"></i><a href="/logout">Logout</a></li>
								` : html`
								<li><i class="ti-power-off"></i><a href="/login">Login</a></li>
								<li><a href="/register" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i>Register</a></li>
								`}
							</ul>
						</div>
						<!-- End Top Right -->
					</div>
				</div>
			</div>
		</div>
		<!-- End Topbar -->
		<div class="middle-inner">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-2 col-12">
						<!-- Logo -->
						<div class="logo">
							<a href="index.html"><img src="images/logo.png" alt="logo"></a>
						</div>
						<!--/ End Logo -->
						<!-- Search Form -->
					
						<!--/ End Search Form -->
						<div class="mobile-nav"></div>
					</div>
					<div class="col-lg-8 col-md-7 col-12">
						<div class="search-bar-top">
							<div class="search-bar">
								
								<form @submit=${navSearch.search}>
									<input name="search" placeholder="Search Products Here....." type="text">
									<button class="btnn"><i class="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					${localStorage.getItem('authToken') 
					? html`
					<div class="col-lg-2 col-md-3 col-12">
						<div class="right-bar">
							<!-- Search Form -->
							<div class="sinlge-bar">
								<a href="#" class="single-icon"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
							</div>
							<div class="sinlge-bar">
								<a href="#" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
							</div>
							<div class="sinlge-bar shopping">
								<a href="/cart" class="single-icon"><i class="ti-bag"></i> <span class="total-count">2</span></a>
								<!-- Shopping Item -->
								<div class="shopping-item">
									<div class="dropdown-cart-header">
										<span>2 Items</span>
										<a href="#">View Cart</a>
									</div>
									<ul class="shopping-list">
										<li>
											<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
											<a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"></a>
											<h4><a href="#">Woman Ring</a></h4>
											<p class="quantity">1x - <span class="amount">$99.00</span></p>
										</li>
										<li>
											<a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
											<a class="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#"></a>
											<h4><a href="#">Woman Necklace</a></h4>
											<p class="quantity">1x - <span class="amount">$35.00</span></p>
										</li>
									</ul>
									<div class="bottom">
										<div class="total">
											<span>Total</span>
											<span class="total-amount">$134.00</span>
										</div>
										<a href="checkout.html" class="btn animate">Checkout</a>
									</div>
								</div>
								<!--/ End Shopping Item -->
							</div>
						</div>
					</div>
					` : ''}
					
				</div>
			</div>
		</div>
		<!-- Header Inner -->
		<div class="header-inner">
			<div class="container">
				<div class="cat-nav-head">
					<div class="row">
						<div class="col-lg-3">
							<div class="all-category">
								<h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
								<ul class="main-category">
									<li><a href="/shop/new-arrival">New Arrivals <i class="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul class="sub-category">
											<li><a href="/shop/new-arrival/accessories">accessories</a></li>
											<li><a href="/shop/new-arrival/best-selling">best selling</a></li>
											<li><a href="/shop/new-arrival/top-100-offer">top 100 offer</a></li>
											<li><a href="/shop/new-arrival/sunglass">sunglass</a></li>
											<li><a href="/shop/new-arrival/watch">watch</a></li>
											<li><a href="/shop/new-arrival/mans-product">man’s product</a></li>
											<li><a href="/shop/new-arrival/ladies">ladies</a></li>
											<li><a href="/shop/new-arrival/western-dress">western dress</a></li>
											<li><a href="/shop/new-arrival/denim">denim </a></li>
										</ul>
									</li>
									<li class="main-mega"><a href="/shop/new-arrival/best-selling">best selling <i class="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul class="mega-menu">
											<li class="single-menu">
												<a href="/shop/kids" class="title-link">Shop Kid's</a>
												<div class="image">
													<img src="${navKids.imageUrl}" alt="Kids">
												</div>
												
											</li>
											<li class="single-menu">
												<a href="/shop/man" class="title-link">Shop Men's</a>
												<div class="image">
													<img src="${navMan.imageUrl}" alt="Man">
												</div>
												
											</li>
											<li class="single-menu">
												<a href="/shop/woman" class="title-link">Shop Women's</a>
												<div class="image">
													<img src="${navWoman.imageUrl}" alt="Woman">
												</div>
												
											</li>
										</ul>
									</li>
									<li><a href="/shop/accessories">accessories</a></li>
									<li><a href="/shop/top-100-offer">top 100 offer</a></li>
									<li><a href="/shop/sunglass">sunglass</a></li>
									<li><a href="/shop/watch">watch</a></li>
									<li><a href="/shop/man">man’s product</a></li>
									<li><a href="/shop/woman">ladies</a></li>
									<li><a href="/shop/western-dress">western dress</a></li>
									<li><a href="/shop/denim">denim </a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-9 col-12">
							<div class="menu-area">
								<!-- Main Menu -->
								<nav class="navbar navbar-expand-lg">
									<div class="navbar-collapse">	
										<div class="nav-inner">	
											<ul class="nav main-menu menu navbar-nav">
													<li class=${ifDefined(navInfo.currentPage.startsWith('/home') ? 'active' : undefined)}><a href="/">Home</a></li>
													
													<li class=${ifDefined(navInfo.currentPage.startsWith('/shop') ? 'active' : undefined)}><a href="/shop">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
														<ul class="dropdown">
															<li><a href="/cart">Cart</a></li>
															<li><a href="/checkout">Checkout</a></li>
														</ul>
													</li>
													<li class=${ifDefined(navInfo.currentPage.startsWith('/about') ? 'active' : undefined)}><a href="/about">About</a></li>									
													<li class=${ifDefined(navInfo.currentPage.startsWith('/blog') ? 'active' : undefined)}><a href="/blog">Blog</a>
														
													</li>
													<li class=${ifDefined(navInfo.currentPage.startsWith('/contacts') ? 'active' : undefined)}><a href="contact.html">Contact Us</a></li>
												</ul>
										</div>
									</div>
								</nav>
								<!--/ End Main Menu -->	
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`;