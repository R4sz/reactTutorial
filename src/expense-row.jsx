import React from 'react'
import DataCell from './data-cell'
import CategoryCell from './category-cell'
import DescriptionCell from './description-cell'
import AmountCell from './amount-cell'
import StatusCell from './status-cell'

const ExpenseRow = ({singleExpense}) => {
    return (
        <tr>
            <DataCell date={singleExpense.date}/>
            <CategoryCell category={singleExpense.category}/>
            <DescriptionCell description={singleExpense.description}/>
            <AmountCell amount={singleExpense.amount}/>
            <StatusCell status={singleExpense.status}/>
        </tr>
    )
}

export default ExpenseRow