import React, { useState, useEffect } from 'react';
import { HouseRowMemoized } from './houseRow';

const HouseList = () => {
    // must call Hooks at the top level, whithin the component's function
    const [houses, setHouses] = useState([]);
    // make the function passed into use effect async but this would make the function return and useEffect can't work with that. So we wrap the call to fetch in an extra function that is async and call that.To get to the response data a json function can be called on the response object. This is also an asynchronous operation we can awit. 
    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        };
        fetchHouses();
    }, []);

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