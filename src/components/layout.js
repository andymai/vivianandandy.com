import React from 'react'
import PropTypes from 'prop-types'
import WelcomePane from './welcome-pane'

import './layout.scss'

const Layout = ({ children }) => (
  <div className='container'>
    <main className='content'>
      <WelcomePane />
      {children}
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
