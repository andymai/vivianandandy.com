import React from 'react'
import './section.scss'

const Section = ({anchor, title, children}) => (
  <section id={anchor} className='section'>
    <h2 className='section__heading'>{title}</h2>
    {children}
  </section>
)

export default Section
