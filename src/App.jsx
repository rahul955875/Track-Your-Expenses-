import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'

function App() {
  const [expenses, setExpenses] = useState(expenseData)

  return (
    <>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses = {setExpenses} />
        <ExpenseTable expenses = {expenses} setExpenses = {setExpenses} />
      </div>
    </>
  )
}

export default App
