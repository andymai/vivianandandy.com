import React from 'react'
import classNames from 'classnames'
import './button.scss'

const Button = ({title, href, cta}) => (
  <a className={classNames('button', cta ? 'button--cta': null)} href={href} target="_blank" rel="noopener noreferrer">{title}</a>
)

export default Button