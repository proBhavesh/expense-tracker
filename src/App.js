import React from "react";
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import IncomeExpenses from "./Component/IncomeExpenses";
import TransactionList from "./Component/TransactionList";
import AddTransaction from "./Component/AddTransaction";

const App = () => {
	return (
		<>
			<h1>This is App.js</h1>
			<Header />
			<Balance />
			<IncomeExpenses />
			<TransactionList />
			<AddTransaction />
		</>
	);
};

export default App;
