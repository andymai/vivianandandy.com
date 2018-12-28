import React from 'react'
import './event.scss'

const Event = ({start, end, title, location, address, children}) => {

  return (
    <div className="event">
      <h5 className="event__time">{start} - {end}</h5>
      <div className="event__info">
        <h2 className="event__info__title">{title}</h2>
        <address>
          <h3 className="event__info__location">{location}</h3>
          { address && (<span className="event__info__address">{address}</span>) }
        </address>
        {children}
      </div>
    </div>
  )
}

export default Event