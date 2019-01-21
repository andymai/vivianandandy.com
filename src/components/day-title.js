import React from 'react'

const DayTitle = () => (
  <React.Fragment>
    <h4 style={{
      display: 'inline-block', 
      position: 'sticky', 
      top: 0, 
      backgroundColor: 'rgba(255,255,255,.9)', 
      paddingTop: 8, 
      paddingBottom: 0,
      textTransform: 'uppercase',
      fontSize: 14,
      fontFamily: 'PT Sans, sans-serif',
      letterSpacing: 1,
      zIndex: 1000,
    }}>Saturday, May 25, 2019</h4>
  </React.Fragment>
  
)

export default DayTitle
