import React, { useEffect, useState } from "react";
import AddExpenseComponent from "../../Components/AddExpenseComponent/AddExpenseComponent";
import BudgetInfoCard from "../../Components/BudgetInfoCard/BudgetInfoCard";
import ExpensesComponent from "../../Components/ExpensesComponent/ExpensesComponent";

import "./HomePage.css";

const HomePage = () => {
  const [expenseCardData, setExpenseCardData] = useState([]);

  const [budget, setBudget] = useState(4000);
  const [remaining, setRemaining] = useState(4000);
  const [spent, setSpent] = useState(0);

  const [text, setText] = useState("Hello World!!");

  useEffect(() => {
    console.log("Hello...");
  }, [remaining]);

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
      <h1>{text}</h1>
      <button onClick={() => setText("Hello India!")}>Change Text</button>
      <h1>
        My Budget Planner Hello World Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illo quisquam saepe rerum! Vel ullam dolores ipsam
        modi reiciendis tenetur a quisquam autem et, dolor eos ex tempora
        assumenda alias provident est repellendus velit totam sit voluptatum?
        Voluptate, libero iure et, inventore quaerat cumque provident magni
        rerum laborum voluptates impedit magnam, dignissimos suscipit! Quisquam
        id aliquam corrupti illo fuga mollitia officia.
      </h1>
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
