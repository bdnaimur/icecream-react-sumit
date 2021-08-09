import React, { useState } from 'react';
import Builder from '../Bilder/Builder';
import Icecream from '../Icecream/Icecream';

const Home = () => {
    const [icecreamData, setIcecreamData] = useState({
        items:{
            vanilla:30,
            chocolate: 45,
            orange: 25,
            strawbery: 35
        },
        scoops:[],
        totalPrice: 0
    })
    const {items, scoops} = icecreamData;
    const handleClick = function(scoop) {
        const countScoop = [...scoops]
        countScoop.push(scoop);
        setIcecreamData({
            scoops:countScoop
        })
    }
    console.log(icecreamData);
    return (
        <div>
            <Icecream></Icecream>
            <Builder items = {items} handleClick = {handleClick}></Builder>
        </div>
    );
};

export default Home;