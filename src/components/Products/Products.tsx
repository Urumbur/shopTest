import React, {useContext} from 'react';

import shopProducts from '../../database/shop-products.json';
import {ShopContext} from '../../context/shopContext';
import { addCart } from '../../reducer/action';
import { Button } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = () => {
    const productList = shopProducts.products.phones;
    const {dispatch} = useContext(ShopContext);
    return (
        <div>
            <ul className="list">
                {productList.map(product => {
                    return (
                        <li className="list-item" key={product.id}>
                            {product.name}
                            <Button variant="outlined" onClick={() => dispatch(addCart(product))}><AddShoppingCart /></Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Product;
