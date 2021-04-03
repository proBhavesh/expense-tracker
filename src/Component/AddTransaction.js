import React from 'react'

export default function AddTransaction() {
	return (
		<>
			<h3>Add new transaction</h3>
			<form >
			<div className="form-control">
			<label htmlFor="text">Text</label>
			<input type="text" placeholder="Enter text..." />
			</div>
			<div className="form-control">
				<label htmlFor="amount">
					amount <br/>
					(negative - expense, positive - income)
				</label>
				<input type="text" placeholder="Enter text..." />
			</div>
			</form>
		</>
	)
}