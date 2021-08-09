import React from 'react';
import Item from './Item/Item';

const Items = ({items, handleClick}) => {
    const flavours = Object.keys(items);
    console.log("flavour" , flavours);
    return (
        <div class="react" id="items">
                <ul>
                 {flavours.map(item => <Item item = {item} handleClick = {handleClick}></Item>)}
                </ul>
        </div>
    );
};

export default Items;