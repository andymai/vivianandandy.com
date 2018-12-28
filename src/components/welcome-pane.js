import React from 'react'
import Button from './button'
import './welcome-pane.scss'

const WelcomePane = () => (
  <div className="welcome-pane">
    <div className="welcome-pane__content">
      <h1>Vivian &amp; Andy</h1>
      <p>Saturday, May 25, 2019</p>
      <Button title="RSVP" href="" cta/>
    </div>
  </div>
)

export default WelcomePane