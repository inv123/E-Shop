import {
	html
} from '../../../node_modules/lit-html/lit-html.js';

export let mediumBannerTemplate = () => html `
<div class="container">
	<div class="row">
				<div class="col-lg-6 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-shop-a31a6.appspot.com/o/wp6326178.jpg?alt=media&token=04a2775d-f93f-4326-812d-2471f4fc0ea6" alt="#">
						<div class="content">
							<p>shoes women</p>
							<h3>mid season <br> up to <span>70%</span></h3>
							<a href="/shop/man" class="btn">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-6 col-md-6 col-12">
					<div class="single-banner">
						<img src="https://firebasestorage.googleapis.com/v0/b/e-commerce-shop-a31a6.appspot.com/o/shoes-coll.jpg?alt=media&token=b17c3ae0-2b9d-4c48-9b63-4585950ff6e4" alt="#">
						<div class="content">
							<p>shoes women</p>
							<h3>mid season <br> up to <span>70%</span></h3>
							<a href="/shop/woman" class="btn">Shop Now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
			</div>
		</div>
`;