import {html} from '../../../node_modules/lit-html/lit-html.js'

export let sideBannerTemplate = (item) => html`
<div class="single-slider"> 
			<div class="container">
				<div class="row no-gutters">
					<div class="col-lg-9 offset-lg-3 col-12">
						<div class="text-inner">
							<div class="row">
								<div class="col-lg-7 col-12">
									<div class="hero-text">
										<h1><span>UP TO 50% OFF </span>${item.sidebanner.title}</h1>
										<p>${item.sidebanner.description}</p>
										<div class="button">
											<a href="/item/${item.sidebanner.id}" class="btn">Shop Now!</a>
										</div>
									</div>
									
								</div>
								<div class="hero-img">
									<img src="${item.sidebanner.imageUrl}">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`;