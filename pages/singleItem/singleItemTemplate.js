import {html} from '../../node_modules/lit-html/lit-html.js';

export let singleItemTemplate = (item, plusMinus) => html`
    <div class="container">
        <div class="single-product-wrapper">
            <div class="prod-img">
                <img src="${item.imageUrl}" >
            </div>
            <div class="options">
                <nav>
                    <a href="/home">Home</a>
                    &nbsp;/&nbsp;
                    <a href="/shop">Shop</a>
                    &nbsp;/&nbsp;<span class="select-breadcrumbs">${item.title}</span>
                </nav>
                <h2>${item.title}</h2>
                <h4>$ ${item.price}</h4>
                <p>${item.description}</p>
                <div class="select-quantity">
                    <div class="quantity">
                        <a class="minus-quantity" href="javascript:void(0)" @click=${plusMinus}>-</a>
                        <input type="number" min="1" max value="1" step="1" >
                        <a class="plus-quantity" href="javascript:void(0)" @click=${plusMinus}>+</a>
                    </div>
                    <button type="submit" name="add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
`;