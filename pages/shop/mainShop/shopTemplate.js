import {html} from '../../../node_modules/lit-html/lit-html.js';

export let shopTemplate = (shopInfo) => html `

<div class="container">
	<div class="container-fluid">
		<div class="sorting">
			<div>
				<h4>Sorting Items</h4>
			</div>
			<select class="select" name="sort" @change=${shopInfo.sortHandler}>
				<option>Select...</option>	
				<option value="sort=latest" >Latest</option>	
				<option value="sort=ascending">Price Ascending</option>
				<option value="sort=descending">Price Descending</option>
			</select>
		</div>
		<div class="flex-shop">
			<aside class="aside-container">
				<div class="filter-nav-shop">
					<h4>Filter</h4>
					<div class="price-box">
						<div class="fifty-filter checkbox-price" >

							<a href="/shop/price/1-50" data-end="50"><input type="checkbox"> $ 1-50 Products</a>
							
						</div>

						<div class="hundred-filter checkbox-price" >

							<a href="/shop/price/51-100" data-start="51" data-end="100"><input type="checkbox"> $ 51-100 Products</a>

						</div>

						<div class="hunder-ninty-nine-filter checkbox-price" >

							<a href="/shop/price/101-199" data-start="101" data-end="199"><input type="checkbox"> $ 101-199 Products</a>

						</div>
					</div>
				</div>
			</aside>
			<div class="row" style="padding: 100px 0">
					<!-- Products  -->			
					${shopInfo.products.map(x => singleShopTemplate(x))}
					<!-- /End Products  -->
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
							<a href="/item/${product.id}">Shop Now</a>
						</div>
					</div>
				</div>
`;  

