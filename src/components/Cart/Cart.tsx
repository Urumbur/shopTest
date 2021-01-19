import React from 'react';

import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useStore } from "../../context/shopContext";

const Cart = () => {

    const { store, dispatch } = useStore();

    return (
        <div>
            <ul className="list">
                {store.cart.map((product, index) => {
                    return (
                        <li className="list-item" key={index}>
                            {product.name} - {product.count}
                            <Button variant="outlined" onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: product.id})}>
                                <Delete />
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart;
