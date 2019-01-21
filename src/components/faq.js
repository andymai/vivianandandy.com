import React from 'react'

const Faq = ({q,children}) => (
  <div>
    <h4>{q}</h4>
    {children}
  </div>
)

export default Faq