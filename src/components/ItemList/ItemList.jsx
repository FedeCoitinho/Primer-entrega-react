import React from "react";
import Item from "../Item/Item";

const ItemList = ( {productos}) => {

    return (
        <div>
            <h2>Productos</h2>
            <div>
                {productos.map ( (prod) => <Item producto={prod}  key={prod.id} />) }
            </div>
        </div>
    )
}
export default ItemList