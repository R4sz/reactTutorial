import React from 'react'
import {expenses as initialExpenses} from './data'
import ExpenseList from './expense-list'

class App extends React.Component {

	render() {
		return (
			<div>
				<ExpenseList expenses={initialExpenses}/>

                {/*<TopBar/>*/}
                {/*<WelcomeComponent variable={'matrix'}/>*/}

				<div className='container-fluid'>
					<div className='row fill-height'>
						<div className='col-md-8 pb-3'>
						</div>
						<div className='col-md-4'>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
