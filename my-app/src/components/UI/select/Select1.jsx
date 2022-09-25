//Select1.jsx
import React from 'react'
import PropTypes from "prop-types";

function Select1({options, defaultValue, value, onChange }) {
  return (
    <select 
      value={value} 
      onChange={e=>onChange(e.target.value)} >
      <option disabled={true} value="" > {defaultValue} </option>
   
      {options.map(option => 
        <option key={option.value} value={option.value}> 
            {option.name} 
        </option>
      )}
    </select>
  )
}

Select1.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select1
