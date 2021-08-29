import React from 'react'
import { Form } from './Form/Form'
import './style.css'

export function Auth() {
  return (
    <div className="auth-page">
      <div className="auth-page__wrapper">
        <div className="auth-page__content">
          <Form />
        </div>
      </div>
    </div>
  )
}
