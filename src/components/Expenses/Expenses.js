import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Cards from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setSelectedYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((value, index) => {
          return (
            <ExpenseItem
              key={index}
              title={value.title}
              date={value.date}
              amount={value.amount}
            ></ExpenseItem>
          );
        })}
      </Cards>
    </div>
  );
};

export default Expenses;
