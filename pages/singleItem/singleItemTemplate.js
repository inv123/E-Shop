import {html} from '../../node_modules/lit-html/lit-html.js';

export let singleItemTemplate = (item) => html`
    <div class="container">
        <div class="product-wrapper">
            <div class="prod-img">
                <img src="${item.imageUrl}">
            </div>
            <div class="options">
                <nav>
                    <a href="/home">Home</a>
                    "&nbsp;/&nbsp;"
                    <a href="/shop">Shop</a>
                    "&nbsp;/&nbsp;${item.title}"
                </nav>
                <h4>${item.title}</h4>
                <h5>$ ${item.price}</h5>
            </div>
        </div>
    </div>
`;