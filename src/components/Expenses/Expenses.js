import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const yearFilter = (expenseArray) => {
    return String(expenseArray.date.getFullYear()) === filteredYear;
  };

  return (
    <div>
      <ExpensesFilter onSelectedYear={selectedYearHandler} />
      <Card className="expenses">
        {props.expenses.filter(yearFilter).map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
