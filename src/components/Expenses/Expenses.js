import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const newExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {newExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            ></ExpenseItem>
          );
        })}
      </Cards>
    </div>
  );
};

export default Expenses;
