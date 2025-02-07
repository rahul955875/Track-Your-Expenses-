import React, { useState } from "react";

const ExpenseForm = ({setExpenses}) => {
  const [input, setinput] = useState({
    title : '',
    category : '',
    amount : ''
  })
    const handleSubmit = (e)=>{
        e.preventDefault()
        setExpenses((preveState)=> [...preveState, {...input, id : crypto.randomUUID()}])
       setinput({
        title : '',
        category : '',
        amount : ''
       })
    }
    const handleChange = (e)=>{
      setinput({...input, [e.target.name]: e.target.value})
    }
    
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input type="text" value={input.title} name="title" onChange={handleChange} />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" value={input.category} name="category" onChange={handleChange}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={input.amount} name="amount" onChange={handleChange} />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
