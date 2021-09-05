import {html} from '../../node_modules/lit-html/lit-html.js'
import {sideBannerTemplate} from './1.sideBanner/sideBannerTemplate.js';
import { smallBannerTemaplte } from './2.smallBanner/smallBannerTemplate.js';
import { trendingItemTemplate } from './3.trendingItem/trendingItemTemplate.js';
import {mediumBannerTemplate} from './4.mediumBanner/mediumBannerTemplate.js';
import { hotItemsTemplate } from './5.hotItems/hotItemsTemplate.js';
import { yellowBannerTemplate } from './6.yellowBanner/yellowBannerTemplate.js';
import { onSaleBestSaleTemplate } from './7.onSaleBestSale/onSaleBestSaleTemplate.js';
import { blogSectionTemplate } from './8.blogSection/blogSectionTemplate.js';
import { shopServiceTemplate } from './9.shopService/shopServiceTemplate.js';
import { newsLetterTemplate } from './10.newsLetter/newsLetterTemplate.js';

export let homePageTemplate = (product) => html`
<section class="hero-slider">
    ${sideBannerTemplate(product)}
</section>
<section class="small-banner section">
    ${smallBannerTemaplte()}
</section>
<div class="product-area section">
    ${trendingItemTemplate(product)}
</div>
  <div class="midium-banner">
      ${mediumBannerTemplate(product)}
  </div>
  <div class="product-area most-popular section">
      ${hotItemsTemplate()}
  </div>
  <section class="section free-version-banner">
      ${yellowBannerTemplate()}
  </section>
  <section class="shop-home-list section">
      ${onSaleBestSaleTemplate()}
  </section>
  <section class="shop-blog section">
      ${blogSectionTemplate()}
  </section>
  <section class="shop-services section home">
      ${shopServiceTemplate()}
  </section>
  <section class="shop-newsletter section">
      ${newsLetterTemplate()}
  </section>
`;