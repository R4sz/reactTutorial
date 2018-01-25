import React from 'react'

const StatusCell = ({status}) => {
    return  (
        <td>
            {status ? 'DONE' : 'PENDING'}
        </td>
    )
}

export default StatusCell