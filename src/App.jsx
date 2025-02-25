import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {

  const [expenses, setExpenses] = useState(  JSON.parse(localStorage.getItem('Expenses')) || expenseData);
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
        <ExpenseForm setExpenses={setExpenses} formState ={[input,setinput]} expenses={expenses} rowId = {rowId} setRowId={setRowId} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} formState ={[input,setinput]} rows={[rowId, setRowId]} />
      </div>
    </>
  );
}

export default App;
