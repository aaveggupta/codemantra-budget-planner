import React, { useState } from "react";

import "./AddExpenseComponent.css";

const AddExpenseComponent = (props) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.getData(expenseName, expenseCost);
    setExpenseName("");
    setExpenseCost("");
  };

  return (
    <div className="addexpensecomponent">
      <h1>Add Expense Component</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <div>
            <label htmlFor="expensename">Name</label>
            <input
              type="text"
              name="expensename"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="expensecost">Cost (Rs)</label>
            <input
              type={"number"}
              name="expensecost"
              value={expenseCost}
              onChange={(e) => setExpenseCost(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddExpenseComponent;
