import React from 'react';

import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useStore } from "../../context/shopContext";
import { removeCart } from '../../reducer/action';

const Cart = () => {

    const { store, dispatch } = useStore();

    return (
        <div>
            <ul className="list">
                {store.cart.map((product) => {
                    return (
                        <li className="list-item" key={product.id}>
                            {product.name}
                            <Button variant="outlined" onClick={() => dispatch(removeCart(product.id))}>
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