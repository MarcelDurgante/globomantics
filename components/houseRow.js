import React from 'react';
import currencyFormatter from '@/helpers/currencyFormatter';
// distructuring prop house in a deper level
const HouseRow = ({ house, selectHouse }) => {
    return (
        <tr onClick={() => selectHouse(house)}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {/* if house.price is not zero or undefined (truthy) the td will render conditionally */}
            {house.price && <td className={`${house.price >= 500000 ? 'text-primary' : ''}`}>{currencyFormatter.format(house.price)}</td>}
        </tr>
    )
}

const HouseRowMemoized = React.memo(HouseRow);
export default HouseRow;
export { HouseRowMemoized };