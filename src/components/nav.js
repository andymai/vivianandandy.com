import React from 'react'
import './nav.scss'

const Nav = () => (
  <nav className='nav-wrapper'>
    <ul className='nav'>
      <li><a href="#story"><i/>Story</a></li>
      <li><a href="#schedule"><i/>Schedule</a></li>
      <li><a href="#travel"><i/>Travel</a></li>
      <li><a href="#registry"><i/>Registry</a></li>
      <li><a href="#faq"><i/>FAQ</a></li>
    </ul>
  </nav>
)

export default Nav