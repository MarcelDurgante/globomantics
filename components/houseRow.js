// distructuring prop house in a deper level
const HouseRow = ({ house }) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{house.price}</td>
        </tr>
    )
}

export default HouseRow;