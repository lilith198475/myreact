import ExpenseItem from "./ExpenseItem";
import Cards from "./Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Cards className="expenses">
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
  );
}

export default Expenses;
