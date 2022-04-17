import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onsetForm = (isShowForm)=>{
    setShowForm(isShowForm);
  }

  const onAddNewExpense =(event)=>{
    setShowForm(true);
  }

  
  if (showForm){
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onsetForm={onsetForm} />
    </div>)
    }

  return(  
  <div className="new-expense">
    <button onClick={onAddNewExpense}>Add NewExpense Expense</button>
    </div>
  );
};

export default NewExpense;
