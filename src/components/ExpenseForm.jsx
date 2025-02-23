import React, { useState } from "react";
import Input from "./Input";
import SelectField from "./SelectField";

const ExpenseForm = ({ setExpenses, formState, rowId }) => {
  const [input, setinput] = formState;
  const [errors, setErrors] = useState({});
  const validateConfig = {
    title: [
      { required: true, message: "Please Enter Title" },
      { minWidth: 3, message: "Enter Atleast 3 Charachters long" },
    ],
    category: [{ required: true, message: "Please Select Category" }],
    amount: [{ required: true, message: "Please Enter Amount" }],
  };
  const validate = (formdata) => {
    const errorsData = {};
    Object.entries(formdata).forEach(([key, value]) => {
      validateConfig[key]?.some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minWidth && value.length < 3) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    // if (!formdata.title) {
    //   errorsData.title = "Please Enter Title";
    // }
    // if (!formdata.category) {
    //   errorsData.category = "Please Enter Category";
    // }
    // if (!formdata.amount) {
    //   errorsData.amount = "Please Enter amount";
    // }
    setErrors(errorsData);
    return errorsData;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate(input)
    const validateData = validate(input);
    console.log(validateData);
    if (Object.keys(validateData).length) return;
    if (rowId) {
      // const newExpneses = expenses.map((item) =>
      //   item.id === rowId ? newInput : item
      // );
      setExpenses((preveState)=> preveState.map((item) =>
        item.id === rowId ? input : item
      ));
      setinput({
        title: "",
        category: "",
        amount: "",
      });
      return;
    }
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
      <Input
        label="Title"
        value={input.title}
        name={"title"}
        onChange={handleChange}
        error={errors.title}
      />

      <SelectField
        label="Category"
        id="category"
        name="category"
        onChange={handleChange}
        value={input.category}
        defaultOption="Select Category"
        error={errors.category}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
      />
      <Input
        label="Amount"
        value={input.amount}
        name={"amount"}
        onChange={handleChange}
        error={errors.amount}
        type="number"
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
