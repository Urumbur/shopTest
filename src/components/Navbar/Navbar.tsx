import React, {useContext} from 'react';

import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { ShopContext } from '../../context/shopContext';

const Navbar = () => {
    const {store} = useContext(ShopContext);
    return(
        <div className="navbar">
            <Link className="button" to="/"><Button variant="outlined">Products</Button></Link>
            <Link className="button" to="/cart"><Button variant="outlined"><ShoppingCart /> ({store.cart.length})</Button></Link>
        </div>
    )
}

export default Navbar;
