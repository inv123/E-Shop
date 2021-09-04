import {html} from '../../node_modules/lit-html/lit-html.js'
import {sideBannerTemplate} from './1.sideBanner/sideBannerTemplate.js';

export let homePageTemplate = () => html`
<div class="hero-slider">
    ${sideBannerTemplate()}
</div>
  
`;