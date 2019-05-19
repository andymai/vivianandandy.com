import React from 'react'
import './event.scss'

const Event = ({start, end, title, location, address, children, url}) => {

  return (
    <div className="event">
      <h5 className="event__time">{start} &#9675; {end}</h5>
      <div className="event__info">
        <h2 className="event__info__title">{title}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <address>
            <h3 className="event__info__location">{location}</h3>
            { address && (<span className="event__info__address">{address}</span>) }
          </address>
        </a>
        {children}
      </div>
    </div>
  )
}

export default Event
