import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

function App() {

  const [expenses, setExpenses] = useLocalStorage('expeseTableData',expenseData);
  const [rowId, setRowId] = useLocalStorage('storeRowid','')
  const [input, setinput] = useLocalStorage('storeInput',{
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
