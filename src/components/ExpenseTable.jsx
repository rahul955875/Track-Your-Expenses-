import React, { useState } from "react";
import ContextMenu from "./ContextMenu";

const ExpenseTable = ({ expenses, setExpenses }) => {
  const [query, setQuery] = useState("");
  const [rowId, setRowId] = useState('')
  const [elementStyle, setElementStyle] = useState({});
  const handleAscending = () => {
    // const AscendingExpneses = expenses.sort((a,b)=> a.amount - b.amount)
    // setExpenses(AscendingExpneses)
    const AscendingOrderExp = expenses.toSorted((a, b) => a.amount - b.amount);
    setExpenses(AscendingOrderExp);
  };
  const handleDescending = () => {
    const DecendingOrderExp = expenses.toSorted((a, b) => b.amount - a.amount);
    setExpenses(DecendingOrderExp);
  };
  console.log("rendering");
  const totalAmount = expenses
    .filter((item) => item.category.toLowerCase().includes(query))
    .map((item) => Number(item.amount))
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <ContextMenu elementStyle={elementStyle} rowId={rowId} />
      <table className="expense-table" onClick={()=>setElementStyle({})}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select onChange={(e) => setQuery(e.target.value)}>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                  onClick={handleAscending}
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  onClick={handleDescending}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .filter((item) => item.category.toLowerCase().includes(query))
            .map(({ id, title, category, amount }) => (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setElementStyle({ left: e.clientX + 5, top: e.clientY + 5 });
                  setRowId(id)
                }}
              >
                <td>{title}</td>
                <td>{category}</td>
                <td>₹{amount}</td>
              </tr>
            ))}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹{totalAmount}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
