import React from 'react';
import currencyFormatter from '@/helpers/currencyFormatter';
// distructuring prop house in a deper level
const HouseRow = ({ house }) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price && <td className={`${house.price >= 500000 ? 'text-primary' : ''}`}>{currencyFormatter.format(house.price)}</td>}
        </tr>
    )
}

const HouseRowMemoized = React.memo(HouseRow);
export default HouseRow;
export { HouseRowMemoized };