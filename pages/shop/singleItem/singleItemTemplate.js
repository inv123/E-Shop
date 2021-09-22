import {html} from '../../../node_modules/lit-html/lit-html.js';

export let singleItemTemplate = (itemInfo) => html`
    <div class="container">
        <div class="single-product-wrapper">
            <div class="prod-img">
                <img src="${itemInfo.currentItem.imageUrl}" >
            </div>
            <div class="options">
                <nav>
                    <a href="/home">Home</a>
                    &nbsp;/&nbsp;
                    <a href="/shop">Shop</a>
                    &nbsp;/&nbsp;<span class="select-breadcrumbs">${itemInfo.currentItem.title}</span>
                </nav>
                <h2>${itemInfo.currentItem.title}</h2>
                <h4>$ ${itemInfo.currentItem.price}</h4>
                <p>${itemInfo.currentItem.description}</p>
                ${localStorage.getItem('authToken')
                ? html` <form @submit=${itemInfo.addToCart}>
                            <div class="select-quantity" >
                                <div class="quantity">
                                    <a class="minus-quantity" href="javascript:void(0)" @click=${itemInfo.plusMinus}>-</a>
                                    
                                    <input type="number" min="1" max value="1" step="1" name="count">
                                    <input class=hidden-price value=${itemInfo.currentItem.price} name="price">
                                    <a class="plus-quantity" href="javascript:void(0)" @click=${itemInfo.plusMinus}>+</a>
                                </div>
                                <button type="submit" name="add-to-cart">Add to cart</button>
                            </div>
                        </form>`
                : ''}
            </div>
        </div>
    </div>
`;