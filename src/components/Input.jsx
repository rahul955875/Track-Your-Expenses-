import React from 'react'

const Input = ({label, value, name, onChange,error,type}) => {
  return (
    <>
<div className="input-container">
        <label htmlFor={name}>{label}</label>
        <input
        id={name}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
        <p className="err">{error}</p>
      </div>
    </>
  )
}

export default Input