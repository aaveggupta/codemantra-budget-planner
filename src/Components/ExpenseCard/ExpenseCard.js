import React from "react";

import "./ExpenseCard.css";

const ExpenseCard = (props) => {
  return (
    <div className="expensecard">
      <h4>{props.expenseName} HELLO WORLD</h4>
      <div>
        <h5>{props.expenseAmount}</h5>
      </div>
    </div>
  );
};

export default ExpenseCard;
