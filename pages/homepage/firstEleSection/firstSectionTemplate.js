import {html} from '../../../node_modules/lit-html/lit-html.js';

export let firstEleTemplate = (product) => html`
<section class="hero-slider" style="padding-top: 100px">
		<!-- Single Slider -->
		<div class="single-slider">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-lg-9 offset-lg-3 col-12">
						<div class="text-inner">
							<div class="row">
                            <img src="${product.imageUrl}">
								<div class="col-lg-7 col-12">
									<div class="hero-text">
										<h1><span>UP TO 50% OFF </span>${product.title}</h1>
										<p>${product.description}</p>
										<div class="button">
											<a href="/item/${product.id}" class="btn">Shop Now!</a>
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
`