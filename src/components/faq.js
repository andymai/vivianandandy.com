import React from 'react'

const Faq = ({q,children}) => (
  <div>
    <strong>{q}</strong>
    {children}
  </div>
)

export default Faq