import React from "react";

const IncomeExpenses = () => {
	return (
		<>
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p id="money-plus" className="money plus">
					+$0.00
				</p>
			</div>
			<div className="inc-exp-container">
			<div>
				<h4>Expense</h4>
				<p id="money-plus" className="money plus">
					-$0.00
				</p>
			</div>
		</div>
		</div>
		</>
	);
};

export default IncomeExpenses;
