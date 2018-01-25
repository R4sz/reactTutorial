import React from 'react'
import {reduce} from "lodash";

const ExpenseResult = ({expenses}) => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            < td> {reduce(expenses, (result, e) => {
                    return result + e.amount.value
                }, 0
            )
            }
            </td>
        </tr>
    )
}

export default ExpenseResult