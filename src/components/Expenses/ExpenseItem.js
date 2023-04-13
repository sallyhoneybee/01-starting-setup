import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // assign an initial value for the state passed as an argument that will only evaluated once
  // title is the value and setTitile is the function
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // function will get react to evaluate and queue the setTitle in the function component

    setTitle("updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* only point to clickHandler and not pass it because if we clickHandler() it will be called once the JSX code block is being evaluated and not only when we click the button */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
