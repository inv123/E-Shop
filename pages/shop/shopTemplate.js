import {html} from '../../node_modules/lit-html/lit-html.js'

export let shopTemplate = (products) => html `

<div class="container">
	<div class="container-fluid">
		<div class="flex-shop">
			<div class="aside-container">
				<div class="filter-nav-shop">
					<h4>Filter</h4>
					<div class="price-box">
						<div class="fifty-filter checkbox-price">
							<a href="/"><input type="checkbox"> $ 1-50 Products</a>
						</div>

						<div class="hundred-filter checkbox-price">
							<a href="/"><input type="checkbox"> $ 51-100 Products</a>
						</div>

						<div class="hunder-ninty-nine-filter checkbox-price">
							<a href="/"><input type="checkbox"> $ 101-199 Products</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row" style="padding: 100px 0">
					<!-- Single Banner  -->			
					${products.map(x => singleShopTemplate(x))}
					<!-- /End Single Banner  -->
			</div>
		</div>
	</div>
</div>
  
		
`;

let singleShopTemplate = (product) => html `
<div class="col-lg-4 col-12">
					<div class="single-banner tab-height">
						<img src="${product.imageUrl}" alt="mid-season" style="max-width: 300px">
						<div class="content">
							<h3>${product.title}</h3>
                            <p>$${product.price}</p>
							<a href="/shop/mid-season-collection">Discover Now</a>
						</div>
					</div>
				</div>
`;  

