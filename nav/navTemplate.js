import {html} from '../node_modules/lit-html/lit-html.js';


//TO DO ... ALL NAV MENU !!!!
export let navTemplate = (navInfo, deleteItem) => html`
<header class="header shop">
		<!-- Topbar -->
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
								${localStorage.getItem('authToken')
								? 
								html`<li><i class="ti-location-pin"></i> Store location</li>
								<li><i class="ti-alarm-clock"></i> <a href="/daily-deals">Daily deal</a></li>
								<li><i class="ti-power-off"></i><a href="/my-account">My Account</a></li>
								<li><i class="ti-user"></i> <a href="/logout">logout</a></li>`
								: 
								html`<li><i class="ti-location-pin"></i> Store location</li>
								<li><i class="ti-alarm-clock"></i> <a href="/daily-deals">Daily deal</a></li>
								<li><i class="ti-power-off"></i><a href="/login">Login</a></li>
								<li><i class="ti-user"></i> <a href="/register">Register</a></li>`
								}
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
							<a href="/home"><img src="images/logo.png" alt="logo"></a>
						</div>
						<!--/ End Logo -->
						<!-- Search Form -->
						<div class="search-top">
							<div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
							<!-- Search Form -->
							<div class="search-top">
								<form class="search-form">
									<input type="text" placeholder="Search here..." name="search">
									<button value="search" type="submit"><i class="ti-search"></i></button>
								</form>
							</div>
							<!--/ End Search Form -->
						</div>
						<!--/ End Search Form -->
						<div class="mobile-nav"></div>
					</div>
					<div class="col-lg-8 col-md-7 col-12">
						<div class="search-bar-top">
							<div class="search-bar">
								<form @submit=${navInfo.search}>
									<input name="search" placeholder="Search Products Here....." type="search">
									<button class="btnn"><i class="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					${localStorage.getItem('authToken') 
					? html`<div class="col-lg-2 col-md-3 col-12">
						<div class="right-bar">
							<!-- Search Form -->
							
							<div class="sinlge-bar">
								<a href="/my-account" class="single-icon"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
							</div>
							<div class="sinlge-bar shopping">
								<a href="cart" class="single-icon"><i class="ti-bag"></i> <span class="total-count">${!navInfo.itemCount ? '0' : navInfo.itemCount}</span></a>
								<!-- Shopping Item -->
								<div class="shopping-item">
								${navInfo.items 
									? html`
									<div class="dropdown-cart-header">
										<span>${navInfo.itemCount} Items</span>
										<a href="/cart">View Cart</a>
									</div>
									<ul class="shopping-list">
										
									${navInfo.items.map(x => navProduct(x, deleteItem))}

									</ul>
									<div class="bottom">
										<div class="total">
											<span>Total</span>
											<span class="total-amount">$${navInfo.totalPrice}</span>
										</div>
										<a href="checkout.html" class="btn animate">Checkout</a>
									</div>
								` 
								: html`<p>No items in the cart...</p>`}
								</div>
								<!--/ End Shopping Item -->
							</div>
						</div>
					</div>` : ''}
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
									<li><a href="/new-arrivals">New Arrivals <i class="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul class="sub-category">
											<li><a href="/shop/accessories">accessories</a></li>
											<li><a href="/shop/best-selling">best selling</a></li>
											<li><a href="/shop/top-100">top 100 offer</a></li>
											<li><a href="/shop/men">man’s product</a></li>
											<li><a href="/shop/women">ladies</a></li>
										</ul>
									</li>
									<li><a href="/shop/accessories">accessories</a></li>
									<li><a href="/shop/top-100">top 100 offer</a></li>
									<li><a href="/shop/men">man’s product</a></li>
									<li><a href="/shop/women">ladies</a></li>
									
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
													<li class="active"><a href="/home">Home</a></li>
													<li><a href="/shop">Shop<i class="ti-angle-down"></i><span class="new">New</span></a>
														<ul class="dropdown">
															<li><a href="/cart">Cart</a></li>
															<li><a href="/checkout">Checkout</a></li>
														</ul>
													</li>
													<li><a href="/blog">Blog</i></a>
													
													</li>
													<li><a href="contact.html">Contact Us</a></li>
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
		<!--/ End Header Inner -->
	</header>
`;

let navProduct = (item, deleteItem) => html`
								<li data-id=${item.id}>
									<a href="javascript:void(0)" class="remove" title="Remove this item" @click=${deleteItem}><i class="fa fa-remove"></i></a>
									<a class="cart-img" href="/item/${item.id}"><img src="${item.imageUrl}" alt="#"></a>
									<h4><a href="/item/${item.id}">${item.title}</a></h4>
									<p class="quantity">${item.count}x - <span class="amount">$${item.price}</span></p>
								</li>
`;