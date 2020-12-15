import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Navbar = () => {

    return(
        <div className="navbar">
            <Link className="button" to="/"><Button variant="outlined">Products</Button></Link>
            <Link className="button" to="/cart"><Button variant="outlined"><ShoppingCart /> ()</Button></Link>
        </div>
    )
}

export default Navbar;