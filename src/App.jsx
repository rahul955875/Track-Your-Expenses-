import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);
  const [rowId, setRowId] = useState('')
  const [input, setinput] = useState({
    title: "",
    category: "",
    amount: "",
  });

  return (
    <>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} formState ={[input,setinput]} rowId = {rowId} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} formState ={[input,setinput]} rows={[rowId, setRowId]} />
      </div>
    </>
  );
}

export default App;
