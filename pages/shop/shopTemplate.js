import {html} from '../../node_modules/lit-html/lit-html.js';

export let shopTemplate = (shopInfo) => html `

<div class="container">
	<div class="container-fluid">
		<div class="sorting">
			<div>
				<h4>Sorting Items</h4>
			</div>
			<select class="select" name="sort">
				<option>Select...</option>	
				<option value="latest" >Latest</option>	
				<option value="ascending">Price Ascending</option>
				<option value="descending">Price Descending</option>
			</select>
		</div>
		<div class="flex-shop">
			<aside class="aside-container">
				<div class="filter-nav-shop">
					<h4>Filter</h4>
					<div class="price-box">
						<div class="fifty-filter checkbox-price" >

							<a href="/shop?search=price%3D1-50" data-end="50" @click=${shopInfo.filterHandler}>${shopInfo.path === "/shop?search=price%3D1-50" 
							? html`<input type="checkbox" checked>` 
							: html`<input type="checkbox">`} $ 1-50 Products</a>
						</div>

						<div class="hundred-filter checkbox-price" >

							<a href="/shop?search=price%3D51-100" data-start="51" data-end="100" @click=${shopInfo.filterHandler}>${shopInfo.path === "/shop?search=price%3D51-100" 
							? html`<input type="checkbox" checked>` 
							: html`<input type="checkbox">`} $ 51-100 Products</a>

						</div>

						<div class="hunder-ninty-nine-filter checkbox-price" >
							<a href="/shop?search=price%3D101-199" data-start="101" data-end="199" @click=${shopInfo.filterHandler}>${shopInfo.path === "/shop?search=price%3D101-199" 
							? html`<input type="checkbox" checked>` 
							: html`<input type="checkbox">`} $ 101-199 Products</a>
						</div>
					</div>
				</div>
			</aside>
			<div class="row" style="padding: 100px 0">
					<!-- Single Banner  -->			
					${shopInfo.products.map(x => singleShopTemplate(x))}
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

