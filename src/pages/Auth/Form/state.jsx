import { useState } from 'react'

// Согласно спецификации HTML5
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export function useComponentState() {
  const [state, setState] = useState({
    email: '',
    password: '',
    wasSubmitted: false,
    errors: {
      email: '',
      password: ''
    }
  })

  function isValid(errors) {
    let valid = true
    Object.values(errors).some((error) => error.length > 0 && (valid = false))
    return valid
  }

  function onErrors(fields, errors) {
    for (const field of fields) {
      const { name, value } = field

      if (value.length === 0) {
        errors[name] = 'Enter a value'
        continue
      }

      if (name === 'email') {
        errors.email = !emailRegExp.test(value) ? 'Value is not valid' : ''
      }

      if (name === 'password') {
        errors.password = value.length < 5 ? 'At least 5 characters' : ''
      }
    }
  }

  function onChange(e) {
    const { name, value } = e.target
    const { wasSubmitted, errors } = state

    if (wasSubmitted) {
      onErrors([{ name, value }], errors)
    }

    setState((prev) => ({
      ...prev,
      [name]: value,
      errors
    }))
  }

  function onSubmit(e) {
    e.preventDefault()

    const { email, password, wasSubmitted, errors } = state

    if (!wasSubmitted) {
      const [emailField, passwordFeild] = e.target
      onErrors([emailField, passwordFeild], errors)

      setState((prev) => ({
        ...prev,
        wasSubmitted: true,
        errors: errors
      }))
    }

    if (isValid(errors)) {
      console.info({ email, password })
    } else {
      console.error({ email, password })
    }
  }

  return [state, { onChange, onSubmit }]
}
