import {html} from '../../../node_modules/lit-html/lit-html.js';

export let smallBannerTemaplte = () => html`
<div class="container-fluid">
			<div class="row">
				<!-- Single Banner  -->
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-shop-a31a6.appspot.com/o/wp6326178.jpg?alt=media&token=04a2775d-f93f-4326-812d-2471f4fc0ea6" alt="man's collection">
						<div class="content">
							<p>Man's Collectons</p>
							<h3>Summer travel <br> collection</h3>
							<a href="/shop/mans-collection">Discover Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-shop-a31a6.appspot.com/o/images.jpg?alt=media&token=715b1907-9731-4f5b-9723-41397acd355d" alt="bag collection">
						<div class="content">
							<p>Bag Collectons</p>
							<h3>Awesome Bag <br> 2020</h3>
							<a href="/shop/bag-collection">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-shop-a31a6.appspot.com/o/shoes-coll.jpg?alt=media&token=b17c3ae0-2b9d-4c48-9b63-4585950ff6e4" alt="mid-season">
						<div class="content">
							<p>Flash Sale</p>
							<h3>Mid Season <br> Up to <span>40%</span> Off</h3>
							<a href="/shop/mid-season-collection">Discover Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
			</div>
		</div>
`;