import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>{" "}
        {/* for eventlistener using function name not call it. */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
