import {html} from '../../../node_modules/lit-html/lit-html.js';

export let secondSectionTemplate = () => html`
<section class="small-banner section" style="padding-bottom: 30px">
		<div class="container-fluid">
			<div class="row">
				<!-- Single Banner  -->
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner" style="background: #ccc">
						<img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="#" style="opacity: 0.5">
						<div class="content">
							<p>Man's Collectons</p>
							<h3>Summer travel <br> collection</h3>
							<a href="/shop">Shop now</a>
						</div>
					</div>
				</div>
				<!-- /End Single Banner  -->
				<!-- Single Banner  -->
				<div class="col-lg-4 col-md-6 col-12">
					<div class="single-banner" style="background: #ccc">
						<img src="https://media1.popsugar-assets.com/files/thumbor/kMIxxcgfVsC_qejdCLNxz6x81W0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/01/06/827/n/1922564/69251bde5ff606e249e3f5.70663018_/i/best-investment-bags-2021.jpg" alt="#" style="opacity: 0.5">
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
					<div class="single-banner tab-height" style="background: #ccc;">
						<img src="https://i.pinimg.com/564x/fb/5a/34/fb5a344feaa2149ef5523834904ba1af.jpg" alt="#" style="opacity: 0.5">
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
`;