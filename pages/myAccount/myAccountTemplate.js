import {html} from '../../node_modules/lit-html/lit-html.js';

export let myAccountTemplate = (userDetails) => html`
	<section class="shop checkout section ">
			<div class="container">
				<div class="row account"> 
					<div class="col-lg-8 col-12">
						<div class="checkout-form">
							<h2 style="margin-bottom: 20px">Account Information</h2>
                            <p style="margin-bottom:50px">Email:  <strong>${userDetails.email}</strong></p>
							
							<!-- Form -->
							<form class="form" method="post" action="#" @submit=${userDetails.updateUserDetails}>
								<div class="error-message"></div>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>First Name<span>*</span></label>
											<input type="text" name="name" placeholder="" .value=${userDetails.name} required="required">
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Last Name<span>*</span></label>
											<input type="text" name="lastName" placeholder="" required="required" .value=${userDetails.lastName}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Email Address<span>*</span></label>
											<input type="email" name="email" placeholder="" required="required" .value=${userDetails.email}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Phone Number<span>*</span></label>
											<input type="number" name="phone" placeholder="" required="required" .value=${userDetails.phone}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Country<span>*</span></label>
											<input type="text" name="country" placeholder="" required="required" .value=${userDetails.country}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>State / Divition<span>*</span></label>
											<input type="text" name="state" placeholder="" required="required" .value=${userDetails.state}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Address Line 1<span>*</span></label>
											<input type="text" name="address" placeholder="" required="required" .value=${userDetails.mainAddress}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Address Line 2</label>
											<input type="text" name="second-address" placeholder="" .value=${userDetails.secondAddress}>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<label>Postal Code<span>*</span></label>
											<input type="text" name="post-code" placeholder="" required="required" .value=${userDetails.postCode}>
										</div>
									</div>
                                    <div class="col-lg-6 col-md-6 col-12">
										<div class="form-group">
											<input type="submit" name="button" style="background: #fd7e14">
										</div>
									</div>
									
								</div>
							</form>
							<!--/ End Form -->
						</div>
					</div>
					
                </div>
			</div>
		</section>
		
		
		

       
`;