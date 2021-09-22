
import { ifDefined } from '../../node_modules/lit-html/directives/if-defined.js';
import { html} from '../../node_modules/lit-html/lit-html.js';

export let cartTemplate = (products, plusMinus, deleteItem) => html `
<div class="shopping-cart section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<!-- Shopping Summery -->
					<table class="table shopping-summery">
						<thead>
							<tr class="main-hading">
								<th>PRODUCT</th>
								<th>NAME</th>
								<th class="text-center">UNIT PRICE</th>
								<th class="text-center">QUANTITY</th>
								<th class="text-center">TOTAL</th> 
								<th class="text-center"><i class="ti-trash remove-icon"></i></th>
							</tr>
						</thead>
						<tbody>
							
                            ${products.map(x => singleProduct(x, plusMinus, deleteItem))}

						</tbody>
					</table>
					<!--/ End Shopping Summery -->
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<!-- Total Amount -->
					<div class="total-amount">
						<div class="row">
							<div class="col-lg-8 col-md-5 col-12">
								
							</div>
							<div class="col-lg-4 col-md-7 col-12">
								<div class="right">
									<ul>
										<li>Cart Subtotal<span>$${Object.values(products).reduce((a,b) => a + b.totalPrice, 0)}</span></li>
										<li>Shipping<span>Free</span></li>
										<li class="last">You Pay<span>$${Object.values(products).reduce((a,b) => a + b.totalPrice, 0)}</span></li>
									</ul>
									<div class="button5">
										<a href="/checkout" class="btn">Checkout</a>
										<a href="/shop" class="btn">Continue shopping</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!--/ End Total Amount -->
				</div>
			</div>
		</div>
	</div>
	<!--/ End Shopping Cart -->
			
	<!-- Start Shop Services Area  -->
	<section class="shop-services section">
		<div class="container">
			<div class="row">
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-rocket"></i>
						<h4>Free shiping</h4>
						<p>Orders over $100</p>
					</div>
					<!-- End Single Service -->
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-reload"></i>
						<h4>Free Return</h4>
						<p>Within 30 days returns</p>
					</div>
					<!-- End Single Service -->
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-lock"></i>
						<h4>Sucure Payment</h4>
						<p>100% secure payment</p>
					</div>
					<!-- End Single Service -->
				</div>
				<div class="col-lg-3 col-md-6 col-12">
					<!-- Start Single Service -->
					<div class="single-service">
						<i class="ti-tag"></i>
						<h4>Best Peice</h4>
						<p>Guaranteed price</p>
					</div>
					<!-- End Single Service -->
				</div>
			</div>
		</div>
	</section>

`;

let singleProduct = (product, plusMinus, deleteItem) => html `
                            <tr data-id=${product.id}>
								<td class="image" data-title="No"><img src="${product.imageUrl}" alt="#"></td>
								<td class="product-des" data-title="Description">
									<p class="product-name"><a href="/item/${product.id}">${product.title}</a></p>
									<p class="product-des">${product.description}</p>
								</td>
								<td class="price" data-title="Price"><span>$ ${product.price}</span></td>
								<td class="qty" data-title="Qty"><!-- Input Order -->
									<div class="input-group">
										<div class="button minus">
											<button type="button" class="btn btn-primary btn-number" data-type="minus" data-field="quant[1]" disabled=${ifDefined(product.count == 1 ? 'disabled' : undefined)} @click=${plusMinus} >
												<i class="ti-minus"></i>
											</button>
										</div>
										<input type="number" name="quant[1]" class="input-number"  data-min="1" data-max="100" value="${product.count}">
										<div class="button plus">
											<button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]"  @click=${plusMinus}>
												<i class="ti-plus"></i>
											</button>
										</div>
									</div>
									<!--/ End Input Order -->
								</td>
								<td class="total-amount" data-title="Total"><span>$${product.totalPrice}</span></td>
								<td class="action" data-title="Remove"><a href="javascript:void(0)" @click=${deleteItem}><i class="ti-trash remove-icon"></i></a></td>
							</tr>
`;