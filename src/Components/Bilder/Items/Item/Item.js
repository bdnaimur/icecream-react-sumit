import React from 'react';

const Item = ({item, handleClick}) => {
    return (
        <li class="react item" id="item">
        <span>{item}</span>
        <span class="quantity"></span>
        <div class="right">
          <button onClick = {()=>{handleClick(item)}} type="button" class="plus rounded">+</button>
          <button type="button" class="minus rounded">-</button>
        </div>
      </li>
    );
};

export default Item;