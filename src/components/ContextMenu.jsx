import React from "react";

export default function ContextMenu({
  elementStyle,
  rowId,
  setExpenses,
  formState,
  expenses,
}) {
  const [input, setinput] = formState;
  if (!elementStyle.left) return;
  return (
    <div className="context-menu" style={elementStyle}>
      <div
        onClick={() => {
          const newInput = expenses.find((product) => product.id === rowId);
          setinput(newInput);
          
        }}
      >
        Edit
      </div>
      <div
        onClick={() =>
          setExpenses((prevState) =>
            prevState.filter((expenseItem) => expenseItem.id !== rowId)
          )
        }
      >
        Delete
      </div>
    </div>
  );
}
