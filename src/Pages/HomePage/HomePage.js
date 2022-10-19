import React, { useState } from "react";
import AddExpenseComponent from "../../Components/AddExpenseComponent/AddExpenseComponent";
import BudgetInfoCard from "../../Components/BudgetInfoCard/BudgetInfoCard";
import ExpensesComponent from "../../Components/ExpensesComponent/ExpensesComponent";

import "./HomePage.css";

const HomePage = () => {
  const [expenseCardData, setExpenseCardData] = useState([]);

  const [budget, setBudget] = useState(4000);
  const [remaining, setRemaining] = useState(4000);
  const [spent, setSpent] = useState(0);

  const getData = (name, cost) => {
    if (remaining >= cost) {
      setExpenseCardData([
        ...expenseCardData,
        { expenseName: name, expenseCost: cost },
      ]);
      setRemaining(remaining - cost);
      setSpent(spent + parseInt(cost));
    } else {
      alert("You don't have enought money to add this!!");
    }
  };

  return (
    <div className="homepage">
      <h1>My Budget Planner</h1>
      <div className="homepage__budgetinfocards">
        <BudgetInfoCard bgColor="#E2E3E5" text="Budget: Rs" data={budget} />
        <BudgetInfoCard
          bgColor="#D4EDDA"
          text="Remaining: Rs"
          data={remaining}
        />
        <BudgetInfoCard
          bgColor="#CCE5FF"
          text="Spent so far: Rs"
          data={spent}
        />
      </div>
      <ExpensesComponent expenseCardData={expenseCardData} />
      <AddExpenseComponent getData={getData} />
    </div>
  );
};

export default HomePage;
