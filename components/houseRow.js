import React from 'react';
import currencyFormatter from '@/helpers/currencyFormatter';
// distructuring prop house in a deper level
const HouseRow = ({ house }) => {
    let priceTd;
    if (house.price < 500000) {
        priceTd = <td>{currencyFormatter.format(house.price)}</td>;
    } else {
        priceTd = <td className='text-primary'>{currencyFormatter.format(house.price)} </td>
    }

    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {priceTd}
        </tr>
    )
}

const HouseRowMemoized = React.memo(HouseRow);
export default HouseRow;
export { HouseRowMemoized };