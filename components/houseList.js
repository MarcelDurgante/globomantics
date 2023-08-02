import React, { useState } from 'react';
import { HouseRowMemoized } from './houseRow';

const housesData = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000,
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000,
    },
];

const HouseList = () => {
    // must call Hooks at the top level, whithin the component's function
    const [houses, setHouses] = useState(housesData);
    // why it is not display the new array?
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    };

    return (
        <>
            <div className='row mb-2'>
                <h5 className='themeFontColor text-center'>Houses currently on the market</h5>
            </div>
            <table className='table table-how'>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses
                        .map(house => (
                            <HouseRowMemoized key={house.id} house={house} />
                        ))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={addHouse}>
                Add
            </button>
        </>
    )
};

export default HouseList;