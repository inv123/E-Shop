import {html} from '../../../node_modules/lit-html/lit-html.js';

export let yellowBannerTemplate = () => html`
  <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8 offset-md-2 col-xs-12">
                    <div class="section-title mb-60">
                        <span class="text-white wow fadeInDown" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">Are you ready?</span>
                        <h2 class="text-white wow fadeInUp" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">Shop now and follow the trend!</h2>
                        <p class="text-white wow fadeInUp" data-wow-delay=".6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">Try our new collection for man, woman, kids,<br> accessories and more and more.</p>

                        <div class="button">
                            <a href="/shop"  rel="nofollow" class="btn wow fadeInUp" data-wow-delay=".8s">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;