import React from 'react'
import PropTypes from 'prop-types'

export const EmaiField = ({ value, error, onChange }) => {
  return (
    <div className="field">
      <div className="field__details">
        <label htmlFor="email">Email</label>
        <span className="smaller error">{error}</span>
      </div>
      <input
        type="email"
        name="email"
        id="email"
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        aria-invalid={!error}
        autoFocus
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

EmaiField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}
