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
        My Budget Planner is the best. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorem est sint esse magni accusamus iusto ad earum
        nisi cumque! Expedita consequuntur debitis eaque iure eligendi vel a
        labore delectus voluptates illo quas, reprehenderit possimus, vitae
        porro nostrum, nesciunt mollitia suscipit praesentium? Deserunt hic a,
        dignissimos suscipit reprehenderit quas fuga ducimus temporibus?
        Veritatis enim eveniet voluptatem provident, repellendus neque, dicta
        modi sint in placeat vero cumque assumenda. Cupiditate quae, repudiandae
        labore iusto voluptatem accusamus tempore corporis nulla natus ad.
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
