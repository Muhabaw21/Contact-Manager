import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
const TextInputGroup = ({
  label,
   name, 
   value,
   type,
    onChange,
    error,
  
    placeholder}) => {
  return (
    <div className="form-group">
    <label htmlFor="name">{label}</label>
    <input 
    type={type}
    className= {classnames('form-control form-control-lg', {'is-invalid': error})}
    name= {name}
    placeholder= {placeholder}
    value={value}
    onChange ={onChange}
    />
    {error && <div className="form-control form-control-lg"> {error}</div>}
    </div>
  )
};
TextInputGroup.propTypes ={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup