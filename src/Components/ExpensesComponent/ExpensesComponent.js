import React, { useState } from "react";
import ExpenseCard from "../ExpenseCard/ExpenseCard";

import { expenseCardContent } from "../../Data/data";

import "./ExpensesComponent.css";

const ExpensesComponent = (props) => {
  return (
    <div className="expensescomponent">
      <h1>Expenses</h1>
      <input type="text" placeholder="Type to Search..." />
      <div>
        {props.expenseCardData.map((expense, index) => (
          <ExpenseCard
            key={index}
            expenseName={expense.expenseName}
            expenseAmount={expense.expenseCost}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpensesComponent;
