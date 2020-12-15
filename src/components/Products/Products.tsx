import React from 'react';

import shopProducts from '../../database/shop-products.json'
import { Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = () => {
    const productList = shopProducts.products.phones;

    return (
        <div>
            <ul className="list">
                {productList.map(product => {
                    return (
                        <li className="list-item" key={product.id}>
                            {product.name}
                            <Button variant="outlined"><AddShoppingCart /></Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Product;