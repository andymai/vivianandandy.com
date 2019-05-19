import React from 'react'
import Button from './button'
import './nav.scss'

const Nav = () => (
  <nav className='nav-wrapper'>
    <Button cta title="Click here to RSVP" href="https://goo.gl/forms/sUzSbFcyzo0hx7Hm2" target="_blank" ></Button>
    <ul className='nav'>
      <li><a href="#story"><i class="material-icons">change_history</i>Story</a></li>
      <li><a href="#schedule"><i class="material-icons">list</i>Schedule</a></li>
      <li><a href="#travel"><i class="material-icons">local_airport</i>Travel</a></li>
      <li><a href="#registry"><i class="material-icons">card_giftcard</i>Registry</a></li>
      <li><a href="#faq"><i class="material-icons">help_outline</i>FAQ</a></li>
    </ul>
  </nav>
)

export default Nav
