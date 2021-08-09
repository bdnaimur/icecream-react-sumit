import React from 'react';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';

const Builder = ({items, handleClick}) => {
    
    return (
        <div class="builder">
              <h3>Build your own Ice Cream Sundae</h3>
              <Items items = {items} handleClick = {handleClick}></Items>
              <TotalPrice></TotalPrice>
              
              <button type="button" onclick="next()" class="order rounded">
                Add to Cart
              </button>
            </div>
    );
};

export default Builder;