import React from 'react'
import {map} from 'lodash'
import ExpenseRow from './expense-row'
import ExpenseResult from './expense-result'


class ExpenseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>

                {
                    map(this.state.expenses, (singleExpense) => (
                        <ExpenseRow singleExpense={singleExpense}/>
                    ))
                }

                <ExpenseResult expenses={this.state.expenses}/>

                </tbody>
            </table>
        )

    }
}

export default ExpenseList