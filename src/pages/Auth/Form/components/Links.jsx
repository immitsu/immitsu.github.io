import React from 'react'

const links = [
  {
    href: 'https://en.wikipedia.org/wiki/Login',
    text: 'Forgot Login?'
  },
  {
    href: 'https://en.wikipedia.org/wiki/Password',
    text: 'Forgot Password?'
  }
]

export const Links = () => {
  return (
    <div className="links smaller">
      {links.map(({ href, text }) => (
        <a key={text} href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ))}
    </div>
  )
}
