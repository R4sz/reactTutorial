import React from 'react'

const AmountCell = ({amount}) => {
    return <td>
        {amount.currency === "$" ? amount.currency + amount.value : amount.value + ' ' + amount.currency}
        </td>
}

export default AmountCell