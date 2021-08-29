import React from 'react'
import { EmaiField, PasswordField, Links } from './components'
import { useComponentState } from './state'
import './style.css'

export function Form() {
  const [state, { onChange, onSubmit }] = useComponentState()

  return (
    <>
      <h1>Test account</h1>
      <h2 className="smaller">All fields are required</h2>

      <form noValidate onSubmit={onSubmit}>
        <EmaiField
          value={state.email}
          error={state.errors.email}
          onChange={onChange}
        />
        <PasswordField
          value={state.password}
          error={state.errors.password}
          onChange={onChange}
        />

        <button type="submit" disabled={false}>
          Log in
        </button>

        <Links />
      </form>
    </>
  )
}
