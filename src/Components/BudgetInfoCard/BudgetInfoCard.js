import React from "react";

import "./BudgetInfoCard.css";

const BudgetInfoCard = (props) => {
  return (
    <div className="budgetinfocard" style={{ backgroundColor: props.bgColor }}>
      <p>{`${props.text} ${props.data}`}</p>
    </div>
  );
};

export default BudgetInfoCard;
