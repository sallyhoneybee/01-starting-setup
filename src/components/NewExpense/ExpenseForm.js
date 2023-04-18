import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formIsShowing, setFormIsShowing] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   // this spread operator takes an object pulls all the key value pairs and add to the new object
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsShowing(false);
    setHideButton(false);

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const formHandler = () => {
    setFormIsShowing(true);
    setHideButton(true);
  };

  const cancelHandler = () => {
    setFormIsShowing(false);
    setHideButton(false);
  };

  let expensesform = <span></span>;
  let button = (
    <button className="new-expense__action" onClick={formHandler}>
      Add New Expense
    </button>
  );

  if (hideButton === true) {
    button = <span></span>;
  }
  if (formIsShowing === true) {
    expensesform = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div>
      {expensesform}
      {button}
    </div>
  );
};

export default ExpenseForm;
