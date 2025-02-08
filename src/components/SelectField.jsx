import React from "react";

const SelectField = ({
  label,
  name,
  id,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} name={name} onChange={onChange}>
        <option value="" hidden>
          {defaultOption}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}

      </select>
      <p className="err">{error}</p>
    </div>
  );
};

export default SelectField;
