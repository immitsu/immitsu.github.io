import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const PasswordField = ({ value, error, onChange }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isRemember, setIsRemember] = useState(false)

  function changeVisibility() {
    setIsVisible((prev) => !prev)
  }

  function changeRemember() {
    setIsRemember((prev) => !prev)
  }

  const attr = {
    type: !isVisible ? 'password' : 'text',
    iconClx: `field__show-icon ${isVisible ? 'on' : 'off'}`,
    iconTitle: !isVisible ? 'Show password' : 'Hide password'
  }

  return (
    <div className="field">
      <div className="field__details">
        <label htmlFor="password">Password</label>
        <span className="smaller error">{error}</span>
      </div>
      <span className="field__wrapper">
        <input
          type={attr.type}
          id="password"
          name="password"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          aria-invalid={!error}
          value={value}
          onChange={onChange}
        />
        <div className={attr.iconClx}>
          <button
            type="button"
            title={attr.iconTitle}
            aria-label={attr.iconTitle}
            onClick={changeVisibility}
          ></button>
        </div>
      </span>

      <div className="field__remember-checkbox">
        <input
          type="checkbox"
          name="remember"
          id="remember"
          className="vh"
          checked={isRemember}
          onChange={changeRemember}
        />
        <label htmlFor="remember">
          <span className="tick"></span>
          <span className="smaller">Remember me</span>
        </label>
      </div>
    </div>
  )
}

PasswordField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}
