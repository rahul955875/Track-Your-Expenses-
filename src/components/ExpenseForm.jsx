import React, { useState } from "react";

const ExpenseForm = ({ setExpenses }) => {
  const [errors, setErrors] = useState({});

  const validate = (formdata) => {
    const errorsData = {};
    if (Object.keys(errorsData).length) return;
    if (!formdata.title) {
      errorsData.title = "Please Enter Title";
    }
    if (!formdata.category) {
      errorsData.category = "Please Enter Category";
    }
    if (!formdata.amount) {
      errorsData.amount = "Please Enter amount";
    }
    setErrors(errorsData);
    return errorsData;
  };
  const [input, setinput] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate(input)
    const validateData = validate(input);
    // console.log(validateData)
    if (Object.keys(validateData).length) return;
    setExpenses((preveState) => [
      ...preveState,
      { ...input, id: crypto.randomUUID() },
    ]);
    setinput({
      title: "",
      category: "",
      amount: "",
    });
  };
  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={input.title}
          name="title"
          onChange={handleChange}
        />
        <p className="err">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={input.category}
          name="category"
          onChange={handleChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
        <p className="err">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={input.amount}
          name="amount"
          onChange={handleChange}
        />
        <p className="err">{errors.amount}</p>
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
