import React, { useEffect, useState } from "react";
import AddExpenseComponent from "../../Components/AddExpenseComponent/AddExpenseComponent";
import BudgetInfoCard from "../../Components/BudgetInfoCard/BudgetInfoCard";
import ExpensesComponent from "../../Components/ExpensesComponent/ExpensesComponent";

import "./HomePage2.css";

const HomePage2 = () => {
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
      <h1>HELLLLLLOOOOO WORLD</h1>
      <button onClick={() => setText("Hello India!")}>Change Text</button>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque eum,
        modi ea harum ipsum temporibus officia dolorem similique libero deserunt
        vero expedita natus accusamus nihil enim. Aliquam quibusdam vero
        quisquam nesciunt natus fugiat sit, deserunt voluptatem voluptate quas
        excepturi ad, nisi modi reprehenderit ratione, eum aliquid omnis ea
        suscipit porro delectus earum facilis unde. Laudantium illo maiores
        cumque voluptates nulla itaque atque perspiciatis. Voluptates culpa
        doloribus expedita sequi rerum illum et facilis fuga quibusdam
        voluptatem ipsa ab explicabo, repellat quas earum laborum esse tempore?
        Sapiente eos consequuntur iste voluptatibus optio, debitis cupiditate
        repudiandae et consequatur alias explicabo voluptates facere quas,
        dolorum sunt placeat exercitationem commodi animi unde laudantium
        corporis atque cumque officiis nostrum. Labore perferendis quo nulla
        odio inventore numquam, neque facilis exercitationem molestiae, odit
        optio!
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

export default HomePage2;
