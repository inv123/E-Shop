import { ifDefined } from '../node_modules/lit-html/directives/if-defined.js';
import {html} from '../node_modules/lit-html/lit-html.js';

export let modalTemplate = (modalInfo) => html`
    <div class="modal ${ifDefined(!modalInfo.modalParams ? 'fade' : '')}" id="exampleModal" tabindex="-1" role="dialog" style="background: #000000c7;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						
					</div>
					<div class="modal-body" style="padding-top: 100px">
						<div class="row no-gutters">
							<div class="col-lg-6 offset-lg-3 col-12">
								
								<h3 style="font-size:30px;color:#333;">Success<h3>
								<p style="display:block; margin-top:20px; color:#888; font-size:14px; font-weight:400;">Your order has been placed successfully! You will recieve email with shipping tracking number so you can check your order.</p>
								<div class="button" style="margin-top:30px;">
                                
                                <a href="javascript:void(0)" @click=${modalInfo.closeWindow}><span class="ti-close" aria-hidden="true"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`;