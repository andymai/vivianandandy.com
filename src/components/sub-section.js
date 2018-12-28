import React from 'react'
import './sub-section.scss'

const SubSection = ({icon, children, title}) => (
  <div className='sub-section'>
    { icon && (<img src={icon} alt={title} />)}
    <div className='sub-section__content'>
      <h3>{title}</h3>
      {children}
    </div>
  </div>
)

export default SubSection